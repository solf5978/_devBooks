#[macro_use]
extern crate rocket;

use lazy_static::lazy_static;
use rocket::http::ContentType;
use rocket::request::FromParam;
use rocket::response::{self, Responder, Response};
use rocket::{Build, Rocket};
use std::collections::HashMap;
use std::io::Cursor;
use std::vec::Vec;

#[derive(FromForm)]
struct Filters {
    age: u8,
    active: bool,
}

struct NameGrade<'r> {
    name: &'r str,
    grade: u8,
}

impl<'r> FromParam<'r> for NameGrade<'r> {
    type Error = &'static str;

    fn from_param(param: &'r str) -> Result<Self, Self::Error> {
        const ERROR_MESSAGE: Result<NameGrade, &'static str> = Err("Error parsing user parameter");

        let name_grade_vec: Vec<&'r str> = param.split('_').collect();
        match name_grade_vec.len() {
            2 => match name_grade_vec[1].parse::<u8>() {
                Ok(n) => Ok(Self {
                    name: name_grade_vec[0],
                    grade: n,
                }),
                Err(_) => ERROR_MESSAGE,
            },
            _ => ERROR_MESSAGE,
        }
    }
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
            "3e3dd4ae-3c37-40c6-aa64-7061f284ce28",
            User {
                uuid: String::from("3e3dd4ae-3c37-40c6-aa64-7061f284ce28"),
                name: String::from("John Doe"),
                age: 18,
                grade: 1,
                active: true,
            },
        );
        map
    };
}

#[get("/user/<uuid>", rank = 1, format = "text/plain")]
fn user(uuid: &str) -> Option<&User> {
    let user = USERS.get(uuid);
    match user {
        Some(user) => Some(user),
        None => None,
    }
    // match user {
    //     Some(u) => format!("Found user: {:?}", u),
    //     None => String::from("User not found"),
    // }
}

impl<'r> Responder<'r, 'r> for &'r User {
    fn respond_to(self, request: &'r rocket::Request<'_>) -> response::Result<'r> {
        let user = format!("Found user: {:?}", self);
        Response::build()
            // std::io::Cursor has already implemented tokio::io::{AsyncRead, AsyncSeek} traits
            .sized_body(user.len(), Cursor::new(user))
            .raw_header("X-USER-ID", self.uuid.to_string())
            .header(ContentType::Plain)
            .ok()
    }
}

#[get("/users/<name_grade>?<filters..>")]
fn users(name_grade: NameGrade, filters: Option<Filters>) -> Option<NewUser> {
    let users: Vec<&User> = USERS
        .values()
        .filter(|user| user.name.contains(&name_grade.name) && user.grade == name_grade.grade)
        .filter(|user| {
            if let Some(fts) = &filters {
                user.age == fts.age && user.active == fts.active
            } else {
                true
            }
        })
        .collect();
    // if users.is_empty() {
    //     String::from("No user found")
    // } else {
    //     users
    //         .iter()
    //         .map(|u| format!("{:?}", u))
    //         .collect::<Vec<String>>()
    //         .join(",")
    // }
    if users.len() > 0 {
        Some(NewUser(users))
    } else {
        None
    }
}

struct NewUser<'a>(Vec<&'a User>);

impl<'r> Responder<'r, 'r> for NewUser<'r> {
    fn respond_to(self, request: &'r rocket::Request<'_>) -> response::Result<'r> {
        let user = self
            .0
            .iter()
            .map(|u| format!("{:?}", u))
            .collect::<Vec<String>>()
            .join(",");
        Response::build()
            .sized_body(user.len(), Cursor::new(user))
            .header(ContentType::Plain)
            .ok()
    }
}

#[launch]
fn rocket() -> Rocket<Build> {
    rocket::build().mount("/", routes![user, users])
}
