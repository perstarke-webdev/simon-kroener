---
title: "Projekte"
permalink: /projekte/
description: "Ausgewählte Projekte von Simon Kröner aus unterschiedlichen Branchen, mit Fokus auf Webdesign, Branding und Performance."
classes:
  - portfolio-page
---
{% assign home = site.data.homepage %}
{% assign projects = site.data.projects %}
{% assign legal = site.data.legal %}
{% assign project_industries = "Sport & Fitness|Recruiting & HR|Consulting & Advisory|Gastro & Food|Kunst & Kultur|Musik|Non-Profit & Soziales|Tech" | split: "|" %}
{% assign project_types = "Unternehmenswebsite|Shop|Portfolio|Software / Plattform|Branding / Logo" | split: "|" %}
{% assign project_technologies = "Custom Code|Custom CMS|Shopify|Webflow|WordPress" | split: "|" %}
{% assign project_collaborations = "Kundenprojekt|Guter Zweck (Pro Bono)" | split: "|" %}

<section class="hero-section portfolio-page__hero">
  <div class="shell portfolio-page__hero-shell">
    <div class="hero-section__copy portfolio-page__hero-copy portfolio-page__hero-copy--editorial">
      <p class="section-label section-label--hero"><span class="status-dot" aria-hidden="true"></span>Ausgewählte Projekte</p>
      <h1>Ausgewählte Arbeiten.</h1>
      <p class="hero-section__subtitle">Unterschiedliche Branchen, unterschiedliche Kontexte, aber immer derselbe Anspruch an Gestaltung, Klarheit und Umsetzung.</p>
      <div class="hero-section__actions portfolio-page__hero-actions">
        <a class="button button--secondary" href="mailto:{{ legal.simon.email }}?subject=Mehr%20Referenzen%20auf%20Anfrage">
          Mehr Referenzen auf Anfrage
          <span class="inline-icon inline-icon--external" aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </div>

    <aside class="portfolio-page__hero-aside">
      <div class="portfolio-page__hero-chip">Webdesign</div>
      <div class="portfolio-page__hero-chip">Branding</div>
      <div class="portfolio-page__hero-chip">Performance</div>
      <p>Die Auswahl zeigt Arbeiten, bei denen Marke, Struktur und Frontend konsequent zusammenspielen.</p>
    </aside>
  </div>
</section>

<section class="section section--cream portfolio-page__grid-section">
  <div class="shell" data-project-filter-root>
    {% if site.allow_project_filter %}
      <details class="project-filters reveal is-visible" data-project-filters open>
        <summary class="project-filters__summary">
          <span class="project-filters__summary-label">Filtern nach</span>
          <span class="project-filters__summary-icon" aria-hidden="true">&#9662;</span>
        </summary>

        <div class="project-filters__body">
          <div class="project-filters__toolbar">
            <p class="project-filters__label">Filtern nach</p>
          </div>

          <div class="project-filters__controls">
            <label class="project-filter">
              <span class="visually-hidden">Nach Branche filtern</span>
              <span class="project-filter__icon" aria-hidden="true">&#9662;</span>
              <select class="project-filter__field" data-project-filter="industry" aria-label="Branche">
                <option value="">Branche</option>
                {% for option in project_industries %}
                  <option value="{{ option }}">{{ option }}</option>
                {% endfor %}
              </select>
            </label>

            <label class="project-filter">
              <span class="visually-hidden">Nach Typ filtern</span>
              <span class="project-filter__icon" aria-hidden="true">&#9662;</span>
              <select class="project-filter__field" data-project-filter="types" aria-label="Typ">
                <option value="">Typ</option>
                {% for option in project_types %}
                  <option value="{{ option }}">{{ option }}</option>
                {% endfor %}
              </select>
            </label>

            <label class="project-filter">
              <span class="visually-hidden">Nach Technologie filtern</span>
              <span class="project-filter__icon" aria-hidden="true">&#9662;</span>
              <select class="project-filter__field" data-project-filter="technologies" aria-label="Technologie">
                <option value="">Technologie</option>
                {% for option in project_technologies %}
                  <option value="{{ option }}">{{ option }}</option>
                {% endfor %}
              </select>
            </label>

            <label class="project-filter">
              <span class="visually-hidden">Nach Zusammenarbeit filtern</span>
              <span class="project-filter__icon" aria-hidden="true">&#9662;</span>
              <select class="project-filter__field" data-project-filter="collaboration" aria-label="Zusammenarbeit">
                <option value="">Zusammenarbeit</option>
                {% for option in project_collaborations %}
                  <option value="{{ option }}">{{ option }}</option>
                {% endfor %}
              </select>
            </label>
          </div>

          <div class="project-filters__meta">
            <button class="button button--ghost button--small project-filters__reset" type="button" data-project-filter-reset hidden>Zurücksetzen</button>
          </div>
        </div>
      </details>
    {% endif %}

    {% include project_showcase.html projects=projects dialog_prefix="projects-page" show_tags=true %}

    <div class="project-filters__empty" data-project-filter-empty hidden>
      <p>Für diese Auswahl gibt es aktuell noch kein passendes Projekt.</p>
    </div>
  </div>
</section>

<section class="section section--deep section--cta portfolio-page__cta" id="cta">
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
      {% include site_check_form.html id_prefix="projects-check" form=home.pain.form context="projects-check" variant="dark" %}
    </div>
  </div>
</section>
