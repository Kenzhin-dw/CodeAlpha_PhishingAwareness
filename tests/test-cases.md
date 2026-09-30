# Test Cases

| Test ID | Feature | Expected | Actual | Status |
|---|---|---|---|---|
| NAV-01 | Sidebar navigation | Selected module displays and URL hash updates | Browser opened selected modules and hashes updated | Pass |
| NAV-02 | Start Training | Opens Fundamentals | Opened `#fundamentals` with correct title and heading | Pass |
| MOD-01 | Module progression | Complete button saves state and opens next module | Count changed to 1 and Types opened after completion | Pass |
| EMAIL-01 | Red-flag reveal | Six regions highlight with text explanations | Six highlights and six explanations rendered | Pass |
| SPOT-01 | Spot the Phish | Six messages score once and show explanations | Completed browser run scored 6/6 with feedback | Pass |
| URL-01 | URL challenge | Six URLs score once and show domain reasoning | Completed browser run scored 6/6 with feedback | Pass |
| SCN-01 | Scenario challenge | Five scenarios score once and explain safest response | Completed browser run scored 5/5 with feedback | Pass |
| QUIZ-01 | Final quiz scoring | 12 answers produce correct score and label | Completed browser run scored 12/12, 100%, Strong Understanding | Pass |
| QUIZ-02 | Quiz review | Correct/incorrect answer and explanation shown | Twelve review entries rendered with answers and explanations | Pass |
| QUIZ-03 | Retake | Starts a fresh 12-question attempt | Retake returned to Question 1 of 12 | Pass |
| STORE-01 | localStorage | Refresh preserves progress and scores | Dashboard values matched before and after reload | Pass |
| STORE-02 | Reset progress | Confirmation clears saved state and dashboard | Code path and confirmation inspected; destructive confirmation was not accepted during automated run | Not run |
| RESP-01 | Mobile layout | Content fits phone viewport; menu can open | Tested at 390 × 844; menu visible, opens, no horizontal overflow | Pass |
| A11Y-01 | Keyboard navigation | Interactive controls reachable with visible focus | Browser moved focus from answer A to answer B with Tab; controls exposed semantic roles | Pass |
| SAFE-01 | Credential collection | No editable credential fields or form submissions exist | Source inspection found no form/input collection | Pass |
| SAFE-02 | External/suspicious links | Training URLs are inert text; no malicious navigation | Source inspection found no runtime external link | Pass |
| STATIC-01 | Local assets | All referenced CSS/JS files exist | Static path check completed | Pass |
| JS-01 | JavaScript syntax | All JavaScript parses without syntax errors | All five JavaScript files passed `node --check` | Pass |
| CONSOLE-01 | Browser console | No application errors or warnings | Browser log contained no errors or warnings after test flow | Pass |
