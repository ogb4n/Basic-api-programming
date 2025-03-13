use actix_web::{get, App, HttpRequest, HttpResponse, HttpServer};
use dotenv::dotenv;
use std::env;

#[get("/ping")]
async fn ping(req: HttpRequest) -> HttpResponse {
    let headers = req.headers();
    let mut headers_map = serde_json::Map::new();
    
    for (key, value) in headers.iter() {
        headers_map.insert(key.to_string(), serde_json::Value::String(value.to_str().unwrap_or("").to_string()));
    }
    
    HttpResponse::Ok().json(headers_map)
}

#[tokio::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    let port = env::var("PING_LISTEN_PORT").expect("PING_LISTEN_PORT must be set");
    let port: u16 = port.parse().expect("PING_LISTEN_PORT must be a valid u16");

    HttpServer::new(|| {
        App::new()
            .service(ping)
    })
    .bind(("0.0.0.0", port))?
    .run()
    .await
}