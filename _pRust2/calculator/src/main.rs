use std::env;
use std::str::FromStr;

fn main() {
    let mut numbers = Vec::new();
    for arg in env::args().skip(1) {
        numbers.push(u64::from_str(&arg).expect("error parsing arguments"));
    }

    if numbers.len() == 0 {
        eprintln!("Usage: gcd NUMBER1 NUMBER2");
        std::process::exit(1);
    }
    let mut d = numbers[0];
    for m in &numbers[1..] {
        d = gcd(d, *m);
    }
    println!("The Greatest Common Divisor of {:?} is {}", numbers, d);
}
