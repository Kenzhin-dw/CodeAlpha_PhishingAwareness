# PhishAware

## CodeAlpha Cyber Security Internship

## Task

**Task 2 — Phishing Awareness Training**

## Overview

PhishAware is a defensive, browser-based learning platform created for the CodeAlpha Cyber Security Internship. It teaches users to inspect messages, links, websites, and social-engineering pressure before acting.

The project combines concise instruction, fictional worked examples, three interactive practice labs, a 12-question final assessment, progress tracking, and lightweight achievements. It uses no backend and collects no credentials or personal information.

## Objectives

- Explain phishing and why it works
- Recognize common phishing types and social-engineering tactics
- Inspect email senders, requests, links, websites, and URL structure
- Apply safe verification, prevention, reporting, and recovery habits
- Practice decisions and review immediate feedback

## Features

- Responsive learning platform with sidebar navigation
- Twelve-module guided learning path
- Click-to-reveal fictional phishing email
- Non-operational fake website simulation
- “Spot the Phish,” URL, and social-engineering scenario labs
- Real-world phishing pattern overview with fictional examples
- Final quiz with score, performance label, answer review, and module recommendations
- `localStorage` progress, scores, badges, dashboard, and reset
- Semantic HTML, keyboard controls, visible focus, reduced-motion support, and text labels in addition to color

## Training Modules

1. Phishing fundamentals
2. Phishing types
3. Email red flags
4. Spot the Phish
5. Fake websites
6. URL Detective
7. Social engineering
8. Decision scenarios
9. Best practices
10. If you already clicked
11. Real-world patterns
12. Final quiz

## Interactive Challenges

- **Spot the Phish:** six fictional email or message decisions
- **URL Detective:** six safe, reserved-domain exercises
- **Decision Scenarios:** five defensive response choices

Every answer receives an explanation. The training avoids simplistic rules and encourages independent verification.

## Quiz

The final assessment has 12 multiple-choice, true-or-false, URL, and scenario questions. Results include a raw score, percentage, neutral learning label, answer review, explanations, and recommended modules. It is not a professional certification.

## Architecture / How It Works

PhishAware is a static single-page application:

1. `index.html` provides the semantic training sections and application shell.
2. `js/modules.js`, `js/challenges.js`, and `js/quiz.js` contain structured educational data.
3. `js/app.js` builds interactive cards, handles hash navigation, evaluates answers, and updates the interface.
4. `js/progress.js` stores completion and score data under the `phishaware-progress-v1` browser-storage key.
5. A `progresschange` event refreshes the header, navigation, completion controls, and dashboard.

There is no server-side component. See [`docs/architecture.md`](docs/architecture.md) for the component boundaries and data flow.

## Technology Stack

- HTML5 for semantic document structure
- CSS3 for responsive layout, interaction states, and accessible presentation
- Vanilla JavaScript for routing, rendering, scoring, and state management
- Browser `localStorage` for device-local progress

No framework, package manager, database, external API, or build step is required. There is no `requirements.txt` or `package.json` because the project has no third-party runtime dependencies.

## Installation

### Open directly

```powershell
cd CodeAlpha_PhishingAwareness
Start-Process .\index.html
```

### Local server (recommended)

```powershell
cd CodeAlpha_PhishingAwareness
python -m http.server 8000
```

Visit `http://localhost:8000`. See [`docs/installation.md`](docs/installation.md) for GitHub Pages steps.

## Usage

Select **Start training**, work through the learning path, complete the three labs, and take the final quiz. Open **Progress dashboard** to review scores and achievements. **Reset progress** clears only the device-local training record after confirmation.

## Testing

The project was checked with JavaScript syntax validation, local-reference inspection, source safety searches, a local HTTP server, and browser interaction testing. The browser run covered navigation, module completion, email red flags, all three challenge sets, final-quiz scoring and retake, progress persistence, a 390 × 844 responsive viewport, keyboard focus, and console errors.

