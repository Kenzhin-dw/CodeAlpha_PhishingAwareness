# PhishAware Video Cheat Sheet

## Before recording

- Start: `python -m http.server 8000`
- Open: `http://localhost:8000`
- Prepare: architecture, challenges, app, progress, test-cases
- Close personal tabs and notifications
- Never show credentials, tokens, account pages, or private remotes

## 00:00 — Introduction

- Muhammad Ihsan Hafizh
- CodeAlpha Cyber Security Internship
- Task 2: Phishing Awareness Training
- PhishAware: interactive browser training

## 00:25 — Objective

- Modern phishing can look professional
- Multiple channels: email, SMS, voice, social, QR
- Teach decisions, not simple visual rules

## 00:50 — Architecture

- Static single-page application
- Data → renderer → answer check → score → localStorage → progress event → dashboard
- Hash routes; no backend or API

## 01:25 — Technology

- HTML5: semantic structure
- CSS3: responsive, accessible UI
- Vanilla JavaScript: logic and scoring
- localStorage: device-local progress

## 01:45 — How it works

- Show `challenges.js`: data, expected answer, explanation
- Show `app.js`: answer buttons lock, feedback, quiz scoring
- Show `progress.js`: one storage key, no personal data

## 02:25 — Live demo

- Email Red Flags → Show Red Flags
- Fake Websites → visual only, disabled sign-in
- URL Detective → answer one, explain registrable domain
- Decision Scenarios → verify through official channel
- Final Quiz → score and review
- Dashboard → modules, accuracy, quiz, badges

## 04:05 — Technical details

- Data-driven content
- Shared challenge-answer function
- Dashboard aggregates saved progress

## 04:35 — Testing

- Syntax and references
- All navigation routes
- 6 email flags, 6 messages, 6 URLs, 5 scenarios, 12 quiz questions
- Persistence, mobile 390 × 844, keyboard focus, clean console
- Reset acceptance marked Not run

## 05:05 — Security and ethics

- Fictional organizations
- Example domains and inert URLs
- No forms, credential collection, sending, redirect, or tracking

## 05:25 — Limitations

- Browser-local progress
- Controlled URL examples
- Visual clues never guarantee safety

## 05:45 — Conclusion

- Awareness through explanation, simulation, feedback, and practice
- Learned phishing analysis, frontend design, and browser state management
- Thank viewers
