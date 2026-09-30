# Manual GitHub Upload Guide — Windows

This guide keeps all GitHub account actions manual. Do not paste passwords, personal access tokens, or authentication codes into project files or screenshots.

## Repository details

- Repository name: `CodeAlpha_PhishingAwareness`
- Description: `Interactive phishing awareness training with email, website, URL, and social-engineering exercises.`
- Recommended visibility: **Public**, because this is a defensive educational internship project and the audit found no sensitive content.

## Method A — GitHub website and VS Code terminal

### A. Create the repository on GitHub

1. Manually open GitHub in your browser and sign in.
2. Select **New repository**.
3. Enter `CodeAlpha_PhishingAwareness` as the repository name.
4. Paste the description shown above.
5. Choose **Public** if CodeAlpha requires an accessible submission repository.
6. Leave **Add a README**, **Add .gitignore**, and **Choose a license** unchecked.
7. Create the repository.

The local project already has `README.md`, `.gitignore`, and `LICENSE`. Initializing these again on GitHub can create an unnecessary first-commit conflict.

### B. Open the local project

In VS Code, select **File → Open Folder** and choose the folder named:

```text
CodeAlpha_PhishingAwareness
```

Then select **Terminal → New Terminal**.

Check the current folder:

```powershell
Get-Location
```

The final part of the path should be `CodeAlpha_PhishingAwareness`. You can also list the expected files:

```powershell
Get-ChildItem
```

You should see `index.html`, `README.md`, `LICENSE`, `css`, `js`, `docs`, and `tests`.

### C. Perform the security check before staging

Check repository state:

```powershell
git status
```

Read the ignore file:

```powershell
Get-Content .gitignore
```

Search for files that must not be committed:

```powershell
Get-ChildItem -Recurse -Force -File | Where-Object {
    $_.Name -match '^\.env|credential|secret|token|private' -or
    $_.Extension -in '.pcap','.pcapng','.key','.pem','.p12','.pfx','.log','.db','.sqlite','.sqlite3','.har'
} | Select-Object FullName
```

Expected result: no private artifact should be listed. Words such as “password” inside the educational source are normal; actual passwords or secret values are not.

Never commit:

- `.env` files
- credentials, tokens, cookies, private keys, or SSH keys
- raw PCAP/PCAPNG captures
- raw logs or `eve.json`
- local databases
- personal screenshots or unrelated recordings
- virtual environments, dependency folders, caches, or temporary files

### D. Initialize Git

The clean project in `01_RUN_PROJECT` has no `.git` folder. Run:

```powershell
git init
```

This creates the local Git repository metadata.

Now inspect the state:

```powershell
git status
```

Stage the public project files:

```powershell
git add .
```

`git add .` prepares the non-ignored changes for the next commit. It does not upload anything.

Check exactly what was staged:

```powershell
git status
```

### E. Review every staged change

```powershell
git diff --cached
```

Inspect the output before committing. Confirm that:

- the README and documentation are readable;
- source code is expected;
- no `.env`, key, token, capture, log, database, or personal file is present;
- no personal, machine-specific absolute path appears in the repository content;
- the staged files match this project.

If an unsafe file is staged, remove it from staging without deleting it:

```powershell
git restore --staged <FILE_PATH>
```

Add an appropriate pattern to `.gitignore`, then repeat the review.

### F. Create the first commit

For a fresh extracted project:

```powershell
git commit -m "Initial CodeAlpha internship project"
```

A commit is a saved snapshot of the staged project with a short description.

### G. Use the main branch

```powershell
git branch -M main
```

This names the primary branch `main`, which matches the common GitHub default.

### H. Connect the GitHub repository

Confirm that no remote has been added yet:

```powershell
git remote -v
```

Add your GitHub repository as `origin`:

```powershell
git remote add origin <MY-GITHUB-REPOSITORY-URL>
```

Keep `<MY-GITHUB-REPOSITORY-URL>` as a placeholder until GitHub shows your real repository URL. Do not include the angle brackets when inserting the real URL.

Verify it:

```powershell
git remote -v
```

The `origin` fetch and push lines should show your GitHub repository. If Git reports that `origin` already exists, stop and inspect it with `git remote -v`; do not overwrite an unfamiliar remote.

### I. Push manually

```powershell
git push -u origin main
```

- `origin` is the short name of your GitHub repository.
- `main` is the branch being uploaded.
- `-u` records this relationship, so future pushes can use only `git push`.

Complete GitHub authentication only in the official browser or credential prompt. Never save the credential in the repository.

### J. Verify the GitHub repository

Refresh the repository page and confirm:

- `README.md` displays on the front page;
- `index.html`, `css`, `js`, `docs`, and `tests` exist;
- the documentation links open;
- no sensitive file appears;
- the project structure is correct;
- repository visibility allows CodeAlpha reviewers to open it.

Copy the repository URL from the browser. Its format will be:

```text
https://github.com/<username>/<repository>
```

Do not submit your GitHub profile URL. Submit the specific repository URL.

### K. Future updates

For later changes, use:

```powershell
git status
git add .
git diff --cached
git commit -m "Update project documentation"
git push
```

You do not need to run `git init` or `git remote add origin` again.

## Optional Method B — GitHub Desktop

1. Open GitHub Desktop.
2. Choose **File → Add Local Repository**.
3. Select `CodeAlpha_PhishingAwareness`.
4. Review the changed files carefully.
5. Enter a commit summary and choose **Commit to main**.
6. Use **Publish repository** or **Push origin**.
7. Confirm that the repository is public and verify its files in the browser.

The terminal method remains preferable for this submission because `git status` and `git diff --cached` make the security review explicit.
