fn main() {
    println!("Hello, world!");
}

fn gcd(mut n: u64, mut m: u64) -> u64 {
    assert!(n != 0 && m != 0);
    while m != 0 {
        if m < n {
            let t = m;
            m = n % m;
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
