# BytePing portfolio

A static, responsive portfolio for **Divk45**, built for [byteping.xyz](https://byteping.xyz). The site is intentionally dependency-free so GitHub Pages can serve it directly.

## Files

- `index.html` — semantic page structure and content
- `style.css` — responsive dark cybersecurity-inspired visual system
- `script.js` — accessible mobile navigation
- `CNAME` — custom GitHub Pages domain

## Run locally

From the repository root, use any static server. For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.
4. GitHub Pages will detect the `CNAME` file and use `byteping.xyz`.
5. Enable **Enforce HTTPS** once the certificate is ready.

### DNS for `byteping.xyz`

At your domain registrar, configure the apex domain with the four GitHub Pages A records currently listed in GitHub’s Pages documentation. If you also want `www.byteping.xyz`, add a CNAME from `www` to `Divk45.github.io` and optionally redirect it to the apex domain in GitHub Pages.

DNS changes can take time to propagate. Do not remove the `CNAME` file when making future site edits.
