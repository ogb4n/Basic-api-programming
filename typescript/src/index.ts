import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/ping", async (request, reply) => {
  return request.headers;
});

const start = async () => {
  try {
    await fastify.listen({
      port: parseInt(process.env.PING_LISTEN_PORT ?? "3000", 10),
    });
    fastify.log.info(
      `Server is running at http://localhost:${parseInt(
        process.env.PING_LISTEN_PORT ?? "3000",
        10
      )}`
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
