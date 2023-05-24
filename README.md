# MCA Laravel Sample Web application
A boiling-plate sample web application for Motor Culture Australia's web application.

Accessed from: https://github.com/ronaldhoangA4/MCA_Laravel_sample.git

## Introduction
### Purpose
MCA is looking is upgrade the web application to a different technology.
This project serves as a basic sample web application to measure performance and an option for future consideration.
### Scope
The project include:
- SQL database
- Back-end infrastrucure with NodeJS express
- Front-end app with ReactJS
- API Documentation
Components or aspects excluded from this project are:
- End-to-end testing - available through MCA Front-end Testing framework https://github.com/ronaldhoangA4/MCA_Frontend_Testing.git
- UX/UI aspects
- Any requirements not included in basic requirements as defined in MCA Testing Report
### Structure
| Week                     | Content                                                          |
|:-------------------------|:-----------------------------------------------------------------|
| README.md                | Main user manual                                                 |
| client/                  | Source code of client front-end application built with ReactJS   |
| public                   | Bundled front-end application to be served                       |
| routes/web.php           | Server application                                               |
| database/database.sqlite | Database file                                                    |
| MCA_TestingReport.pdf    | Test report on MCA's current web application,                    |
|                          | refer to for requirements and test process under 'basic'         |
| test-report.html         | Report end-to-end test run as described in MCA_TestingReport.pdf |

## Requirements
The list below outline requirements for executing the tests:
- Internet connection
- php
- Composer

## Instruction
### Installation
After cloning project to your computer from GitHub, open terminal and navigate into the project's directory.

### Execution
Commands are to be executed on terminal, navigated into the project's directory.

To start server: `php artisan serve`

To access the application, on browser go to `http://localhost:8000/`

To see API documentation, on browser go to `http://localhost:8000/api-docs`

To force close server (ensure any connection is closed first): `Ctrl + C`

## Author
Vinh Phuc (Ronald) Hoang

Intern Software Developer

Q1 Design

Email address: ronald.hoang.2000@gmail.com