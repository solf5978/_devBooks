#[macro_use]
extern crate rocket;

use rocket::{Build, Rocket};z
use std::collections::HashMap;

struct Filters {
    age: u8,
    active: bool,
}

#[derive(Debug)]
struct User{
    uuid: String,
    name: String,
    age: u8,
    grade: u8,
    active: bool,
}

static USERS: HashMap<&str, User> = {
    let map = HashMap::new();
    map.insert(
        "UUID_1",
        User {
            uuid: String::from("UUID_1"),
            name: String::from("Hello Rocket"),
            age: 10,
            grade: 1,
            active: true,
        },
    );
}