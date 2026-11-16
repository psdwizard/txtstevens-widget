# TxtStevens SMS chat widget

A small, self-contained "text us" chat widget for stevensauto.com. It adds a round button in the bottom-right corner; clicking it opens a panel with a greeting and a "TXT Stevens Now" button that opens the visitor's messaging app.

## Install

Add this as a Custom HTML tag in Google Tag Manager, firing on All Pages:

```html
<script async src="https://cdn.jsdelivr.net/gh/psdwizard/txtstevens-widget@v1.6.0/txtstevens-widget.js"></script>
```

## Files

- `txtstevens-widget.js` - the hosted file. It injects its own styles.
- `txtstevens-widget.html` - the same widget as an inline snippet (style + script), for pasting directly into a tag.

## Updating

Edit the file, commit, and create a new version tag (for example `v1.0.1`), then change the version in the script URL. Pinning a version means edits never reach the live site until the URL is changed.

## Vehicle page text bar (v1.2.0)

On vehicle pages, Ride Motive shows a red phone bar ("Speak to a team member"). The script turns it into a text button: chat icon, +1 (203) 954-5655, "Text with a team member", linking to sms:12039545655. It finds the bar by its `PhoneCTA-module` class, so if Ride Motive renames that component the bar falls back to the original phone call.

## v1.3.0

- Text links are pre-filled. On vehicle pages: "Hi, I'm interested in the [year make model trim] (stock [number])." from the page's Vehicle structured data. Elsewhere: "Hi Stevens Ford, I have a question."
- Computer visitors see a QR code in the panel. It encodes `SMSTO:+12039545655:Hi Stevens, I have a question.` (from v1.6.0) (generic message; generated with macOS CoreImage and checked with its QR decoder).
- Panel wording: "Text Stevens Ford / A real person replies by text" and "Send us a text and a team member will reply."

## v1.4.0

- The pill label follows the page: "Text us about this F-150" on vehicle pages, "Text Us – Get Answers Fast" elsewhere.
- A teaser bubble appears once per visit, after 20 seconds or when the visitor scrolls halfway down. It never shows again once dismissed or once the visitor has opened the widget (sessionStorage keys `saTxtTeased`, `saTxtUsed`).
- The panel offers three one-tap questions, each opening a pre-filled text. The pill now opens the panel on phones too.
- Extra dataLayer actions: `teaser_show`, `teaser_click`, `teaser_close`, `choice_available`, `choice_tradein`, `choice_payment`, `choice_find`, `choice_offers`.

## v1.4.1

The teaser bubble now shows once for each vehicle page (and once for all other pages together). It stops for the rest of the visit once the visitor dismisses it (`saTxtOff`) or opens the widget (`saTxtUsed`).

## v1.5.0

- Keeps clear of the iPhone home bar (`env(safe-area-inset-bottom)`; adds nothing where the browser reports no inset).
- Clicking or tapping anywhere outside the widget closes the panel.
- Compact panel on screens 820px tall or less, so it fits a typical laptop browser window without scrolling.

## v1.6.0

- Dealer name follows the vehicle's brand: "Text Stevens Lincoln" on Lincoln vehicles, "Text Stevens Ford" on Ford vehicles, "Text Stevens" elsewhere. General pre-filled texts say "Hi Stevens".
- The live timestamp in the greeting is gone (it implied someone was replying at any hour).
- Shorter wording: greeting "Pick a question, or write your own.", QR "Scan to text us from your phone."
- Shorter model names: "Super Duty F-350 DRW" shows as "F-350"; names over 18 characters use their first word.
