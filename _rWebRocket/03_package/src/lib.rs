pub mod encryptor;
pub trait Cipher {
    fn original_string(&self) -> String;
    fn encrypted_string(&self) -> String;
}
