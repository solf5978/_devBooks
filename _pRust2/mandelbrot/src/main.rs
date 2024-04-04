use num::Complex;
// struct defined inside num::Complex
// struct Complex<T> {
//     re: T,
//     im: T,
// }

fn complex_square_add_loop(c: Complex<f64>) {
    let mut z = Complex { re: 0.0, im: 0.0 };
    loop {
        z = z * z + c;
        if z.re * z.re + z.im * z.im > 4.0 {
            break;
        }
    }
}

fn escape_time(c: Complex<f64>, limit: usize) -> Option<usize> {
    let mut z = Complex { re: 0.0, im: 0.0 };
    let mut counter = 0;
    for i in 0..limit {
        if z.norm_sqr() > 4.0 {
            return Some(i);
        }
        z = z * z + c;
    }
    None
}

fn main() {
    let c = Complex { re: 3.0, im: 4.0 };
    complex_square_add_loop(c);
}
