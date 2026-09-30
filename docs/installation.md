# Installation and Deployment

## Method 1 — Open directly

Double-click `index.html`, or from PowerShell:

```powershell
Start-Process .\index.html
```

The project uses ordinary scripts rather than JavaScript modules, so modern browsers should allow direct-file use.

## Method 2 — Local HTTP server (recommended)

```powershell
cd CodeAlpha_PhishingAwareness
python -m http.server 8000
```

Open `http://localhost:8000` and stop the server with `Ctrl+C`.

## GitHub Pages

1. Push the repository to GitHub.
2. Open repository **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select the branch containing the project and `/ (root)`.
5. Save and wait for the Pages URL.

No build command or environment variable is required.

