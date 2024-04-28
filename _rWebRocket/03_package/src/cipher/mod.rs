pub mod rot13;
pub trait Cipher {
    fn original_string(&self) -> String;
    fn encrypted_string(&self) -> String;
}
