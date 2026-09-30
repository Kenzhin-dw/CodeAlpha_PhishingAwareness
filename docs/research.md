# Research & Development

## Requirement Analysis

CodeAlpha Task 2 requires a phishing-awareness presentation or module that teaches email and fake-site recognition, explains social engineering, provides protective practices, uses real-world examples, and includes interactive quizzes. PhishAware implements those requirements as a browser-based learning path with 12 modules, three practice labs, a final assessment, and device-local progress.

Primary guidance reviewed:

- [CISA — Secure Our World resources](https://www.cisa.gov/resources-tools/resources/secure-our-world-cybersecurity-awareness-month-resources) emphasizes recognizing and reporting phishing, strong passwords, MFA, and software updates.
- [FTC — How to Recognize and Avoid Phishing Scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams) describes common deceptive stories, independent verification, reporting, MFA, updates, and post-click response.

## Learning Objectives

After completing the module, a learner should be able to define phishing, identify common delivery channels, inspect a sender and URL, recognize social pressure, choose an independent verification route, apply prevention habits, and describe the first response after a suspected interaction.

## Target Audience

Students, interns, new employees, and everyday technology users. Content assumes no cybersecurity background and avoids specialist terminology unless it is explained.

## Training Methodology

The experience uses short explanation → worked example → decision practice → immediate feedback → final retrieval practice. Feedback explains the reasoning instead of rewarding pattern memorization. The course repeatedly reinforces “pause, inspect, verify independently, report.”

## Content Architecture

The sequence moves from fundamentals and types to email inspection, website and URL analysis, human factors, safe response, documented real-world patterns, and a final quiz. The progress dashboard makes completion visible without requiring an account.

## Interactive Learning Strategy

- Six “Spot the Phish” message classifications
- Six reserved-domain URL decisions
- Five defensive social-engineering scenarios
- Click-to-reveal email evidence
- Twelve-question final assessment with answer review and targeted module recommendations
- Lightweight badges and local progress persistence

## Technology Selection

HTML5, CSS3, and vanilla JavaScript keep deployment simple and allow the project to run from `index.html`, a local static server, GitHub Pages, or any static host. Content data is separated from rendering logic. `localStorage` is used only for progress and scores.

## Safety Considerations

All organizations and scenarios are fictional. URLs use reserved/example-style domains and are displayed as text only. The simulated sign-in page contains no form fields and submits nothing. There is no backend, authentication, email sending, tracking, redirect, credential collection, or storage of personal data.

## Limitations

Visual clues cannot reliably prove whether a message or website is legitimate. Sender fields can be spoofed, writing can be polished, brands can be copied, HTTPS can be used by malicious sites, and a displayed link may differ from its destination. The training therefore teaches evidence aggregation and independent verification. The simplified URL exercises explain the registrable-domain idea but do not implement a Public Suffix List parser. Progress is limited to one browser profile and can be cleared by the user or browser.

