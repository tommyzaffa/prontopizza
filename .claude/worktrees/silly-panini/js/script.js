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
    const lbPrev = document.querySelector('.lightbox-prev');
    const lbNext = document.querySelector('.lightbox-next');
    const galleryLinks = Array.from(document.querySelectorAll('.gallery-item, .js-lightbox'));
    let currentIndex = -1;

    function showAt(index) {
        if (!lightbox || !galleryLinks.length) return;
        currentIndex = (index + galleryLinks.length) % galleryLinks.length;
        const a = galleryLinks[currentIndex];
        const img = a.querySelector('img');
        lbImg.src = a.getAttribute('href');
        lbImg.alt = img ? img.alt : '';
        lbCaption.textContent = a.dataset.caption || '';
    }
    function openLightbox(index) {
        if (!lightbox) return;
        showAt(index);
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        lbImg.src = '';
        currentIndex = -1;
        document.body.style.overflow = '';
    }
    function showPrev() { if (currentIndex >= 0) showAt(currentIndex - 1); }
    function showNext() { if (currentIndex >= 0) showAt(currentIndex + 1); }

    galleryLinks.forEach((a, i) => {
        a.addEventListener('click', e => {
            e.preventDefault();
            openLightbox(i);
        });
    });

    if (lbClose) lbClose.addEventListener('click', closeLightbox);
    if (lbPrev)  lbPrev.addEventListener('click', e => { e.stopPropagation(); showPrev(); });
    if (lbNext)  lbNext.addEventListener('click', e => { e.stopPropagation(); showNext(); });
    if (lightbox) {
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener('keydown', e => {
        if (!lightbox || !lightbox.classList.contains('open')) {
            if (e.key === 'Escape') closeLightbox();
            return;
        }
        if (e.key === 'Escape')      closeLightbox();
        else if (e.key === 'ArrowLeft')  showPrev();
        else if (e.key === 'ArrowRight') showNext();
    });

    // Swipe touch su mobile
    if (lightbox) {
        let touchStartX = 0;
        lightbox.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        lightbox.addEventListener('touchend', e => {
            const dx = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(dx) > 50) {
                if (dx < 0) showNext(); else showPrev();
            }
        }, { passive: true });
    }

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
    const dayKeys = ['day.sun', 'day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat'];

    function t(key) {
        return (window.PPi18n && window.PPi18n.t) ? window.PPi18n.t(key) : key;
    }

    function updateOpenStatus() {
        if (!statusEl) return;
        const now = new Date();
        const day = now.getDay(); // 0 dom, 1 lun, 2 mar...
        const hour = now.getHours() + now.getMinutes() / 60;
        const isOpenNow = day !== 1 && ((hour >= 12 && hour < 14) || (hour >= 18 && hour < 22));

        if (isOpenNow) {
            statusEl.innerHTML = '<span class="dot"></span> ' + t('status.open_today');
            return;
        }

        let whenLabel = '';
        let atLabel = t('status.at_12');

        if (day !== 1 && hour >= 14 && hour < 18) {
            whenLabel = t('status.today');
            atLabel = t('status.at_18');
        } else if (day !== 1 && hour < 12) {
            whenLabel = t('status.today');
            atLabel = t('status.at_12');
        } else {
            // siamo dopo le 22 o è lunedì → trova il prossimo giorno aperto
            let next = (day + 1) % 7;
            while (next === 1) next = (next + 1) % 7;
            const tomorrow = (day + 1) % 7;
            whenLabel = next === tomorrow ? t('status.tomorrow') : t(dayKeys[next]).toLowerCase();
        }

        const text = t('status.closed_pre') + ' ' + whenLabel + ' ' + atLabel;
        statusEl.innerHTML = '<span class="dot" style="background:#e8b24c;box-shadow:0 0 10px #e8b24c;"></span> ' + text;
    }

    // Render iniziale (se i18n già pronto) e su cambio lingua
    if (window.PPi18n) updateOpenStatus();
    document.addEventListener('pp-lang-change', updateOpenStatus);
})();
