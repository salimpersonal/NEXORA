# NEXORA — Universal Command Center

**NEXORA** is an offline-first Android/mobile web application for managing independent projects, businesses, documentaries and personal initiatives from a single command center.

## Included functionality
- Master dashboard: consolidated project count, revenue, expense, cashflow and workload
- Unlimited user-created projects with project dashboards, categories, status and deadlines
- Projects → actionable tasks, checkboxes and completion tracking
- Manual finance ledger with automatically calculated totals per project and overall
- Editable 9-block Business Model Canvas per project
- Digital assets registry: platform-specific profiles, pages, websites and stores per project
- Project-level publishing checklist automatically sourced from that project's profile registry; manually mark each destination published and attach link/date
- Offline storage in browser/Android WebView IndexedDB; JSON backup/export/import
- Responsive PWA and Capacitor Android wrapper

## Build an Android APK **using GitHub Actions**
1. Create a **new GitHub repository** (recommended so your original SalimGPT code is not overwritten).
2. Upload **all files/folders** from the repository ZIP root, including `.github/workflows/android-apk.yml`. Avoid uploading the outer containing folder.
3. Ensure the main branch is called `main`.
4. Open **Actions → Build Android APK → Run workflow**. (Pushing to `main` also triggers it.)
5. Once the workflow is green, open its run → **Artifacts → NEXORA-Android-debug-APK**.
6. Download the artifact ZIP, extract `app-debug.apk`, and install it on your Android phone. Allow your browser/file manager to install APKs only if you trust this repository build. The downloaded source ZIP is not an APK.

The workflow installs npm dependencies, verifies web assets, creates the Android Capacitor project during CI, and builds `assembleDebug`. It **does not** publish to Google Play and has not been verified on GitHub hosted runners in this deliverable. Debug APKs are for personal testing, not commercial distribution. For release distribution, add a securely signed release build.

## Optional PWA web preview
In GitHub repository **Settings → Pages → Source: GitHub Actions**. The supplied `pages.yml` deploys `www/` to Pages. Deploy failure at `configure-pages` is usually a GitHub Pages settings or permission issue, not an app build confirmation.

## Local test
Run `npm install`, `npm run build`, and `npm test`. For local static preview, run any HTTP static server rooted at `www/` (e.g. `python3 -m http.server 8000 --directory www`).

## Data and privacy
All project records are stored on the **device running the app**, in IndexedDB. No login, cloud sync, external API or tracking. Data is not accessible automatically between devices. Backup JSON files include sensitive content; store them securely. Device loss, WebView data wipe, or uninstall may remove records unless you export backups first.

Cashflow in the app means total entered income minus total entered expenses. It is not bookkeeping-grade accounting, tax reporting, consolidated accrual profit, payroll, inventory or exchange-rate conversion.

Social profiles open via their public links. The app does not log into or scrape platforms, access private analytics or automatically publish content. Publishing completion is set manually. Each new linked profile appears on its project's Publishing tab automatically.

## Version status
This is an **implementable MVP codebase**, not a production-tested, fully audited app. Source files and local static validations are included; native APK build and device testing must be performed in your GitHub account.
