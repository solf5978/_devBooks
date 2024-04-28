pub struct Rot13(pub String);
impl super::Cipher for Rot13 {
    fn original_string(&self) -> String {
        String::from(&self.0)
    }
    fn encrypted_string(&self) -> String {
        self.0
            .chars()
            .map(|ch| match ch {
                'a'..='m' | 'A'..='M' => (ch as u8 + 13) as char,
                'n'..='z' | 'N'..='Z' => (ch as u8 - 13) as char,
                _ => ch,
            })
            .collect()
    }
}
