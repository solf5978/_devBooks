#[derive(Debug)]
struct Arguments {
    target: String,
    replacement: String,
    filename: String,
    output: String,
}

use text_colorizer::*;
fn print_usage() {
    eprintln!(
        "{} - change occurrences of one string into another",
        "quickreplace".green()
    );
    eprintln!("Usage: quickreplace <target> <replacement> <INPUT> <OUTPUT>");
}

use std::env;
fn parse_args() -> Arguments {
    let args: Vec<String> = env::args().skip(1).collect();
    if args.len() != 4 {
        print_usage();
        eprintln!(
            "{} - numbers of arguments expected 4 , only {} presented",
            "Error:".red().bold(),
            args.len()
        );

        std::process::exit(1);
    }
    Arguments {
        target: args[0].clone(),
        replacement: args[1].clone(),
        filename: args[2].clone(),
        output: args[3].clone(),
    }
}

use regex::Regex;
fn replace(target: &str, replacement: &str, text: &str) -> Result<String, regex::Error> {
    let re = Regex::new(target)?;
    Ok(re.replace_all(text, replacement).to_string())
}

use std::fs;
fn main() {
    let args = parse_args();

    let data = match fs::read_to_string(&args.filename) {
        Ok(data) => data,
        Err(e) => {
            eprintln!("Error: {}", e);
            std::process::exit(1);
        }
    };

    let replaced_data = match replace(&args.target, &args.replacement, &data) {
        Ok(v) => v,
        Err(e) => {
            eprintln!("{} failed to replace text: {:?}", "Error:".red().bold(), e);
            std::process::exit(1);
        }
    };

    match fs::write(&args.output, replaced_data) {
        Ok(_) => {}
        Err(e) => {
            eprintln!("Error: {}", e);
            std::process::exit(1);
        }
    };
}