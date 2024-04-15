use std::io::{Read, Write};
use std::net::TcpStream;
use std::str;

fn main() {
    let mut stream = TcpStream::connect("localhost:3456").unwrap();
    stream.write("Hello, Rust Web".as_bytes()).unwrap();
    let mut buffer = [0; 16];
    stream.read(&mut buffer).unwrap();
    println!(
        "Got Repsonse From Server: {:?}",
        str::from_utf8(&buffer).unwrap()
    );
}
