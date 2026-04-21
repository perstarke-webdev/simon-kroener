---
title: "Datenschutz"
permalink: /datenschutz/
description: "Datenschutzerklärung für simonkroener.ch nach schweizerischem Datenschutzrecht."
classes:
  - legal-page
---
{% assign legal = site.data.legal %}
{% assign simon = legal.simon %}

<section class="hero-section legal-page__hero">
  <div class="shell hero-section__inner legal-page__hero-inner">
    <div class="hero-section__copy legal-page__hero-copy">
      <p class="section-label section-label--hero"><span class="status-dot" aria-hidden="true"></span>Rechtliches</p>
      <h1>Datenschutz</h1>
      <p class="hero-section__subtitle">Diese Datenschutzerklärung informiert darüber, wie Personendaten im Zusammenhang mit {{ legal.site_url | replace: 'https://', '' }} bearbeitet werden.</p>
    </div>

    <aside class="legal-page__hero-aside">
      <p class="legal-page__hero-kicker">Rückfragen</p>
      <a href="mailto:{{ simon.email }}">{{ simon.email }}</a>
      <a href="tel:{{ simon.phone | replace: ' ', '' }}">{{ simon.phone }}</a>
      <p class="legal-page__hero-meta">Stand: {{ legal.last_updated }}</p>
    </aside>
  </div>
</section>

