---
title: "Kontakt"
permalink: /kontakt/
description: "Projekt anfragen bei Simon Kröner oder direkt mit einem kostenlosen Website-Check starten."
classes:
  - contact-page
---
{% assign home = site.data.homepage %}
{% assign contact = site.data.contact_page %}
{% assign legal = site.data.legal %}

<section class="hero-section contact-page__hero">
  <div class="shell contact-page__hero-shell">
    <div class="hero-section__copy contact-page__hero-copy contact-page__hero-copy--editorial">
      <p class="section-label section-label--hero"><span class="status-dot" aria-hidden="true"></span>{{ contact.hero.label }}</p>
      <h1>Lass uns sprechen.</h1>
      <p class="hero-section__subtitle">{{ contact.hero.subtitle }}</p>
      <p class="hero-section__support">{{ contact.hero.support }}</p>
    </div>

    <aside class="contact-page__hero-card">
      <p class="contact-page__hero-card-label">Direkter Kontakt</p>
      <a class="site-footer__link" href="mailto:{{ legal.simon.email }}">{{ legal.simon.email }}</a>
      <a class="site-footer__link" href="tel:{{ site.contact.phone | replace: ' ', '' }}">{{ site.contact.phone }}</a>
      <p>Ich melde mich persönlich mit einer ehrlichen ersten Einschätzung zurück.</p>
    </aside>
  </div>
</section>

<section class="section section--cream contact-page__main">
  <div class="shell section-grid contact-page__grid">
    <div class="contact-page__form-card">
      {% include contact_project_form.html id_prefix="contact" form=contact.form context="contact-page" %}
    </div>

    <div class="contact-page__aside">
      <div class="audit-card audit-card--dark contact-page__audit-card">
        <p class="section-label section-label--light"><span class="status-dot" aria-hidden="true"></span>{{ contact.analysis.label }}</p>
        <h3>{{ contact.analysis.title }}</h3>
        <p>{{ contact.analysis.text }}</p>
        {% include site_check_form.html id_prefix="contact-check" form=home.pain.form context="contact-check" variant="dark" %}
      </div>

      <div class="contact-page__direct-card">
        <h3>{{ contact.direct.title }}</h3>
        <p>{{ contact.direct.intro }}</p>
        <div class="contact-page__direct-links">
          <a class="site-footer__link" href="mailto:{{ legal.simon.email }}">{{ legal.simon.email }}</a>
          <a class="site-footer__link" href="tel:{{ site.contact.phone | replace: ' ', '' }}">{{ site.contact.phone }}</a>
          <a class="site-footer__link" href="{{ legal.simon.website }}" target="_blank" rel="noopener noreferrer">{{ legal.simon.website | replace: 'https://', '' }}</a>
        </div>
      </div>
    </div>
  </div>
</section>
