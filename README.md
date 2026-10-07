# BytePing / byteping.xyz

Personal cybersecurity portfolio for BytePing.

The site includes a custom SVG favicon, an Open Graph preview image at `/og-image.svg`, and an optional terminal-style boot screen that can be skipped.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

The repository is configured as a root-served static site and contains a `CNAME` file for `byteping.xyz`.

In **Settings → Pages**, choose **Deploy from a branch**, select `main`, and select `/ (root)`. The registrar DNS should contain GitHub Pages' four apex A records and a `www` CNAME pointing to `Divk45.github.io`.

The CRACCON writeup remains marked as a placeholder because no public URL was supplied.
