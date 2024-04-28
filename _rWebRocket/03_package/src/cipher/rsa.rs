use std::error::Error;

pub struct Rsa {
    data: String,
}

impl Rsa {
    pub fn new(input: String) -> Result<Self, Box<dyn Error>> {
        unimplemented!();
    }
}

impl super::Cipher for Rsa {
    fn original_string(&self) -> Result<String, Box<dyn Error>> {
        unimplemented!();
    }

    fn encrypted_string(&self) -> Result<String, Box<dyn Error>> {
        Ok(String::from(&self.data))
    }
}
