# Technical Video Recording Guide

## Target

- Duration: approximately **5 minutes 45 seconds**
- Language: English
- Format: technical project explanation with a live demonstration
- Recording area: application browser, VS Code, and a PowerShell terminal only

Before recording, close personal tabs, notifications, email, chat applications, password managers, and unrelated terminals. Use a clean browser profile if possible. Confirm that no token, account credential, personal folder path, or private remote URL is visible.

## Preparation

1. Open the project folder in VS Code.
2. Open a PowerShell terminal in the project root.
3. Start the application:

   ```powershell
   python -m http.server 8000
   ```

4. Open `http://localhost:8000`.
5. Open these files as prepared VS Code tabs:
   - `docs/architecture.md`
   - `js/challenges.js`
   - `js/app.js`
   - `js/progress.js`
   - `tests/test-cases.md`
6. Reset or prepare browser progress before recording. Do not show any confirmation dialog containing unrelated information.
7. Increase editor and browser zoom enough for the text to remain readable in the video.

## Recording sequence

| Section | Approx. time | What I say | What I show | File, page, or terminal |
|---|---:|---|---|---|
| Introduction | 0:00–0:25 | Introduce yourself, CodeAlpha Task 2, and PhishAware. | Homepage with project name and learning path. | Browser homepage |
| Task objective | 0:25–0:50 | Explain the phishing-awareness problem and implemented learning outcomes. | Homepage, then Fundamentals. | Browser `#home`, `#fundamentals` |
| Architecture | 0:50–1:25 | Explain the static single-page architecture and data flow. | Architecture document. Point to the layer list and data-flow sentence. | `docs/architecture.md` |
| Technology | 1:25–1:45 | Explain why HTML, CSS, vanilla JavaScript, and localStorage were used. | Project tree, then source folders. | VS Code Explorer |
| How it works | 1:45–2:25 | Explain content data, rendering, answer checking, persistence, and UI refresh. | Challenge data, answer logic, progress store. | `js/challenges.js`, `js/app.js`, `js/progress.js` |
| Live demo: email | 2:25–2:55 | Demonstrate evidence-based email inspection. | Click Email Red Flags, then Show Red Flags. | Browser `#email` |
| Live demo: website and URL | 2:55–3:30 | Explain non-operational fake site and registrable-domain reasoning. Answer one URL. | Fake Websites, then URL Detective. | Browser `#website`, `#urls` |
| Live demo: scenarios and quiz | 3:30–4:05 | Answer one decision scenario and show the final quiz behavior. | Scenario answer and quiz question/result if prepared. | Browser `#scenarios`, `#quiz` |
| Technical implementation | 4:05–4:35 | Highlight scoring, module recommendations, and dashboard aggregation. | Relevant functions or dashboard. | `js/app.js`, browser `#dashboard` |
| Testing and results | 4:35–5:05 | State only the checks recorded in the repository and the one unexecuted reset step. | Test matrix. | `tests/test-cases.md` |
| Security and ethics | 5:05–5:25 | Explain fictional data, inert URLs, no forms, and no credential collection. | Fake-site visual-only label or README security section. | Browser `#website` or `README.md` |
| Limitations | 5:25–5:45 | Mention local-only progress, controlled URL examples, and visual-clue limitations. | Limitations document. | `docs/limitations.md` |
| Conclusion | 5:45–6:05 | Summarize what was built and learned. | Return to homepage or dashboard. | Browser |

## Demonstration actions

Perform these actions slowly enough for the viewer to follow:

1. Select **Phishing fundamentals** and point to the four-step flow.
2. Select **Email red flags** and click **Show red flags**.
3. Select **Fake websites** and point to the inert visual fields and the displayed domain.
4. Select **URL detective**, answer one exercise, and show the explanation.
5. Select **Decision scenarios**, choose the independent verification response, and show feedback.
6. Select **Final quiz** and answer one or two questions. If a completed result is prepared, show the score and review.
7. Open **Progress dashboard** and show module status, challenge accuracy, quiz score, and badges.

## Recording quality checklist

- Use 1080p if available.
- Keep the microphone close and speak slightly slower than normal conversation.
- Record a five-second test and check audio before the full take.
- Avoid rapid scrolling and mouse movement.
- Do not expose browser bookmarks, notifications, email addresses, Git remotes, access tokens, or login screens.
- If a mistake is small, pause and repeat the sentence; edit the pause later.
- Watch the final video once before uploading.

