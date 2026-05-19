import '../css/input.css';
import { footer } from './footer.js';
import { hero } from './hero.js';
import { navbar } from './navbar.js';
import { strip } from './strip.js';

const path =  window.location.pathname.split("/").pop() || "index.html"

footer();
navbar();
strip();
const daftarHero = {
  "about.html": {
    title: "About",
  },
  "aboutVisi.html": {
    title: "About",
  },
  "filmAll.html": {
    title: "Galeri",
  },
  "filmBesar.html": {
    title: "Galeri",
  },
  "filmPendek.html": {
    title: "Galeri",
  },
  "filmBts.html": {
    title: "Galeri",
  },
  "filmDokumenter.html": {
    title: "Galeri",
  },
  "filmAchievement.html": {
    title: "Galeri",
  },
  "eventProgram.html": {
    title: "Event",
  },
  "eventUpcoming.html": {
    title: "Event",
  },
};
const halaman = daftarHero[path] || daftarHero['index.html']
hero(halaman.title);

/* ── Film strips ── */
        function makeStrip(id) {
            const el = document.getElementById(id);
            if (!el) return;
            for (let i = 0; i < 60; i++) {
                const h = document.createElement('div');
                h.style.cssText = 'width:22px;height:14px;border-radius:2px;background:#222222;flex-shrink:0;';
                el.appendChild(h);
            }
        }
        makeStrip('film-strip-top');
        makeStrip('film-strip-footer');

        

        /* ── Scroll reveal ── */
        const reveals = document.querySelectorAll('.reveal');
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    revealObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });
        reveals.forEach((el, i) => {
            el.style.transitionDelay = `${(i % 4) * 0.07}s`;
            revealObs.observe(el);
        });

        /* ── Film tab filter ── */
        function filterFilm(btn, genre) {
            document.querySelectorAll('[onclick^="filterFilm"]').forEach(b => {
                b.className = 'inline-flex items-center gap-2 font-body text-[11px] font-bold tracking-widest6 uppercase px-[18px] py-2 rounded-[3px] cursor-pointer bg-dark2 text-white border-[1.5px] border-border hover:border-green hover:text-green-lt transition-all duration-300';
            });
            btn.className = 'inline-flex items-center gap-2 font-body text-[11px] font-bold tracking-widest6 uppercase px-[18px] py-2 rounded-[3px] cursor-pointer bg-green text-white hover:bg-green-lt hover:-translate-y-0.5 hover:shadow-green-btn transition-all duration-300';

            const cards = document.querySelectorAll('.film-card');
            cards.forEach(card => {
                card.style.display = (genre === 'all' || card.dataset.genre === genre) ? '' : 'none';
            });
        }

        /* ── Navbar active on scroll ── */
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 100) { }
            });
        });