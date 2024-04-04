use num::Complex;

fn complex_square_add_loop(c: Complex<f64>) {
    let mut z = Complex { re: 0.0, im: 0.0 };
    loop {
        z = z * z + c;
        if z.re * z.re + z.im * z.im > 4.0 {
            break;
        }
    }
}
