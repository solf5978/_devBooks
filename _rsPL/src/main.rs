fn main() {
    // let b = Box::new(0);
    // let b2 = b;
    // move_a_box(b);

    // let b = Box::new(0);
    // move_a_box(b);
    // let b2 = b;

    // None of these snippets

    // let b = Box::new(0);
    // move_a_box(b);
    // println!("{}", b);

    let b = Box::new(0);
    let b2 = b;
    println!("{}", b);
    move_a_box(b2);
}

fn move_a_box(b: Box<i32>) {
    // This space intentionally left blank
}
