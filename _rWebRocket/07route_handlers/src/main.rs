#[macro_use]
extern crate rocket;

use lazy_static::lazy_static;
use rocket::{Build, Rocket};
use std::collections::HashMap;

struct Filters {
    age: u8,
    active: bool,
}

#[derive(Debug)]
struct User {
    uuid: String,
    name: String,
    age: u8,
    grade: u8,
    active: bool,
}

lazy_static! {
    static ref USERS: HashMap<&'static str, User> = {
        let mut map = HashMap::new();
        map.insert(
            "UUID",
            User {
                uuid: "UUID".to_string(),
                name: "Name".to_string(),
                age: 18,
                grade: 1,
                active: true,
            },
        );
        map
    };
}

#[get("/user/<uuid>", rank = 1, format = "text/plain")]
fn user(uuid: &str) -> String {
    let user = USERS.get(uuid);
    match user {
        Some(u) => format!("Found user {:?}", u),
        None => String::from("User not found"),
    }
}
