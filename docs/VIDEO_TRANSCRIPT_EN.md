# English Technical Video Transcript

Stage directions in square brackets are actions. Do not read them aloud.

## 1. Introduction — approximately 25 seconds

[SHOW: PhishAware homepage]

Hello everyone. My name is Muhammad Ihsan Hafizh.

This is my project for the CodeAlpha Cyber Security Internship, Task 2: Phishing Awareness Training.

PhishAware is an interactive browser-based module that teaches users to inspect suspicious messages, links, websites, and social-engineering requests.

## 2. Project objective — approximately 25 seconds

[SHOW: learning path in the sidebar, then open Phishing Fundamentals]

Phishing is not limited to badly written emails. Modern phishing can look professional and can arrive through email, text messages, phone calls, social media, or QR codes.

The objective of this project is to teach practical decision-making. The learner studies the warning signs, applies the knowledge in exercises, and receives an explanation after every answer.

## 3. Architecture — approximately 35 seconds

[SHOW: `docs/architecture.md`]

PhishAware is a static single-page application. It does not use a backend, database, framework, or external API.

The workflow starts with structured training data. JavaScript renders the content, checks each selected answer, calculates the score, and displays feedback.

Completion and score data are stored in the browser using localStorage. A custom progress-change event then refreshes the header, navigation, completion buttons, and dashboard.

Hash routes control the visible training section without a server-side router.

## 4. Technology stack — approximately 25 seconds

[SHOW: VS Code Explorer with `index.html`, `css`, and `js`]

The project uses HTML5 for semantic structure, CSS3 for the responsive interface, and vanilla JavaScript for navigation, rendering, scoring, and state management.

This stack fits the project because it needs no backend. It can open directly, run on a small local HTTP server, or deploy as a static website.

## 5. How the system works — approximately 45 seconds

[SHOW: `js/challenges.js`]

The learning content is separated from the presentation logic. This file contains the fictional message examples, URL exercises, and social-engineering scenarios. Each record includes the displayed content, the expected answer, and the explanation.

[SHOW: `js/app.js`, around `answerBasic` and `finishQuiz`]

The application renders one exercise at a time. After an answer, it disables the buttons to prevent double scoring and then explains the evidence.

The final quiz calculates a percentage, assigns a neutral learning label, and maps incorrect topics to suggested modules.

[SHOW: `js/progress.js`]

This small progress store saves completed modules and scores under one browser-storage key. It does not store a name, email address, password, or other personal information.

## 6. Live demonstration — approximately 1 minute 30 seconds

[SHOW: application homepage, then open Email Red Flags]

I will now demonstrate the main training features.

This fictional email highlights six areas: the sender domain, urgency, greeting, requested action, destination domain, and sensitive-information request.

One clue alone is not proof. Correct analysis combines identity, context, destination, and the requested action.

[SHOW: Fake Websites]

This fake website is visual only. The email and password areas are styled text, and the sign-in button is disabled. No credentials can be entered or transmitted.

The address uses a misleading subdomain. The registrable domain is `login-check.example`. HTTPS protects the connection but does not prove the site is legitimate.

[SHOW: URL Detective and answer one item]

URL Detective contains six safe example addresses and explains the controlling domain after each decision.

[SHOW: Decision Scenarios and choose an independent verification answer]

The scenario module tests the safest next action. In this IT support example, the correct response is to contact IT through the official help channel. This avoids using contact details supplied by a possible attacker.

[SHOW: Final Quiz]

The final assessment contains 12 questions across the main training topics.

[SHOW: quiz result or Progress Dashboard]

The result shows the score, explanations, and recommended modules. The dashboard combines completion, challenge accuracy, quiz results, and achievements.

## 7. Important technical implementation — approximately 35 seconds

[SHOW: `js/app.js`, then dashboard]

Three implementation details are especially important.

First, the content is data-driven. New questions can be added to the data files without rebuilding the page structure.

Second, the shared answer function handles the three practice labs. It locks the answer buttons, updates the correct score, renders feedback, and advances to the next item.

Third, the dashboard reads the saved progress state and aggregates completed modules and challenge totals. This keeps the displayed statistics consistent with the stored result.

## 8. Testing and results — approximately 30 seconds

[SHOW: `tests/test-cases.md`]

The project was tested with JavaScript syntax checks, local asset-reference checks, source safety searches, a local HTTP server, and browser interaction testing.

The recorded browser tests cover every navigation route, module progression, six email highlights, all six message decisions, all six URL decisions, five social-engineering scenarios, the 12-question quiz, quiz retake, saved progress after refresh, mobile layout at 390 by 844 pixels, keyboard focus, and browser console errors.

The final confirmation that clears saved progress was not accepted during automation, so that destructive step is honestly marked as not run.

## 9. Security and ethics — approximately 25 seconds

[SHOW: fake website label or README Security / Ethics section]

This project is defensive and educational. All organizations are fictional, and the URLs use safe example-style domains.

There is no credential collection, email sending, malicious redirect, tracking pixel, external phishing infrastructure, or executable attachment. The simulated login page is visual only.

## 10. Limitations — approximately 20 seconds

[SHOW: `docs/limitations.md`]

The project has several limitations. Progress is stored only in the current browser. The URL exercises use controlled examples and do not implement a complete Public Suffix List parser. Also, visual clues cannot guarantee that a real message or website is safe, so independent verification is still necessary.

## 11. Conclusion — approximately 25 seconds

[SHOW: homepage or progress dashboard]

Overall, PhishAware demonstrates how cybersecurity awareness can be taught through short explanations, safe simulations, immediate feedback, and practical decision exercises.

Through this project, I improved my understanding of phishing indicators, URL structure, social engineering, incident response, accessible frontend design, and browser-based state management.

Thank you for watching.
