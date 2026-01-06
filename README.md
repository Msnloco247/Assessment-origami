# 🚀 Login Automation Project - SDET Assessment

This project is a high-quality test automation suite designed to validate the login functionality of [The Internet Herokuapp](https://the-internet.herokuapp.com/login). Built with a focus on **scalability, maintainability, and professional logging.**

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Playwright** | Core Test Framework |
| **TypeScript** | Strongly Typed Programming Language |
| **Winston** | Professional Logging System |
| **POM** | Page Object Model Design Pattern |
| **HTML Report** | Test Results & Insights |

---

## 🏗️ Project Structure

```text 
├── tests/               # Test scripts (Positive and Negative scenarios)
├── pages/               # Page classes with locators and actions (POM)
├── utils/               # Utilities (Winston Logger configuration)
├── logs/                # Execution logs (combined.log & error.log)
├── playwright.config.ts # Playwright global configuration
└── package.json         # Project dependencies and scripts
```

```text
✨ Key Features

Page Object Model (POM): Decouples test logic from UI locators, ensuring that changes in the UI only require updates in a single place.

Professional Logging: Integrated Winston to track execution flows. It captures detailed error messages and timestamps in both the console and persistent local files.

DRY Principle: Validation logic is centralized in reusable functions, minimizing redundancy and improving code readability.

Robust Error Handling: Custom try-catch blocks within Page Objects ensure that any failure is logged with full context before the test exits.


📋 Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (v16 or higher)

npm (comes with Node.js)


⚙️ Setup & Execution
Clone the repository:
git clone [https://github.com/Msnloco247/Assessment-origam.git](https://github.com/Msnloco247/Assessment-origam.git)
cd Assessment-origam

Install dependencies:
npm install

Install Playwright Browsers:
npx playwright install

🧪 Running Tests
You can run the tests using the following commands:

Run all tests (Headless):
npx playwright test

Run tests in UI Mode (Interactive):
npx playwright test --ui

View HTML Report:
npx playwright show-report


📝 Test Scenarios
✅ Positive Login: Validates successful login with correct credentials and redirection to the secure area.

❌ Invalid Username: Verifies that an error message is displayed and the user remains on the login page.

❌ Invalid Password: Verifies that the system denies access with a wrong password.

🚫 Invalid Credentials: Verifies that the system denies access when both the username and password are incorrect.
```

Developed by: Abner
