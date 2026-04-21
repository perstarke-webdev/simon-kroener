(function () {
  "use strict";

  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function normalizePath(path) {
    var normalized = path || "/";

    if (normalized.length > 1) {
      normalized = normalized.replace(/\/+$/, "");
    }

    return normalized || "/";
  }

  function initCurrentLinks() {
    var currentPath = normalizePath(window.location.pathname);
    var links = document.querySelectorAll(
      ".site-nav a[href], .site-footer a[href]"
    );

    links.forEach(function (link) {
      var href = link.getAttribute("href");
      var pathname;

      if (!href || href.indexOf("mailto:") === 0 || href.indexOf("http") === 0) {
        return;
      }

      pathname = normalizePath(href.split("#")[0] || "/");

      if (pathname !== currentPath) {
        return;
      }

      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    });
  }

  function initSectionLabels() {
    var labels = document.querySelectorAll(".section-label");

    labels.forEach(function (label) {
      if ((label.textContent || "").trim() !== "") {
        return;
      }

      label.hidden = true;
    });
  }

  function initRevealAnimations() {
    var groups = [
      { selector: ".simon-hero__copy > *", step: 75 },
      { selector: ".simon-hero__visual", step: 0 },
      { selector: ".bio-section__intro > *", step: 45 },
      { selector: ".bio-section__body > *", step: 50 },
      { selector: ".bio-section__media", step: 0 },
      { selector: ".about-page__why .section-heading > *", step: 45 },
      { selector: ".about-page__why-card", step: 70 },
      { selector: ".portfolio-page .project-card", step: 70 },
      { selector: ".contact-page__form-card", step: 0 },
      { selector: ".contact-page__aside > *", step: 65 },
      { selector: ".legal-page__aside > *", step: 65 },
      { selector: ".legal-page__content > *", step: 55 },
      { selector: ".placeholder-page__inner > *", step: 60 },
      { selector: ".services-page__problem .section-heading > *", step: 50 },
      { selector: ".services-page__problem-card", step: 65 },
      { selector: ".services-page__system .section-heading > *", step: 50 },
      { selector: ".services-page__system-layout > *", step: 70 },
      { selector: ".services-page__system-panel > *", step: 50 },
      { selector: ".services-page__system-pillars > *", step: 55 },
      { selector: ".services-page__process .section-heading > *", step: 55 },
      { selector: ".services-page__process .process-card", step: 65 },
      { selector: ".services-page__outcomes .section-heading > *", step: 55 },
      { selector: ".services-page__outcomes-card", step: 0 },
      { selector: ".services-page__difference .section-heading > *", step: 45 },
      { selector: ".services-page__difference-copy > *", step: 55 },
      { selector: "#signature .signature-band__intro > *", step: 55 },
      { selector: "#signature .signature-band__card", step: 70 },
      { selector: "#fokus .focus-journey__intro > *", step: 55 },
      { selector: "#arbeiten .project-gallery__intro > *", step: 55 },
      { selector: "#arbeiten .project-gallery__preview-frame", step: 0 },
      { selector: "#website-check .section-copy > *", step: 70 },
      { selector: "#website-check .audit-block__copy > *", step: 70 },
      { selector: "#website-check .audit-card > *", step: 65 },
      { selector: "#proof .section-heading > *", step: 40 },
      { selector: "#proof .logo-marquee", step: 0 },
      { selector: "#proof .stat-card", step: 80 },
      { selector: "#leistungen .section-heading > *", step: 55 },
      { selector: "#leistungen .process-card", step: 65 },
      { selector: "#arbeiten .section-heading > *", step: 55 },
      { selector: "#arbeiten .project-card", step: 70 },
      { selector: "#arbeiten .portfolio-section__cta", step: 0 },
      { selector: "#stimmen .section-heading > *", step: 55 },
      { selector: "#stimmen .testimonial-carousel", step: 0 },
      { selector: "#framework .framework-card > *", step: 70 },
      { selector: "#kswd .section-copy > *", step: 55 },
      { selector: "#kswd .partnership-section__visual", step: 0 },
      { selector: "#ueber-mich .section-copy > *", step: 55 },
      { selector: "#ueber-mich .person-card", step: 75 },
      { selector: "#ueber-mich .about-solo__copy > *", step: 55 },
      { selector: "#ueber-mich .about-solo__media", step: 0 },
      { selector: "#kswd .studio-note__card > *", step: 55 },
      { selector: "#cta .section-copy > *", step: 55 },
      { selector: "#cta .audit-card > *", step: 55 },
      { selector: ".site-footer__topbar > *", step: 40 },
      { selector: ".site-footer__column", step: 65 }
    ];
    var targets = [];

    groups.forEach(function (group) {
      var nodes = document.querySelectorAll(group.selector);

      nodes.forEach(function (node, index) {
        node.classList.add("reveal");
        node.style.setProperty(
          "--reveal-delay",
          String(index * (group.step || 0)) + "ms"
        );
        targets.push(node);
      });
    });

    if (!targets.length) {
      return;
    }

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      targets.forEach(function (target) {
        target.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    targets.forEach(function (target) {
      if (target.getBoundingClientRect().top <= window.innerHeight * 0.94) {
        target.classList.add("is-visible");
        return;
      }

      observer.observe(target);
    });
  }

  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.querySelector("[data-nav]");

    if (!toggle || !nav) {
      return;
    }

    function closeNav() {
      document.body.removeAttribute("data-nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = document.body.getAttribute("data-nav-open") === "true";

      if (isOpen) {
        closeNav();
        return;
      }

      document.body.setAttribute("data-nav-open", "true");
      toggle.setAttribute("aria-expanded", "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) {
        closeNav();
      }
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector("[data-site-header]");
    var lastScroll = window.scrollY;
    var ticking = false;

    if (!header) {
      return;
    }

    function updateHeader() {
      var currentScroll = window.scrollY;
      var navOpen = document.body.getAttribute("data-nav-open") === "true";

      if (navOpen || currentScroll < 24) {
        header.classList.remove("site-header--hidden");
        lastScroll = currentScroll;
        ticking = false;
        return;
      }

      if (currentScroll > lastScroll && currentScroll > 96) {
        header.classList.add("site-header--hidden");
      } else if (currentScroll < lastScroll - 6) {
        header.classList.remove("site-header--hidden");
      }

      lastScroll = currentScroll;
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (ticking) {
          return;
        }

        ticking = true;
        window.requestAnimationFrame(updateHeader);
      },
      { passive: true }
    );
  }

  function formatCount(value, prefix, suffix) {
    return String(prefix || "") + String(value) + String(suffix || "");
  }

  function initCountUp() {
    var items = document.querySelectorAll("[data-count-up]");

    if (!items.length) {
      return;
    }

    function animateItem(node) {
      var target = parseInt(node.getAttribute("data-target"), 10);
      var prefix = node.getAttribute("data-prefix") || "";
      var suffix = node.getAttribute("data-suffix") || "";
      var startTime;
      var duration = 1100;

      if (Number.isNaN(target)) {
        return;
      }

      function tick(timestamp) {
        if (!startTime) {
          startTime = timestamp;
        }

        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(target * eased);
        node.textContent = formatCount(current, prefix, suffix);

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      }

      window.requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      items.forEach(function (item) {
        var target = item.getAttribute("data-target");
        item.textContent = formatCount(
          target,
          item.getAttribute("data-prefix"),
          item.getAttribute("data-suffix")
        );
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          animateItem(entry.target);
          obs.unobserve(entry.target);
        });
      },
      {
        threshold: 0.45
      }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function initScrollScenes() {
    var scenes = document.querySelectorAll("[data-scroll-scene]");
    var ticking = false;

    if (!scenes.length) {
      return;
    }

    function updateScenes() {
      scenes.forEach(function (scene) {
        var steps = scene.querySelectorAll("[data-scene-step]");
        var panels = scene.querySelectorAll("[data-scene-panel]");

        if (!steps.length || !panels.length) {
          return;
        }

        var viewportAnchor = window.innerHeight * 0.44;
        var activeIndex = 0;
        var minDistance = Infinity;
        var progress;

        steps.forEach(function (step, index) {
          var rect = step.getBoundingClientRect();
          var center = rect.top + rect.height / 2;
          var distance = Math.abs(center - viewportAnchor);

          if (distance < minDistance) {
            minDistance = distance;
            activeIndex = index;
          }
        });

        progress =
          steps.length > 1 ? activeIndex / (steps.length - 1) : 1;

        scene.style.setProperty("--scene-progress", progress.toFixed(3));

        steps.forEach(function (step, index) {
          step.classList.toggle("is-active", index === activeIndex);
        });

        panels.forEach(function (panel, index) {
          panel.classList.toggle("is-active", index === activeIndex);
        });
      });

      ticking = false;
    }

    if (prefersReducedMotion) {
      scenes.forEach(function (scene) {
        var steps = scene.querySelectorAll("[data-scene-step]");
        var panels = scene.querySelectorAll("[data-scene-panel]");
        scene.style.setProperty("--scene-progress", "1");
        steps.forEach(function (step, index) {
          step.classList.toggle("is-active", index === 0);
        });
        panels.forEach(function (panel, index) {
          panel.classList.toggle("is-active", index === 0);
        });
      });
      return;
    }

    updateScenes();

    function queueUpdate() {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateScenes);
    }

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);
  }

  function initProjectGallery() {
    var galleries = document.querySelectorAll("[data-project-gallery]");
    var ticking = false;

    if (!galleries.length) {
      return;
    }

    galleries.forEach(function (gallery) {
      var steps = gallery.querySelectorAll("[data-gallery-step]");
      var previews = gallery.querySelectorAll("[data-gallery-preview]");
      var previewFrame = gallery.querySelector(".project-gallery__preview-frame");

      if (!steps.length || !previews.length) {
        return;
      }

      function setActive(index) {
        steps.forEach(function (step, stepIndex) {
          step.classList.toggle("is-active", stepIndex === index);
        });

        previews.forEach(function (preview, previewIndex) {
          preview.classList.toggle("is-active", previewIndex === index);
        });
      }

      setActive(0);

      if (prefersReducedMotion) {
        return;
      }

      function updateGallery() {
        var viewportAnchor = window.innerHeight * 0.4;
        var galleryRect = gallery.getBoundingClientRect();
        var previewRect = previewFrame
          ? previewFrame.getBoundingClientRect()
          : { bottom: window.innerHeight };
        var activeIndex = 0;
        var lastIndex = steps.length - 1;

        if (galleryRect.top > viewportAnchor) {
          setActive(0);
          ticking = false;
          return;
        }

        steps.forEach(function (step, index) {
          var rect = step.getBoundingClientRect();
          if (rect.top <= viewportAnchor) {
            activeIndex = index;
          }
        });

        if (
          galleryRect.bottom <= previewRect.bottom + window.innerHeight * 0.1
        ) {
          activeIndex = lastIndex;
        }

        setActive(activeIndex);
        ticking = false;
      }

      function queueGalleryUpdate() {
        if (ticking) {
          return;
        }

        ticking = true;
        window.requestAnimationFrame(updateGallery);
      }

      updateGallery();
      window.addEventListener("scroll", queueGalleryUpdate, { passive: true });
      window.addEventListener("resize", queueGalleryUpdate);
    });
  }

  function initAboutWhyTilt() {
    var cards = document.querySelectorAll(
      ".about-page__why-card, .services-page__system-panel, .services-page__process-track .process-card"
    );
    var tiltIntensity = 7.8;
    var canHover =
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!cards.length || prefersReducedMotion || !canHover) {
      return;
    }

    cards.forEach(function (card) {
      var frameId = null;
      var nextRotateX = 0;
      var nextRotateY = 0;

      function applyTilt() {
        card.style.setProperty(
          "--why-card-rotate-x",
          nextRotateX.toFixed(2) + "deg"
        );
        card.style.setProperty(
          "--why-card-rotate-y",
          nextRotateY.toFixed(2) + "deg"
        );
        frameId = null;
      }

      function queueTilt(rotateX, rotateY) {
        nextRotateX = rotateX;
        nextRotateY = rotateY;

        if (frameId !== null) {
          return;
        }

        frameId = window.requestAnimationFrame(applyTilt);
      }

      function resetTilt() {
        queueTilt(0, 0);
      }

      card.addEventListener("mousemove", function (event) {
        var bounds = card.getBoundingClientRect();
        var relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
        var relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

        queueTilt(relativeY * -tiltIntensity, relativeX * tiltIntensity);
      });

      card.addEventListener("mouseleave", resetTilt);
      card.addEventListener("blur", resetTilt);
    });
  }

  function parseDomain(value) {
    var input = (value || "").trim();
    var normalized = input;

    if (!normalized) {
      return null;
    }

    if (!/^https?:\/\//i.test(normalized)) {
      normalized = "https://" + normalized;
    }

    try {
      var parsed = new URL(normalized);
      var host = parsed.hostname.replace(/^www\./, "");
      if (!host || host.indexOf(".") === -1 || /\s/.test(host)) {
        return null;
      }
      return host;
    } catch (error) {
      return null;
    }
  }

  function parsePhone(value) {
    var input = (value || "").trim();
    var digits = input.replace(/[^\d+]/g, "");

    if (!digits || digits.replace(/\D/g, "").length < 6) {
      return null;
    }

    return input;
  }

  function parseEmail(value) {
    var input = (value || "").trim();

    if (!input || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
      return null;
    }

    return input;
  }

  function parseOptionalWebsite(value) {
    var input = (value || "").trim();
    var normalized = input;

    if (!input) {
      return "";
    }

    if (!/^https?:\/\//i.test(normalized)) {
      normalized = "https://" + normalized;
    }

    try {
      var parsed = new URL(normalized);
      var host = parsed.hostname.replace(/^www\./, "");

      if (!host || host.indexOf(".") === -1 || /\s/.test(host)) {
        return null;
      }

      return input;
    } catch (error) {
      return null;
    }
  }

  function submitDemoSubmission(payload, storageKey) {
    return new Promise(function (resolve) {
      var entries = [];

      try {
        entries = JSON.parse(window.localStorage.getItem(storageKey) || "[]");
      } catch (error) {
        entries = [];
      }

      entries.push(payload);

      try {
        window.localStorage.setItem(storageKey, JSON.stringify(entries));
      } catch (error) {
        // Ignore storage errors in preview mode.
      }

      window.setTimeout(function () {
        resolve();
      }, 280);
    });
  }

  function submitDemoLead(payload) {
    return submitDemoSubmission(payload, "ks-site-check-submissions");
  }

  function submitFormsparkPayload(endpoint, payload) {
    var formData = new window.URLSearchParams();

    Object.keys(payload).forEach(function (key) {
      formData.append(key, payload[key]);
    });

    return window
      .fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Formspark request failed");
        }

        return response.text().then(function (text) {
          if (!text) {
            return {};
          }

          try {
            return JSON.parse(text);
          } catch (error) {
            return {};
          }
        });
      });
  }

  function refreshFormGuard(form) {
    form.setAttribute("data-form-started-at", String(Date.now()));
  }

  function getHoneypotValue(form) {
    var field = form.querySelector("input[name='_honeypot']");

    if (!field) {
      return "";
    }

    return (field.value || "").trim();
  }

  function isFormSubmittedTooFast(form) {
    var startedAt = parseInt(form.getAttribute("data-form-started-at"), 10);
    var minSubmitMs = parseInt(form.getAttribute("data-form-min-submit-ms"), 10);

    if (Number.isNaN(startedAt) || Number.isNaN(minSubmitMs)) {
      return false;
    }

    return Date.now() - startedAt < minSubmitMs;
  }

  function initForms() {
    var forms = document.querySelectorAll("[data-site-check-form]");

    if (!forms.length) {
      return;
    }

    forms.forEach(function (form) {
      refreshFormGuard(form);
      var formMode = form.getAttribute("data-form-mode") || "demo";
      var formEndpoint = form.getAttribute("data-form-endpoint") || "";
      var status = form.querySelector("[data-form-status]");
      var success = form.querySelector("[data-form-success]");
      var submitButton = form.querySelector("button[type='submit']");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var domainInput = form.querySelector("input[name='domain']");
        var phoneInput = form.querySelector("input[name='phone']");
        var domainError = form.querySelector("[data-error-for='domain']");
        var phoneError = form.querySelector("[data-error-for='phone']");
        var parsedDomain = parseDomain(domainInput.value);
        var parsedPhone = parsePhone(phoneInput.value);
        var hasError = false;

        success.hidden = true;
        status.textContent = "";
        domainError.textContent = "";
        phoneError.textContent = "";
        domainInput.classList.remove("is-invalid");
        phoneInput.classList.remove("is-invalid");

        if (getHoneypotValue(form)) {
          form.reset();
          status.textContent = "";
          success.hidden = false;
          refreshFormGuard(form);
          return;
        }

        if (isFormSubmittedTooFast(form)) {
          status.textContent = "Bitte versuche es in einem Moment erneut.";
          return;
        }

        if (!parsedDomain) {
          domainError.textContent = "Bitte gib eine gültige Domain ein.";
          domainInput.classList.add("is-invalid");
          hasError = true;
        }

        if (!parsedPhone) {
          phoneError.textContent = "Bitte gib eine gültige Telefonnummer ein.";
          phoneInput.classList.add("is-invalid");
          hasError = true;
        }

        if (hasError) {
          return;
        }

        submitButton.disabled = true;
        status.textContent = "Wird verarbeitet...";
        var payload = {
          domain: parsedDomain,
          phone: parsedPhone,
          source: form.getAttribute("data-form-context") || "homepage",
          submittedAt: new Date().toISOString()
        };
        var submitRequest =
          formMode === "formspark" && formEndpoint
            ? submitFormsparkPayload(formEndpoint, payload)
            : submitDemoLead(payload);

        submitRequest
          .then(function () {
            form.reset();
            status.textContent = "";
            success.hidden = false;
            refreshFormGuard(form);
          })
          .catch(function () {
            status.textContent =
              "Gerade gab es ein Problem. Bitte versuche es noch einmal.";
          })
          .finally(function () {
            submitButton.disabled = false;
          });
      });
    });
  }

  function initProjectForms() {
    var forms = document.querySelectorAll("[data-project-form]");

    if (!forms.length) {
      return;
    }

    forms.forEach(function (form) {
      refreshFormGuard(form);
      var formMode = form.getAttribute("data-form-mode") || "demo";
      var formEndpoint = form.getAttribute("data-form-endpoint") || "";
      var status = form.querySelector("[data-form-status]");
      var success = form.querySelector("[data-form-success]");
      var submitButton = form.querySelector("button[type='submit']");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        var nameInput = form.querySelector("input[name='name']");
        var emailInput = form.querySelector("input[name='email']");
        var websiteInput = form.querySelector("input[name='website']");
        var messageInput = form.querySelector("textarea[name='message']");
        var nameError = form.querySelector("[data-error-for='name']");
        var emailError = form.querySelector("[data-error-for='email']");
        var websiteError = form.querySelector("[data-error-for='website']");
        var messageError = form.querySelector("[data-error-for='message']");
        var parsedName = (nameInput.value || "").trim();
        var parsedEmail = parseEmail(emailInput.value);
        var parsedWebsite = parseOptionalWebsite(websiteInput.value);
        var parsedMessage = (messageInput.value || "").trim();
        var hasError = false;

        success.hidden = true;
        status.textContent = "";
        nameError.textContent = "";
        emailError.textContent = "";
        websiteError.textContent = "";
        messageError.textContent = "";
        nameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-invalid");
        websiteInput.classList.remove("is-invalid");
        messageInput.classList.remove("is-invalid");

        if (getHoneypotValue(form)) {
          form.reset();
          status.textContent = "";
          success.hidden = false;
          refreshFormGuard(form);
          return;
        }

        if (isFormSubmittedTooFast(form)) {
          status.textContent = "Bitte versuche es in einem Moment erneut.";
          return;
        }

        if (!parsedName) {
          nameError.textContent = "Bitte gib deinen Namen ein.";
          nameInput.classList.add("is-invalid");
          hasError = true;
        }

        if (!parsedEmail) {
          emailError.textContent = "Bitte gib eine gültige E-Mail-Adresse ein.";
          emailInput.classList.add("is-invalid");
          hasError = true;
        }

        if (parsedWebsite === null) {
          websiteError.textContent = "Bitte gib eine gültige Website ein.";
          websiteInput.classList.add("is-invalid");
          hasError = true;
        }

        if (!parsedMessage) {
          messageError.textContent = "Bitte beschreibe dein Projekt kurz.";
          messageInput.classList.add("is-invalid");
          hasError = true;
        }

        if (hasError) {
          return;
        }

        submitButton.disabled = true;
        status.textContent = "Wird verarbeitet...";

        var payload = {
          name: parsedName,
          email: parsedEmail,
          website: parsedWebsite,
          message: parsedMessage,
          source: form.getAttribute("data-form-context") || "contact-page",
          submittedAt: new Date().toISOString()
        };
        var submitRequest =
          formMode === "formspark" && formEndpoint
            ? submitFormsparkPayload(formEndpoint, payload)
            : submitDemoSubmission(payload, "ks-project-submissions");

        submitRequest
          .then(function () {
            form.reset();
            status.textContent = "";
            success.hidden = false;
            refreshFormGuard(form);
          })
          .catch(function () {
            status.textContent =
              "Gerade gab es ein Problem. Bitte versuche es noch einmal.";
          })
          .finally(function () {
            submitButton.disabled = false;
          });
      });
    });
  }

  function initDialogs() {
    var triggers = document.querySelectorAll("[data-dialog-target]");
    var dialogs = document.querySelectorAll("[data-project-dialog]");

    if (!triggers.length || !dialogs.length) {
      return;
    }

    function closeDialog(dialog) {
      if (dialog && typeof dialog.close === "function" && dialog.open) {
        dialog.close();
      }
      document.body.classList.remove("dialog-open");
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        var dialog = document.getElementById(
          trigger.getAttribute("data-dialog-target")
        );
        var closeButton;

        if (!dialog || typeof dialog.showModal !== "function") {
          return;
        }

        event.preventDefault();
        dialog.showModal();
        document.body.classList.add("dialog-open");
        closeButton = dialog.querySelector("[data-dialog-close]");

        if (closeButton && typeof closeButton.focus === "function") {
          try {
            closeButton.focus({ preventScroll: true });
          } catch (error) {
            closeButton.focus();
          }
        }
      });
    });

    dialogs.forEach(function (dialog) {
      dialog
        .querySelectorAll("[data-dialog-close]")
        .forEach(function (closeButton) {
          closeButton.addEventListener("click", function () {
            closeDialog(dialog);
          });
        });

      dialog.addEventListener("click", function (event) {
        var bounds = dialog.getBoundingClientRect();
        var isInDialog =
          bounds.top <= event.clientY &&
          event.clientY <= bounds.top + bounds.height &&
          bounds.left <= event.clientX &&
          event.clientX <= bounds.left + bounds.width;

        if (!isInDialog) {
          closeDialog(dialog);
        }
      });

      dialog.addEventListener("close", function () {
        document.body.classList.remove("dialog-open");
      });
    });
  }

  function initProjectFilters() {
    var root = document.querySelector("[data-project-filter-root]");
    var filters = document.querySelector("[data-project-filters]");

    if (!root || !filters) {
      return;
    }

    var selects = filters.querySelectorAll("[data-project-filter]");
    var cards = root.querySelectorAll("[data-project-card]");
    var empty = root.querySelector("[data-project-filter-empty]");
    var resetButtons = root.querySelectorAll("[data-project-filter-reset]");

    if (!selects.length || !cards.length || !empty) {
      return;
    }

    function syncDrawerState() {
      if (window.innerWidth <= 640) {
        if (hasActiveFilters()) {
          filters.setAttribute("open", "");
        } else {
          filters.removeAttribute("open");
        }
        return;
      }

      filters.setAttribute("open", "");
    }

    function readValues(card, key) {
      var raw = card.getAttribute("data-" + key) || "";
      if (!raw) {
        return [];
      }

      return raw.split("||").filter(Boolean);
    }

    function syncProjectRevealState() {
      window.requestAnimationFrame(function () {
        cards.forEach(function (card) {
          var bounds;

          if (card.hidden) {
            return;
          }

          bounds = card.getBoundingClientRect();

          if (bounds.top <= window.innerHeight * 1.08) {
            card.classList.add("is-visible");
          }
        });
      });
    }

    function hasActiveFilters() {
      return Array.prototype.some.call(selects, function (select) {
        return Boolean(select.value);
      });
    }

    function updateSelectStates() {
      selects.forEach(function (select) {
        select.classList.toggle("is-active", Boolean(select.value));
      });
    }

    function matchesFilter(card, key, value) {
      if (!value) {
        return true;
      }

      return readValues(card, key).indexOf(value) !== -1;
    }

    function render() {
      var active = {};
      var visibleCount = 0;
      var filtersActive = hasActiveFilters();

      selects.forEach(function (select) {
        active[select.getAttribute("data-project-filter")] = select.value;
      });

      cards.forEach(function (card) {
        var isMatch =
          matchesFilter(card, "industry", active.industry) &&
          matchesFilter(card, "types", active.types) &&
          matchesFilter(card, "technologies", active.technologies) &&
          matchesFilter(card, "collaboration", active.collaboration);

        card.hidden = !isMatch;

        if (isMatch) {
          visibleCount += 1;
        }
      });

      updateSelectStates();
      empty.hidden = visibleCount !== 0;

      resetButtons.forEach(function (button) {
        button.hidden = !filtersActive;
      });

      syncDrawerState();
      syncProjectRevealState();
    }

    function resetFilters() {
      selects.forEach(function (select) {
        select.value = "";
      });

      render();
    }

    selects.forEach(function (select) {
      select.addEventListener("change", render);
    });

    resetButtons.forEach(function (button) {
      button.addEventListener("click", resetFilters);
    });

    window.addEventListener("resize", syncDrawerState);

    render();
  }

  function initCarousel() {
    var carousel = document.querySelector("[data-testimonial-carousel]");

    if (!carousel) {
      return;
    }

    var slides = carousel.querySelectorAll("[data-testimonial-slide]");
    var dots = carousel.querySelectorAll("[data-carousel-dot]");
    var prev = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");
    var activeIndex = 0;
    var timerId = null;

    function render(index) {
      activeIndex = index;

      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === index;
        slide.hidden = !isActive;
        slide.classList.toggle("is-active", isActive);
      });

      dots.forEach(function (dot, dotIndex) {
        var isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    }

    function goTo(index) {
      var lastIndex = slides.length - 1;
      if (index < 0) {
        render(lastIndex);
        return;
      }

      if (index > lastIndex) {
        render(0);
        return;
      }

      render(index);
    }

    function stopAutoplay() {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function startAutoplay() {
      if (prefersReducedMotion || slides.length < 2) {
        return;
      }

      stopAutoplay();
      timerId = window.setInterval(function () {
        goTo(activeIndex + 1);
      }, 6500);
    }

    if (prev) {
      prev.addEventListener("click", function () {
        goTo(activeIndex - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        goTo(activeIndex + 1);
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.getAttribute("data-carousel-dot"), 10));
      });
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", startAutoplay);

    render(0);
    startAutoplay();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initCurrentLinks();
    initSectionLabels();
    initRevealAnimations();
    initHeaderScroll();
    initNav();
    initCountUp();
    initScrollScenes();
    initProjectGallery();
    initAboutWhyTilt();
    initForms();
    initProjectForms();
    initProjectFilters();
    initDialogs();
    initCarousel();
  });
})();
