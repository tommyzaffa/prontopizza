/* Pronto Pizza — interazioni base */

(function () {
    'use strict';

    // ---------- Mobile nav ----------
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            document.body.style.overflow = open ? 'hidden' : '';
        });

        // chiudi su click link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Lightbox ----------
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCaption = document.getElementById('lightbox-caption');
    const lbClose = document.querySelector('.lightbox-close');
    const galleryLinks = document.querySelectorAll('.gallery-item, .js-lightbox');

    function openLightbox(src, caption, alt) {
        if (!lightbox) return;
        lbImg.src = src;
        lbImg.alt = alt || '';
        lbCaption.textContent = caption || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lbImg.src = '';
        document.body.style.overflow = '';
    }

    galleryLinks.forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const src = a.getAttribute('href');
            const caption = a.dataset.caption || '';
            const img = a.querySelector('img');
            const alt = img ? img.alt : '';
            openLightbox(src, caption, alt);
        });
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeLightbox();
    });

    // ---------- Year footer ----------
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // ---------- Scroll reveal (leggero) ----------
    if ('IntersectionObserver' in window) {
        const revealEls = document.querySelectorAll('.section, .menu-card, .gallery-item, .feature');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity .7s ease, transform .7s ease';
            io.observe(el);
        });
    }

    // ---------- Open status ----------
    const statusEl = document.querySelector('.hero-hours');
    if (statusEl) {
        const now = new Date();
        const day = now.getDay(); // 0 dom, 1 lun, 2 mar...
        const hour = now.getHours() + now.getMinutes() / 60;
        const dayNames = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
        const isOpenNow = day !== 1 && ((hour >= 12 && hour < 14) || (hour >= 18 && hour < 22));

        let text = '';
        if (isOpenNow) {
            // già aperto, mantieni il messaggio default
            return;
        } else if (day !== 1 && hour >= 14 && hour < 18) {
            text = 'Attualmente chiuso · Riapre oggi alle 18:00';
        } else if (day !== 1 && hour < 12) {
            text = 'Attualmente chiuso · Riapre oggi alle 12:00';
        } else {
            // siamo dopo le 22 o è lunedì → trova il prossimo giorno aperto
            let next = (day + 1) % 7;
            while (next === 1) next = (next + 1) % 7;
            const tomorrow = (day + 1) % 7;
            const label = next === tomorrow ? 'domani' : dayNames[next];
            text = `Attualmente chiuso · Riapre ${label} alle 12:00`;
        }

        statusEl.innerHTML = '<span class="dot" style="background:#e8b24c;box-shadow:0 0 10px #e8b24c;"></span> ' + text;
    }
})();
