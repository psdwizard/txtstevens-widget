# TxtStevens SMS chat widget

A small, self-contained "text us" chat widget for stevensauto.com. It adds a round button in the bottom-right corner; clicking it opens a panel with a greeting and a "TXT Stevens Now" button that opens the visitor's messaging app.

## Install

Add this as a Custom HTML tag in Google Tag Manager, firing on All Pages:

```html
<script async src="https://cdn.jsdelivr.net/gh/psdwizard/txtstevens-widget@v1.1.0/txtstevens-widget.js"></script>
```

## Files

- `txtstevens-widget.js` - the hosted file. It injects its own styles.
- `txtstevens-widget.html` - the same widget as an inline snippet (style + script), for pasting directly into a tag.

## Updating

Edit the file, commit, and create a new version tag (for example `v1.0.1`), then change the version in the script URL. Pinning a version means edits never reach the live site until the URL is changed.
