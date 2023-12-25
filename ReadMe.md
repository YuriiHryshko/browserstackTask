## Summary of Repo

This repository contains automated tests using the WebDriverIO and BrowserStack.

## Requirements

Before running the tests, you need to have the following software and dependencies installed:

- Node.js
- npm

## Steps to Install

1. Clone this repository to your local machine: `git clone https://github.com/YuriiHryshko/browserstackTask.git`
2. Navigate to the project folder: `cd browserstackTask`
3. Install the required dependencies: `npm install`
4. Change name `.env.example` on `.env` and add variables

## Steps to Run Tests

You can run the tests with the following command:

### Run Tests on Google Pixel

`npm run test`

### Run Tests on Samsung

`npm run test:chrome`

## Steps to Create the Report

1. Generate the Allure report: `npm run report:generate`
2. Open the generated Allure report in the browser: `npm run report:open`
