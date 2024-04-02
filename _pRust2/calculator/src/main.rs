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

fn gcd(mut n: u64, mut m: u64) -> u64 {
    assert!(n != 0 && m != 0);
    while m != 0 {
        if m < n {
            let t = m;
            m = n;
            n = t;
        }
        m = m % n;
    }
    n
}

#[test]
fn test_gcd() {
    assert_eq!(gcd(12, 18), 6);
    assert_eq!(gcd(18, 12), 6);
    assert_eq!(gcd(12, 24), 12);
    assert_eq!(gcd(24, 12), 12);
    assert_eq!(gcd(12, 0), 12);
    assert_eq!(gcd(0, 12), 12);
    assert_eq!(gcd(0, 0), 0);
    assert_eq!(gcd(12, 12), 12);
}
