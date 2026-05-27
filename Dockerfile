FROM node:24.16.0-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# pnpmを有効化
RUN corepack enable

WORKDIR /app
CMD ["sh", "-c", "pnpm install && pnpm dev"]