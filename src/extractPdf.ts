import { Effect } from "effect";
import { readdir } from "fs/promises";
import { join } from "path";
const folderPath = `${process.cwd()}/Global-Store`;
const findZip = () =>
  Effect.promise(async () => {
    const files = await readdir(folderPath);

    // console.log(files)
    const zip = files.find((file) => file.endsWith(".zip"));
    if (!zip) {
      throw new Error("No zip file found");
    }
    console.log(folderPath);
    return join(folderPath, zip);
  });

const unzip = (folderPath: string, outDir: string) =>
  Effect.promise(async () => {
    const proc = Bun.spawn({
      cmd: ["unzip", folderPath, "-d", outDir],
      stdout: "inherit",
      stderr: "inherit",
    });

    const exitCode = await proc.exited;

    if (exitCode !== 0) {
      throw new Error("Unzip failed");
    }

    return "Extracted successfully";
  });

export const getPdf = (outDir: string) =>
  Effect.gen(function* () {
    const zipPath = yield* findZip();

    console.log("ZIP found:", zipPath);

    yield* unzip(zipPath, outDir);

    console.log("Extraction complete");
    return "Extraction complete";
  });

  