use std::net::TcpListener;

fn main() {
    let connection_listener = TcpListener::bind("127.0.0.1:3456").unwrap();
    println!("Running on port: 3456");

    for stream in connection_listener.incoming() {
        let _stream = stream.unwrap();
        println!("Connection Established");
    }
}
