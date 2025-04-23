FROM rustlang/rust:nightly-slim AS builder

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y musl-tools && rm -rf /var/lib/apt/lists/*

RUN rustup target add x86_64-unknown-linux-musl

COPY Cargo.toml Cargo.lock ./
RUN cargo fetch --target x86_64-unknown-linux-musl

COPY . .

RUN cargo build --release --target x86_64-unknown-linux-musl

FROM alpine:latest

RUN apk --no-cache add ca-certificates

COPY --from=builder /usr/src/app/target/x86_64-unknown-linux-musl/release/rust-api /usr/local/bin/rust-api

COPY .env /usr/local/bin/.env

WORKDIR /usr/local/bin

EXPOSE 3000

CMD ["rust-api"]