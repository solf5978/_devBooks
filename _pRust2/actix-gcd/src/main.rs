use actix_web::{web, App, HttpResponse, HttpServer};
use serde::Deserialize;

#[derive(Deserialize)]
struct GcdParameter {
    n: u64,
    m: u64,
}

fn main() {
    let server = HttpServer::new(|| App::new().route("/", web::get().to(get_index)));
    println!("Serving on http://localhost:3000...");
    server
        .bind("127.0.0.1:3000")
        .expect("error binding server to address")
        .run()
        .expect("error running server");
}

fn get_index() -> HttpResponse {
    HttpResponse::Ok().content_type("text/html").body(
        r#"
            <title>GCD Calculator</title>
            <form action="/gcd" method="post">
            <input type="text" name="n" placeholder="Enter a number">
            <input type="text" name="m" placeholder="Enter another number">
            <button type="submit">Compute GCD</button>
            </form>
            "#,
    )
}

fn post_gcd(form: web::Form<GcdParameter>) -> HttpResponse {
    if form.n == 0 || form.m == 0 {
        return HttpResponse::BadRequest()
            .content_type("text/html")
            .body("Computing the GCD with zero is not allowed.");
    }

    let rep = format!(
        "The Greatest Common Divisor of the numbers {} and {} is <b>{}</b>\n",
        form.n,
        form.m,
        gcd(form.n, form.m)
    );
    HttpResponse::Ok().content_type("text/html").body(rep)
}
