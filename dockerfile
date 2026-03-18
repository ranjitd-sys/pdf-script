# ---------- Builder Stage ----------
FROM oven/bun:1 AS builder

WORKDIR /app


COPY package.json bun.lock ./

RUN bun install --frozen-lockfile


COPY . .


RUN bun build src/index.ts \
    --outdir dist \
    --target bun

# ---------- Runtime Stage ----------
FROM oven/bun:1-slim

WORKDIR /app
RUN apt-get update && apt-get install -y unzip \
    && rm -rf /var/lib/apt/lists/*
    
COPY --from=builder /app/src/Global-Store ./Global-Store
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

EXPOSE 3000

CMD ["bun", "dist/index.js"]