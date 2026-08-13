# The Quiet Ones WordPress Paste Kit

This version keeps **Stellar Dawn** as the larger Nexus/interface format, while **The Quiet Ones** reads as a melancholy field record that can eventually live inside that hub.

## 1. Upload The Background

Upload `assets/quiet-ones-earth.png` to the WordPress Media Library and copy the uploaded image URL.

## 2. Page Content

Paste this into a Custom HTML block on `https://danaskew.org/the-quiet-ones/`.

```html
<main class="quiet-ones">
  <section class="quiet-hero">
    <div class="quiet-hero__content">
      <p class="quiet-kicker">Field record / incomplete</p>
      <h1>The Quiet Ones</h1>
      <p class="quiet-lead">Some places do not end when they are abandoned. They settle into the soil, into the weather, into the names people stop saying out loud.</p>
      <div class="quiet-actions" aria-label="Quiet Ones sections">
        <a href="#briefing">The Place</a>
        <a href="#records">Records</a>
        <a href="#transmissions">Last Note</a>
      </div>
    </div>
    <aside class="quiet-dossier" aria-label="Archive status">
      <span>Season</span>
      <strong>After the rain</strong>
      <span>Record state</span>
      <strong>Partial</strong>
      <span>Local advice</span>
      <strong>Do not linger</strong>
    </aside>
  </section>

  <section class="quiet-section" id="briefing">
    <div class="quiet-section__header">
      <p class="quiet-kicker">The place</p>
      <h2>What remains after people leave</h2>
    </div>
    <div class="quiet-grid quiet-grid--two">
      <article class="quiet-panel">
        <h3>The public story</h3>
        <p>A remote settlement vanished from ordinary maps one winter at a time. No disaster was recorded. No evacuation order survived. Only gaps, damp ledgers, and the habit of looking away.</p>
      </article>
      <article class="quiet-panel">
        <h3>The table purpose</h3>
        <p>Use this page for rumors, recovered notes, weathered places, and uneasy evidence. It should invite attention without explaining itself too early.</p>
      </article>
    </div>
  </section>

  <section class="quiet-section" id="records">
    <div class="quiet-section__header">
      <p class="quiet-kicker">Records</p>
      <h2>Small survivals</h2>
    </div>
    <div class="quiet-records">
      <article>
        <span>01</span>
        <h3>Schoolhouse ledger</h3>
        <p>Nine names repeated every Monday. By spring, the handwriting continues but the names are gone.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Well rope</h3>
        <p>Found cut cleanly and tied again with shaking hands. The bucket was never recovered.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Door in the field</h3>
        <p>No house. No frame. It opens only with effort, and always onto the same wet dark.</p>
      </article>
    </div>
  </section>

  <section class="quiet-section" id="transmissions">
    <div class="quiet-transmission">
      <p class="quiet-kicker">Last note</p>
      <blockquote>
        <p>When the rain stops, leave before the quiet notices.</p>
      </blockquote>
    </div>
  </section>
</main>
```

## 3. Additional CSS

Paste this into Appearance > Customize > Additional CSS. Replace `PASTE_IMAGE_URL_HERE` with the uploaded Media Library URL for `quiet-ones-earth.png`.

```css
.page-id-1328 header.wp-block-template-part,
.page-id-1328 footer.wp-block-template-part,
.page-id-1328 .wp-block-post-title {
  display: none;
}

.page-id-1328 .wp-site-blocks > .wp-block-group,
.page-id-1328 .wp-block-group[style*="margin-bottom"] {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.page-id-1328 .wp-block-group.has-global-padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.quiet-ones {
  --quiet-ink: #eee8dc;
  --quiet-muted: #b7b4a7;
  --quiet-dim: #7f8177;
  --quiet-line: rgba(238, 232, 220, 0.14);
  --quiet-red: #8f4a45;
  --quiet-gold: #b39a69;
  --quiet-green: #9faa99;
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  margin: -1px calc(50% - 50vw) 0;
  padding: 0 max(22px, calc((100vw - 1120px) / 2));
  color: var(--quiet-ink);
  background: #070908;
  overflow: hidden;
}

.quiet-ones::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -2;
  background: url("PASTE_IMAGE_URL_HERE") center top / cover no-repeat;
}

.quiet-ones::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(180deg, rgba(7, 9, 8, 0.14), #070908 82%),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.018) 0 1px, transparent 1px 92px);
  pointer-events: none;
}

.quiet-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  gap: 32px;
  min-height: 88vh;
  align-items: end;
  padding: clamp(76px, 12vw, 142px) 0 58px;
}

.quiet-hero__content {
  max-width: 760px;
}

.quiet-kicker {
  margin: 0 0 14px;
  color: var(--quiet-green);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.quiet-ones h1,
.quiet-ones h2,
.quiet-ones h3,
.quiet-ones p {
  margin-top: 0;
}

.quiet-ones h1 {
  margin-bottom: 20px;
  color: var(--quiet-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.6rem, 9vw, 8rem);
  font-weight: 500;
  line-height: 0.96;
  letter-spacing: 0;
}

.quiet-ones h2 {
  color: var(--quiet-ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 500;
  line-height: 1.02;
}

.quiet-lead {
  max-width: 650px;
  color: #d9d2c1;
  font-size: clamp(1.1rem, 2vw, 1.36rem);
  line-height: 1.6;
}

.quiet-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.quiet-actions a {
  border: 1px solid var(--quiet-line);
  border-radius: 999px;
  color: var(--quiet-ink);
  padding: 10px 15px;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
}

.quiet-dossier,
.quiet-panel,
.quiet-records article,
.quiet-transmission {
  border: 1px solid var(--quiet-line);
  border-radius: 6px;
  background: rgba(9, 11, 10, 0.74);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(10px);
}

.quiet-dossier {
  display: grid;
  grid-template-columns: 1fr;
  gap: 7px;
  padding: 20px;
}

.quiet-dossier span {
  color: var(--quiet-dim);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.quiet-dossier strong {
  margin-bottom: 12px;
  color: var(--quiet-gold);
  font-size: 1.05rem;
}

.quiet-section {
  border-top: 1px solid var(--quiet-line);
  padding: 58px 0;
}

.quiet-section__header {
  max-width: 760px;
  margin-bottom: 22px;
}

.quiet-grid {
  display: grid;
  gap: 16px;
}

.quiet-grid--two {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.quiet-panel,
.quiet-records article,
.quiet-transmission {
  padding: 20px;
}

.quiet-panel h3,
.quiet-records h3 {
  color: var(--quiet-ink);
  font-size: 1.05rem;
}

.quiet-panel p,
.quiet-records p {
  color: var(--quiet-muted);
  line-height: 1.65;
}

.quiet-records {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.quiet-records span {
  display: block;
  margin-bottom: 28px;
  color: var(--quiet-red);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
}

.quiet-transmission {
  max-width: 820px;
}

.quiet-transmission blockquote {
  margin: 0;
  border-left: 3px solid var(--quiet-red);
  padding-left: 18px;
}

.quiet-transmission blockquote p {
  color: #e8dfd0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.6rem, 4vw, 2.8rem);
  line-height: 1.16;
}

@media (max-width: 820px) {
  .quiet-hero,
  .quiet-grid--two,
  .quiet-records {
    grid-template-columns: 1fr;
  }

  .quiet-hero {
    min-height: auto;
  }
}
```
