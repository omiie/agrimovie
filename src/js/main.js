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
  "index.html":{
    title:"Kosong",
  },
  "about.html": {
    title: "Tentang",
  },
  "aboutVisi.html": {
    title: "Tentang",
  },
  "aboutStruktur.html": {
    title: "Tentang",
  },
  "filmAll.html": {
    title: "Film",
  },
  "filmBesar.html": {
    title: "Film",
  },
  "filmPendek.html": {
    title: "Film",
  },
  "filmBts.html": {
    title: "Film",
  },
  "filmDokumenter.html": {
    title: "Film",
  },
  "filmAchievement.html": {
    title: "Pencapaian",
  },
  "eventProgram.html": {
    title: "Program",
  },
  "eventUpcoming.html": {
    title: "Acara",
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
        

        /* ── Navbar active on scroll ── */
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
            sections.forEach(s => {
                if (window.scrollY >= s.offsetTop - 100) { }
            });
        });
