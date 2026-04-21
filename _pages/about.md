---
title: "Über mich"
permalink: /ueber-mich/
description: "Simon Kröner über Webdesign, Branding und die Haltung hinter digitalen Auftritten mit Charakter und Klarheit."
classes:
  - about-page
---
{% assign home = site.data.homepage %}

<section class="hero-section about-page__hero">
  <div class="shell about-page__hero-shell">
    <div class="hero-section__copy about-page__hero-copy about-page__hero-copy--editorial">
      <p class="section-label section-label--hero"><span class="status-dot" aria-hidden="true"></span>Simon Kröner</p>
      <h1>Gestaltung mit Haltung.</h1>
      <p class="hero-section__subtitle">Ich entwickle digitale Auftritte, die ruhig, präzise und eigenständig wirken. Nicht als dekorative Oberfläche, sondern als klare Übersetzung von Marke und Qualität.</p>
      <div class="about-page__hero-notes">
        <span>Webdesign</span>
        <span>Branding</span>
        <span>Performance</span>
      </div>
    </div>

    <aside class="about-page__hero-media-card" aria-label="Simon Kröner">
      <div class="about-page__hero-media">
        <img
          src="{{ '/assets/images/people/simon-kroener.webp' | relative_url }}"
          alt="Simon Kröner"
          width="2277"
          height="3325"
          loading="eager"
          decoding="async"
        >
      </div>
      <div class="about-page__hero-caption">
        <p>Mich interessiert, wie ein Auftritt gelesen wird: im ersten Eindruck, in der Markenwirkung und in der technischen Ruhe dahinter.</p>
      </div>
    </aside>
  </div>
</section>

<section class="section section--cream">
  <div class="shell bio-section">
    <div class="bio-section__copy">
      <div class="bio-section__intro">
        <h2>Was meine Arbeit prägt</h2>
        <p class="bio-section__role">Webdesign, Branding &amp; Wirkung</p>
        <p class="bio-section__highlight">Ich verbinde gestalterisches Gespür mit einer klaren Wahrnehmung dafür, wie digitale Auftritte auf Menschen wirken und warum manche Seiten sofort Vertrauen auslösen, während andere beliebig bleiben.</p>
      </div>

      <div class="bio-section__body">
        <p>Ich arbeite an der Schnittstelle von Gestaltung, Markenbild und digitaler Präsenz. Genau dort entscheidet sich oft, ob ein Unternehmen online stark wirkt oder austauschbar bleibt.</p>
        <p>Mich interessiert keine Oberfläche um ihrer selbst willen. Mich interessiert Präzision: klare Typografie, ein stimmiger Ton, nachvollziehbare Dramaturgie und eine Website, die in jeder Größe sauber funktioniert.</p>
        <p>Diese Haltung zieht sich durch jedes Projekt, unabhängig davon, ob es um einen Relaunch, ein Branding oder einen komplett neuen Auftritt geht.</p>
      </div>
    </div>

    <div class="bio-section__media bio-section__media--simon">
      <img src="{{ '/assets/images/people/simon-kröner-2.webp' | relative_url }}" alt="Simon Kröner Porträt" width="4127" height="6190" loading="lazy">
    </div>
  </div>
</section>

<section class="section section--white">
  <div class="shell about-page__why">
    <div class="section-heading section-heading--center">
      <h2>Drei Dinge, auf die ich immer achte</h2>
    </div>

    <div class="about-page__why-grid about-page__why-grid--three">
      <article class="about-page__why-card">
        <p class="section-lead">Klarheit</p>
        <p>Ein guter Auftritt ordnet Inhalte so, dass Besucher sofort verstehen, worum es geht und worauf sie schauen sollen.</p>
      </article>
      <article class="about-page__why-card">
        <p class="section-lead">Charakter</p>
        <p>Markenwirkung entsteht durch konsequente Entscheidungen in Typografie, Farbe, Bildwelt und Tonalität.</p>
      </article>
      <article class="about-page__why-card">
        <p class="section-lead">Substanz</p>
        <p>Gestaltung wirkt nur dann hochwertig, wenn die technische Basis schnell, sauber und belastbar ist.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section--deep section--cta" id="cta">
  <div class="shell cta-grid">
    <div class="section-copy">
      <p class="section-label section-label--light"><span class="status-dot" aria-hidden="true"></span>{{ home.final_cta.label }}</p>
      <h2>{{ home.final_cta.title }}</h2>
      <p class="section-lead section-lead--light">{{ home.final_cta.text }}</p>
      <a class="button button--light" href="{{ home.final_cta.primary_cta.url | relative_url }}">{{ home.final_cta.primary_cta.label }}</a>
    </div>

    <div class="audit-card audit-card--dark">
      <h3>{{ home.pain.audit_title }}</h3>
      <p>{{ home.pain.audit_text }}</p>
      {% include site_check_form.html id_prefix="about-check" form=home.pain.form context="about-check" variant="dark" %}
    </div>
  </div>
</section>
