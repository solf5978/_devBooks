#[macro_use]
extern crate rocket;

use rocket::{Build, Rocket};
#[get("/")]
// alternative way
// #[route(GET, path = "/")]
fn index() -> &'static str {
    "Hello, Rocket!!"
}

#[launch]
fn rocket() -> Rocket<Build> {
    rocket::build().mount("/", routes![index])
}
