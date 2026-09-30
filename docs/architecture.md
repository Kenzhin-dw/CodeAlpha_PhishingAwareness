# Architecture

PhishAware is a static single-page training application.

## Layers

- `index.html`: semantic page structure and module content
- `css/style.css`: responsive layout, theme, states, and accessibility styling
- `js/modules.js`: training-module content datasets
- `js/challenges.js`: message, URL, and scenario exercise datasets
- `js/quiz.js`: final assessment dataset
- `js/progress.js`: defensive `localStorage` persistence
- `js/app.js`: routing, rendering, interaction, scoring, and dashboard logic

Hash routes keep navigation bookmarkable without a server router. No network request is required at runtime. Progress events update the header, navigation, module buttons, and dashboard from a single state store.

## Data flow

User action → interaction handler → score/completion update → localStorage → `progresschange` event → UI refresh.

## Security boundary

The project has no secrets, backend, external API, form submission, or executable phishing infrastructure. Training URLs never become links.

