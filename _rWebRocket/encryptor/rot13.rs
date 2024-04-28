pub struct Rot13(pub String);
impl super::Encryptable for Rot13 {
    fn encrypt(&self) -> String {
        let mut new_string = String::new();
        // let len = self.0.len();
        // for i in 0..len {
        //     if (self.0[i] >= 'a' && self.0[i] < 'n') || (self.0[i] >= 'A' && self.0[i] < 'N') {
        //         new_string.push((self.0[i] as u8 + 13) as char);
        //     } else if (self.0[i] >= 'n' && self.0[i] < 'z') || (self.0[i] >= 'N' && self.0[i] < 'Z')
        //     {
        //         new_string.push((self.0[i] as u8 - 13) as char);
        //     } else {
        //         new_string.push(self.0[i]);
        //     }
        // }
        // new_string
        for ch in self.0.chars() {
            if (ch >= 'a' && ch < 'n') || (ch >= 'A' && ch < 'N') {
                new_string.push((ch as u8 + 13) as char);
            } else if (ch >= 'n' && ch < 'z') || (ch >= 'N' && ch < 'Z') {
                new_string.push((ch as u8 - 13) as char);
            } else {
                new_string.push(ch);
            }
        }
        new_string
    }
}
