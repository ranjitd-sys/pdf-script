# 📦 PDF ZIP → Excel Converter

## 🚀 Overview

**PDF ZIP → Excel Converter** is an automation tool that extracts all PDF files from ZIP archives and converts them into structured Excel files based on configurable parameters.

The tool is designed to eliminate manual document processing by enabling bulk extraction, parsing, and transformation of PDF data into Excel format.

---

## ✨ Features

* 📂 Automatically extracts PDFs from ZIP files
* 📄 Batch processing support
* 📊 Converts PDF data into Excel spreadsheets
* ⚙️ Parameter-driven conversion workflow
* ⚡ Fast and scalable processing
* 🔁 Automation-friendly design

---

## 🏗️ Workflow

```
ZIP Archive
     ↓
Extract PDFs
     ↓
Parse PDF Content
     ↓
Apply Conversion Parameters
     ↓
Generate Excel File
```
---

## 🛠 Tech Stack

* Node.js / Bun
* TypeScript
* Effecty
* Unpdf
* exceljs
* Docker (optional)

---

## 📥 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/pdf-zip-excel-converter.git
cd pdf-zip-excel-converter
```

### 2️⃣ Install Dependencies

Using npm:

```bash
npm install
```

Using Bun:

```bash
bun install
```

---

## ▶️ Usage

### Run the Tool

```bash
npm run start
```

or

```bash
bun run start
```

### Example Command

```bash
node index.js --zip ./input/files.zip --output ./output
```


## 📁 Project Structure

```
.
├── src/
│   ├── extractor/      # ZIP extraction logic
│   ├── parser/         # PDF parsing
│   ├── converter/      # Excel generation
│   └── index.ts
├── input/
├── output/
├── Dockerfile
└── README.md
```

---

## 🧠 How It Works

1. Upload or provide a ZIP archive
2. Tool extracts all PDF documents
3. Parses relevant data fields
4. Applies parameter-based transformation
5. Generates structured Excel output

---

## 📌 Use Cases

* Invoice processing automation
* Tax document conversion
* Financial reporting pipelines
* Bulk PDF data extraction
* Enterprise document workflows

---

## 🐳 Docker Support (Optional)

Build Image:

```bash
docker build -t pdf-excel-converter .
```

Run Container:

```bash
docker run -v $(pwd)/input:/app/input pdf-excel-converter
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---



---

## 👨‍💻 Author

**Ranjit Das**

Developer focused on automation, backend systems, and scalable tooling.  tgive m