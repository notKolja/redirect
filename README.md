# redirect.kmxlabs.de

Simple static redirect router for GitHub Pages.

## Redirects konfigurieren

Alle Ziele stehen in [`config.js`](config.js):

```js
window.REDIRECT_CONFIG = {
  "/winter-retreat": {
    target: "mailto:hello@kmxlabs.de?subject=Winter%20Retreat",
    title: "Winter Retreat"
  },
  "/website": "https://kmxlabs.de"
};
```

Danach funktionieren URLs wie:

- `https://redirect.kmxlabs.de/winter-retreat`
- `https://redirect.kmxlabs.de/website`

`mailto:`-Links werden genauso akzeptiert wie normale `https://`-URLs.

## GitHub Pages Setup

1. Repository zu GitHub pushen.
2. In GitHub unter `Settings -> Pages` als Source `GitHub Actions` wählen.
3. Der Workflow `.github/workflows/pages.yml` deployed automatisch bei jedem Push auf `master`.
4. Unter `Custom domain` `redirect.kmxlabs.de` eintragen.
5. DNS für `redirect.kmxlabs.de` als `CNAME` auf `notkolja.github.io` setzen.

Die Datei `CNAME` ist bereits enthalten, damit GitHub Pages die Domain nach Deployments behält.
