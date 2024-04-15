use std::io::{Read, Write};
use std::net::TcpListener;

fn main() {
    let connection_listener = TcpListener::bind("127.0.0.1:3456").unwrap();
    println!("Running on port: 3456");

    for stream in connection_listener.incoming() {
        let mut stream = stream.unwrap();
        println!("Connection Established");
        let mut buffer = [0; 1024];
        stream.read(&mut buffer).unwrap();
        stream.write(&mut buffer).unwrap();
    }
}