The final destructive confirmation that clears saved progress was intentionally not accepted during automated testing and remains marked **Not run**. See [`docs/testing.md`](docs/testing.md) and [`tests/test-cases.md`](tests/test-cases.md).

## Screenshots

Screenshots are intentionally captured manually so personal browser information can be excluded. The required evidence and framing are listed in [`docs/screenshots.md`](docs/screenshots.md).

## Submission Resources

- [`docs/PUBLIC_GITHUB_AUDIT.md`](docs/PUBLIC_GITHUB_AUDIT.md) — public-upload safety classification
- [`docs/GITHUB_UPLOAD_GUIDE.md`](docs/GITHUB_UPLOAD_GUIDE.md) — manual Windows GitHub tutorial
- [`docs/VIDEO_RECORDING_GUIDE.md`](docs/VIDEO_RECORDING_GUIDE.md) — timed screen-recording plan
- [`docs/VIDEO_TRANSCRIPT_EN.md`](docs/VIDEO_TRANSCRIPT_EN.md) — complete English transcript
- [`docs/VIDEO_CHEATSHEET.md`](docs/VIDEO_CHEATSHEET.md) — one-page recording prompts
- [`docs/LINKEDIN_POST.md`](docs/LINKEDIN_POST.md) — prepared LinkedIn caption
- [`docs/LINKEDIN_UPLOAD_GUIDE.md`](docs/LINKEDIN_UPLOAD_GUIDE.md) — manual upload steps
- [`docs/SUBMISSION_FORM_GUIDE.md`](docs/SUBMISSION_FORM_GUIDE.md) — CodeAlpha form field guidance
- [`docs/FINAL_SUBMISSION_CHECKLIST.md`](docs/FINAL_SUBMISSION_CHECKLIST.md) — final manual checklist

## Project Structure

```text
CodeAlpha_PhishingAwareness/
├── .gitignore
├── index.html
├── README.md
├── LICENSE
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── modules.js
│   ├── challenges.js
│   ├── quiz.js
│   └── progress.js
├── dist/                    # Static deployment copy
├── docs/                    # Research, technical, and submission documentation
└── tests/
    └── test-cases.md
```

## Security / Ethics

All organizations are fictional and all training URLs use safe example-style domains. URLs shown in exercises are inert text. The fake sign-in screen has no editable fields. The project does not send email, follow redirects, load remote trackers, collect credentials, transmit data, or store personal information. Only module progress and scores are stored in the learner’s browser.

The `.gitignore` excludes environment files, credentials, keys, packet captures, raw logs, local databases, virtual environments, dependency folders, and temporary editor files.

## Limitations

- Visual inspection cannot prove that a message or site is legitimate.
- Progress is limited to one browser profile and can be removed by clearing site data.
- Controlled URL examples do not replace domain-analysis tools or a Public Suffix List parser.
- The module cannot inspect a real inbox, certificate, DNS record, or redirect chain.
- A formal third-party accessibility audit has not been performed.

See [`docs/limitations.md`](docs/limitations.md) for more detail.

## Future Improvements

- Optional multilingual content
- Public Suffix List-backed URL parsing demonstration
- Printable completion summary
- Additional accessible interaction formats
- Organization-configurable reporting guidance

## CodeAlpha Requirement Mapping

| CodeAlpha Requirement | Implementation |
|---|---|
| Phishing awareness module | Interactive 12-module web training |
| Recognize phishing emails | Email red-flag lesson and six message challenges |
| Recognize fake websites | Visual-only fake website and domain analysis |
| Social engineering | Ten tactic cards and five defensive scenarios |
| Best practices | Clicking, sign-in, account, reporting, and incident-response checklists |
| Real-world examples | Documented real-world pattern categories, separated from fictional examples |
| Interactive quizzes | Three practice labs and a 12-question final quiz |

## Research Sources

- [CISA Secure Our World resources](https://www.cisa.gov/resources-tools/resources/secure-our-world-cybersecurity-awareness-month-resources)
- [FTC: How to Recognize and Avoid Phishing Scams](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams)
