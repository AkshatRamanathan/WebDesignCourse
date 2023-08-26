[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/D_Mav-3-)

# Repo for assignment 9

## JS Reminders app

A NodeJS and ExpressJS backend for the [Reminders application](https://github.com/neu-mis-info-6150-summer-2023/assignment-6-AkshatRamanathan) using JavaScript with MongoDB integration.

## User Requirements

- As a developer, I should be able to fetch all existing reminders using Reminder Resource.
- As a developer, I should be able to filter all existing reminders using keywords in name and description, and reminders between a date range.
- As a developer, I should be able to add a Reminder using Reminder Resource.
- As a developer, I should be able to update a Reminder using Reminder Resource.
- As a developer, I should be able to delete a Reminder using Reminder Resource.

## APIs Identified

- PATH (/reminder)
  - `GET` - GET reminder details (all/ search with query params)
  - `POST` - POST add new reminder
- PATH (/reminder/:id)
  - `GET`- GET reminder with provided ID
  - `PUT` - Update reminder with provided ID
  - `DELETE` - delete reminder with provided ID
- PATH (/reminder/filter/:text)
  - `GET` - GET filtered list of reminders with text matching in name and description
- PATH (/reminder/range)
  - `GET` - GET filtered list of reminders with date range between given date values

## Technical Requirements

The goal of this assignment is to learn about Nodejs and REST API.
Use the express framework for developing the endpoints.
Use MongoDB for the persistence layer.
A todo object has id, title, description, createdDate, & lastModifiedDate properties.
Your git repo should have a .gitignore file excluding log files, node_modules directory, and README.md with the description of the assignment. You should have multiple smaller commits. It would be best if you pushed the assignment to the main branch of the assignment repo. Please don't turn it in on the blackboard.

## Grading

1. Code documentation. (10 Points).
2. .gitignore, README.md and multiple Git commits (10 Points)
3. If the correct HTTP request method is not used. (-10 points for each wrong request method)If the controller, services, and model layer are not created. (-10 points for each missing layer)
4. Assignment completion. (80 Points)

## Instructions to run the application

- Clone the repository
- Run the following commands

```bash
npm install
npm start
```

- Continue with Frontend/UI installation and running
