import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "url";

const hostname = "0.0.0.0";
const port = parseInt(process.env.PING_LISTEN_PORT ?? "3000", 10);

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url ?? "", true);

  if (parsedUrl.pathname === "/ping" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.headers));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
};

const server = createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