<section class="section section--cream legal-page__body">
  <div class="shell legal-page__grid">
    <aside class="legal-page__aside">
      <div class="legal-page__aside-card">
        <p class="section-label section-label--dark"><span class="status-dot" aria-hidden="true"></span>Schnellnavigation</p>
        <ul class="legal-page__anchor-list">
          <li><a href="#kontaktadressen">Kontaktadresse</a></li>
          <li><a href="#rechtsgrundlagen">Rechtsgrundlagen</a></li>
          <li><a href="#umfang">Art, Umfang und Zweck</a></li>
          <li><a href="#hosting">Hosting</a></li>
          <li><a href="#logfiles">Server-Logfiles</a></li>
          <li><a href="#kontaktaufnahme">Kontaktaufnahme</a></li>
          <li><a href="#formspark">Formulare</a></li>
          <li><a href="#cookies">Cookies und Tracking</a></li>
          <li><a href="#rechte">Rechte</a></li>
          <li><a href="#sicherheit">Datensicherheit</a></li>
          <li><a href="#aenderungen">Änderungen</a></li>
        </ul>
      </div>

      <div class="legal-page__aside-card legal-page__aside-card--soft">
        <h3>Datenschutz-Kontakt</h3>
        <p>Fragen zum Umgang mit Personendaten beantworte ich direkt über diese Adresse.</p>
        <a class="site-footer__link" href="mailto:{{ simon.email }}">{{ simon.email }}</a>
        <a class="site-footer__link" href="tel:{{ simon.phone | replace: ' ', '' }}">{{ simon.phone }}</a>
      </div>
    </aside>

    <div class="legal-page__content">
      <section class="legal-section" id="kontaktadressen">
        <h2>Kontaktadresse</h2>
        <div class="legal-entity-grid legal-entity-grid--single">
          <article class="legal-entity-card">
            <h3>{{ simon.business_name }}</h3>
            <p>{{ simon.name }}<br>{{ simon.address_line_1 }}<br>{{ simon.postal_city }}<br>{{ simon.country }}</p>
            <p><a href="mailto:{{ simon.email }}">{{ simon.email }}</a><br><a href="tel:{{ simon.phone | replace: ' ', '' }}">{{ simon.phone }}</a><br><a href="{{ simon.website }}" target="_blank" rel="noopener noreferrer">{{ simon.website | replace: 'https://', '' }}</a></p>
          </article>
        </div>
      </section>

      <section class="legal-section" id="rechtsgrundlagen">
        <h2>Rechtsgrundlagen</h2>
        <p>Personendaten werden im Einklang mit dem schweizerischen Datenschutzrecht, insbesondere dem Bundesgesetz über den Datenschutz (DSG) und der Datenschutzverordnung (DSV), bearbeitet. Soweit im Einzelfall europäisches Datenschutzrecht anwendbar ist, werden zusätzlich die entsprechenden Vorgaben berücksichtigt.</p>
      </section>

      <section class="legal-section" id="umfang">
        <h2>Art, Umfang und Zweck der Bearbeitung</h2>
        <p>Es werden jene Personendaten bearbeitet, die erforderlich sind, um den Webauftritt bereitzustellen, Anfragen zu beantworten, Website-Checks durchzuführen und Projekte anzubahnen oder umzusetzen. Dazu können insbesondere Kontaktangaben, Inhaltsdaten aus Formularen, Browser- und Gerätedaten sowie Nutzungs- und Metadaten gehören.</p>
        <p>Personendaten werden nur so lange bearbeitet, wie es für den jeweiligen Zweck, zur Vertragserfüllung oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist. Anschliessend werden Daten gelöscht oder anonymisiert.</p>
      </section>

      <section class="legal-section" id="hosting">
        <h2>Hosting</h2>
        <p>Diese Website wird über GitHub Pages ausgeliefert. Im Rahmen des Hostings können technische Zugriffsdaten verarbeitet werden, um die Website sicher, stabil und performant bereitzustellen.</p>
      </section>

      <section class="legal-section" id="logfiles">
        <h2>Server-Logfiles</h2>
        <p>Beim Besuch dieser Website können technische Logdaten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Ressource, Referrer, Browsertyp und Betriebssystem verarbeitet werden. Diese Daten dienen ausschliesslich der technischen Bereitstellung, Fehleranalyse und Sicherheit des Webangebots.</p>
      </section>

      <section class="legal-section" id="kontaktaufnahme">
        <h2>Kontaktaufnahme</h2>
        <p>Wenn du per E-Mail, Telefon oder Formular Kontakt aufnimmst, werden die übermittelten Angaben bearbeitet, um deine Anfrage zu beantworten, Projekte zu prüfen und eine weitere Zusammenarbeit vorzubereiten.</p>
      </section>

      <section class="legal-section" id="formspark">
        <h2>Formulare über Formspark</h2>
        <p>Für das Projektformular und den kostenlosen Website-Check wird Formspark verwendet. Dabei werden die eingegebenen Daten an Formspark übermittelt und von dort weitergeleitet. Verarbeitet werden insbesondere Name, E-Mail-Adresse, Website, Domain, Telefonnummer, Nachrichteninhalt sowie Zeit und Kontext der Übermittlung.</p>
        <p>Weitere Informationen findest du in der <a href="https://formspark.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Formspark</a>.</p>
      </section>

      <section class="legal-section" id="cookies">
        <h2>Cookies und Tracking</h2>
        <p>Diese Website verwendet keine eigenen Analyse- oder Werbetracker. Es werden keine personenbezogenen Nutzungsprofile erstellt und keine Marketing-Cookies eingesetzt. Technisch notwendige Verarbeitungsvorgänge im Rahmen des Hostings und der Formularübermittlung bleiben davon unberührt.</p>
      </section>

      <section class="legal-section" id="rechte">
        <h2>Deine Rechte</h2>
        <ul class="legal-list">
          <li>Auskunft über bearbeitete Personendaten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung oder Einschränkung der Bearbeitung, soweit rechtlich möglich</li>
          <li>Widerspruch gegen bestimmte Bearbeitungen</li>
          <li>Herausgabe oder Übertragung von Daten, soweit ein entsprechender Anspruch besteht</li>
        </ul>
      </section>

      <section class="legal-section" id="sicherheit">
        <h2>Datensicherheit</h2>
        <p>Es werden angemessene technische und organisatorische Massnahmen getroffen, um Personendaten gegen unbefugten Zugriff, Verlust, Missbrauch oder Manipulation zu schützen.</p>
      </section>

      <section class="legal-section" id="aenderungen">
        <h2>Änderungen dieser Datenschutzerklärung</h2>
        <p>Diese Datenschutzerklärung kann angepasst werden, wenn sich technische, rechtliche oder organisatorische Rahmenbedingungen ändern.</p>
        <p>Letzte Aktualisierung: {{ legal.last_updated }}</p>
      </section>
    </div>
  </div>
</section>
