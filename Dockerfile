#----------------BUILD-----------------
FROM jarredsumner/bun:edge as base
WORKDIR /app
RUN apk add curl bash --no-cache
RUN curl -sf https://gobinaries.com/tj/node-prune | sh

COPY ./src ./src
COPY package*.json ./

RUN bun install
RUN node-prune

#----------------RELEASE-----------------
FROM jarredsumner/bun:edge as release
COPY --from=base /app/ ./

EXPOSE 3000

CMD ["bun", "run" ,"./src/main.js"]
