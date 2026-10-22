# Piscine — Programming Exercises

> A collection of short programming exercises written during intensive "piscine" bootcamps at Ynov Campus, grouped by language: **Go**, **JavaScript** and **Java**.

![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)

---

## Overview

Each folder holds many small, independent exercises covering the fundamentals: algorithms, string handling, recursion, data structures and object-oriented programming. The same foundations are practised in three languages.

## Contents

| Language | Folder | What is inside |
|---|---|---|
| **Go** | [`go/`](go/) | Functions, recursion, strings, slices, runes, number printing in a base, linked-list helpers, small programs with `main` |
| **JavaScript** | [`javascript/`](javascript/) | Functions on numbers, strings, dates and arrays — one file per exercise |
| **Java** | [`java/`](java/) | Object-oriented design through an evolving *Adventure* project: abstract classes, interfaces, custom exceptions, `try/catch` |

### Java — the Adventure project

The Java part builds a small RPG model step by step, one folder per concept:

- `AdventureCharacter` — a base `Character` class.
- `AdventureAbstract` — abstract classes with `Healer`, `Tank`, `Sorcerer`, `Templar` and `Monster`.
- `AdventureInterface` — behaviour shared through interfaces.
- `AdventureException` / `AdventureCatch` — custom exceptions (`DeadCharacterException`) and error handling with `try/catch`, plus a `Weapon` class.

## Structure

```text
go/           Go exercises (module in go/go.mod)
javascript/   JavaScript exercises (one file per exercise)
java/         Java exercises grouped by concept
```

## Running an exercise

There is no global entry point — each exercise is independent.

```bash
# Go (dependencies of the module)
cd go && go mod download
go run ./printalphabet          # exercises with a main package live in their own folder

# JavaScript
node javascript/abs.js

# Java
cd java/AdventureAbstract && javac *.java
```

## Why this repository

It documents regular, hands-on practice of the basics in several languages — the foundation for the larger projects in the rest of this profile.

## Tech stack

Go · JavaScript · Java

---

**Author** — Konaté Adama · [github.com/DaskoStudio](https://github.com/DaskoStudio)
