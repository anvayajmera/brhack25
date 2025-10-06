# brhack25

This project is an Astro site. GitHub Pages is configured to build and deploy the static output via GitHub Actions.

Notes
- Build locally: `npm ci && npm run build`
- The GitHub Actions workflow `.github/workflows/pages.yml` builds the site and deploys the generated `dist` or `public` folder to GitHub Pages.
- A `.nojekyll` file is included to disable Jekyll processing which previously caused the "Skip to content / Navigation Menu" Jekyll wrapper to be served.

If your Astro build outputs to a different directory, update the workflow accordingly.
