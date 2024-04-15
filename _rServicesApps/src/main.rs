use std::net::TcpListener;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:2525");
    listener.accept();
    listener.incoming()
}
