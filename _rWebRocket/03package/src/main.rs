use package::cipher::{rot13, rsa, Cipher};
// use crate::encryptor::Encryptable;
use std::io;

fn main() {
    println!("Input the string you want to encrypt");
    let mut user_input = String::new();
    io::stdin()
        .read_line(&mut user_input)
        .expect("Cannot read input");
    println!(
        "Your encrypted string: {}",
        rot13::Rot13(user_input).encrypted_string().unwrap()
    );

    println!("Input the string you want to Encrypt: ");
    let mut buf = String::new();
    io::stdin().read_line(&mut buf).expect("Cannot read input");

    let encrypted_input = rsa::Rsa::new(buf).expect("");
    let encrypted_string = encrypted_input.encrypted_string().expect("");

    println!("Your encrypted string: {}", encrypted_string);
    let decrypted_string = encrypted_input.original_string().expect("");
    println!("Your decrypted string: {}", decrypted_string);
}
