# SCM Study Site

A static site (HTML/CSS/JS) on **Software Configuration Management**, based on the SEN02 class lecture.
It is hosted on **GitHub Pages** and deployed by a **GitHub Actions** workflow.

## Project structure

```
.
├── index.html
├── css/style.css
├── js/main.js
├── eslint.config.js          # lint rules (semi is an error)
├── package.json
├── PROMPTS.md                # all LLM prompts used
└── .github/workflows/deploy.yml
```

## One-time setup

1. Create a **public** repository on GitHub (e.g. `scm-study-site`).
2. Push these files to the `main` branch.
3. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Push (or run the workflow from the **Actions** tab). When it finishes, the site is at
   `https://<your-username>.github.io/<repo-name>/`.

## How the pipeline works

| Job | What it does |
|-----|--------------|
| `lint` | Installs ESLint and runs `npm run lint`. **If this fails, nothing else runs.** |
| `build` | Copies the site into `dist/`, writes `build-info.json` (commit, run number, time), uploads the Pages artifact and a downloadable `site-package` artifact. |
| `deploy` | Publishes the artifact to GitHub Pages. |

## Testing the linter (the "break a rule" demo)

1. Open `js/main.js` and delete the semicolon at the end of any statement, for example:
   ```js
   const out = document.getElementById("nameOut")   // <- semicolon removed
   ```
2. Commit and push to `main`.
3. Open the **Actions** tab. The run fails at **Lint JavaScript → Run ESLint** with
   `error  Missing semicolon  semi`, and the **Package** and **Deploy** jobs are skipped, so the live site stays on the last good version.
   Take a screenshot of this.
4. Put the semicolon back, commit and push. The run goes green and the site updates.

## Run locally

```bash
npm install
npm run lint      # should print nothing when clean
npm run serve     # then open http://localhost:8080
```
