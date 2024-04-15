use std::net::TcpStream;

fn main() {
    let _stream = TcpStream::connect("localhost:3456").unwrap();
}
