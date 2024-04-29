#[macro_use]
extern crate rocket;

use rocket::{Build, Rocket};
#[derive(FromForm)]
struct Filters {
    age: u8,
    active: bool,
}

#[route(GET, uri = "/user/<uuid>", rank = 1, format = "text/plain")]
fn user(uuid: &str) {
    todo!();
}

#[route(GET, uri = "/user/<grade>?<filters..>")]
fn users(grade: u8, filters: Filters) {}

// struct S;
// #[get("/<id>")]
// fn process(id: S) {
//     todo!();
// }

#[launch]
fn rocket() -> Rocket<Build> {
    rocket::build().mount("/", routes![user, users])
}
