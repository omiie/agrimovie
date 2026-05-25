(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function p(){const e=document.getElementById("footer");if(!e)return;const r=window.location.pathname.split("/").pop()||"index.html",i=a=>r==a?"text-green-lt translate translate-x-2x ":"text-muted footer-link";e.innerHTML=`
    <footer class="bg-black border-t-[3px] border-t-green">
        <div class="flex gap-[5px] py-[5px] bg-black overflow-hidden" id="film-strip-footer" aria-hidden="true"></div>
        <div class="max-w-[1240px] mx-auto px-10 max-md:px-5 pt-16">
            <div
                class="grid grid-cols-[1.6fr_1fr_1fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 mb-12 max-lg:gap-8">

                <!-- Brand -->
                <div>
                    <img src="../assets/img/LOGO_AGRIMOVIE.jpg" alt="Agrimovie" class="h-16 w-auto mb-4"
                        style="filter:brightness(0.9);" />
                    <p class="text-[13px] font-light text-muted leading-[1.7] mb-5">Organisasi Mahasiswa
                        Film<br />Institut Pertanian Bogor<br />Bogor, Jawa Barat</p>
                    <div class="flex gap-3">
                        <a href="https://www.instagram.com/agrimovie/"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="../assets/img/IG.jpg" alt="IG"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="https://www.youtube.com/@agrimoviesvipb"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="../assets/img/YT.png" alt="YT"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="https://www.tiktok.com/@agrimoviesvipb"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="../assets/img/TT.jpg" alt="TT"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="../assets/img/WA.jpg" alt="WA"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                    </div>
                </div>

                <!-- About -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Tentang</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="about.html" class="${i("about.html")} text-[13px] ">
                        Tentang Kami</a></li>
                    </ul>
                </div>

                <!-- Films & Galeri -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Films
                        &amp; Galeri</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="filmAll.html" class="${i("filmAll.html")} text-[13px] ">Film</a>
                        </li>
                       <li class="mb-[10px]"><a href="filmBts.html" class="${i("filmBts.html")} text-[13px] ">
                        Dibalik Layar</a></li>
                        <li class="mb-[10px]"><a href="filmAchievement.html" class="${i("filmAchievement.html")} text-[13px] ">
                        Pencapaian</a></li>
                    </ul>
                </div>
                
                <!-- Event -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Acara & Program</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="#events" class="${i("eventUpcoming.html")} text-[13px] ">
                                Acara Mendatang</a></li>
                        <li class="mb-[10px]"><a href="#program" class="${i("eventProgram.html")} text-[13px] ">
                        Program</a></li>
                    </ul>
                </div>
                
            </div>

            <div
                class="border-t border-border py-5 flex justify-between items-center text-[12px] text-muted tracking-widest10">
                <p>© 2025 Agrimovie IPB. All rights reserved.</p>
                <p>Institut Pertanian Bogor · Bogor, Jawa Barat</p>
            </div>
        </div>
    </footer>
  `}function c(e){const r=document.getElementById("hero");r&&(console.log(e),r.innerHTML=`
    <section
        class="hero-letterbox relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-black"
        id="hero">
        <div
          class="absolute inset-0 bg-surface flex items-center justify-center">
          <div class="flex flex-col items-center gap-[14px] text-muted">
            <p style="
                font-size: 12px;
                letter-spacing: 0.1em;
                text-transform: uppercase;">
              Foto Anggota
            </p>
          </div>
        </div>

        <!-- Overlays -->
        <div
          class="absolute inset-0 z-[2]"
          style="
            background: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.5) 50%,
              rgba(0, 0, 0, 0.15) 100%
            );
          "
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 h-[60%] z-[3]"
          style="
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.95),
              transparent
            );
          "
        ></div>
        <!-- Content -->
        <div
          class="relative z-10 max-w-[1240px] mx-auto px-10 py-20 w-full max-md:px-5 max-md:py-[60px]"
        >
          <h1
            class="font-display uppercase text-white mb-6 animate-fadeUp1"
            style="
              font-size: clamp(60px, 9vw, 120px);
              line-height: 0.95;
              letter-spacing: 0.02em;
            "
          >
            ${e} <br />
            <span class="text-green-lt">Agrimovie</span><br />
          </h1>
        </div>
    </section>`)}function m(){const e=document.getElementById("navbar");if(!e)return;const r=window.location.pathname.split("/").pop()||"index.html",i=t=>t.includes(r)?"text-green-lt underline underline-offset-4":"text-white/75 bg-transparent",a=t=>r==t?"text-green-lt ":"text-subtle hover:text-white";e.className="sticky top-0 z-[100]",e.innerHTML=`
    <nav class=" bg-[rgba(10,10,10,0.97)] backdrop-blur-[12px] border-b border-border">
        <div class="max-w-[1240px] mx-auto px-10 h-[70px] flex items-center justify-between gap-[30px]">

            <!-- Logo -->
            <a href="index.html" class="nav-logo ">
                <img src="../assets/img/LOGO_AGRIMOVIE-removebg-preview.png" alt="Agrimovie Filmmaker Club"
                    class="h-8 lg:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(42,154,60,0.3)] transition-all duration-300 hover:drop-shadow-[0_0_16px_rgba(42,154,60,0.6)]" />
            </a>

            <!-- Desktop Nav -->
            <ul class="hidden lg:flex list-none gap-1 items-center">

                <!-- About -->
                <li class="relative has-dropdown">
                <a href="about.html">
                <button
                    class="${i(["about.html","aboutVisi.html","aboutStruktur.html"])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                    Tentang 
                </button>
                </a>
                </li>

                <!-- Films & Galeri -->
                <li class="relative has-dropdown">
                    <button
                        class="${i(["filmAll.html","filmBesar.html","filmDokumenter.html","filmAchievement.html","filmBts.html","filmPendek.html"])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                        Film &amp; Galeri
                        <svg class="chevron w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] transition-transform duration-300"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        class="dropdown absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-dark2 border border-border border-t-2 border-t-green rounded-b-lg shadow-dropdown opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200]">
                        <a href="filmAll.html"
                            class="${a("filmAll.html")} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Semua Film</a>
                        <a href="filmBts.html"
                            class="${a("filmBts.html")} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Di Balik Layar</a>
                        <a href="filmAchievement.html"
                            class="${a("filmAchievement.html")} block px-[18px] py-[10px] text-[13px] font-medium rounded-b-[6px]               hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Pencapaian</a>
                    </div>
                </li>

                <!-- Events -->
                <li class="relative has-dropdown">
                    <button
                        class="${i(["eventUpcoming.html","eventProgram.html"])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                        Acara
                        <svg class="chevron w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] transition-transform duration-300"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        class="dropdown absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-dark2 border border-border border-t-2 border-t-green rounded-b-lg shadow-dropdown opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200]">
                        <a href="eventUpcoming.html"
                            class="${a("eventUpcoming.html")} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Acara Mendatang</a>
                        <a href="eventProgram.html"
                            class="${a("eventProgram.html")} block px-[18px] py-[10px] text-[13px] font-medium rounded-b-[6px]               hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Program</a>
                    </div>
                </li>

                <!-- Join Us CTA -->
                <li>
                    <a href="#join-us"
                        class="flex items-center gap-2 px-[18px] py-2 font-body text-[13px] font-bold tracking-widest7 uppercase text-white bg-green hover:bg-green-lt rounded cursor-pointer transition-all duration-300 whitespace-nowrap">
                        Bergabung
                    </a>
                </li>
            </ul>

            <!-- Hamburger -->
            <button class="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-[6px]"
                id="menu-btn" aria-label="Toggle menu">
                <span class="w-6 h-[2px] bg-white block transition-all duration-300"></span>
                <span class="w-6 h-[2px] bg-white block transition-all duration-300"></span>
                <span class="w-6 h-[2px] bg-white block transition-all duration-300"></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="hidden bg-dark2 border-b border-border px-6 py-4" id="mobile-menu">
        <a href="about.html"
            class="${a("about.html")} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">
            Tentang</a>
        <a href="filmAll.html"
            class="${a("filmAll.html")} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Films
            &amp; Galeri</a>
        <a href="eventUpcoming.html"
            class="${a("eventUpcoming.html")} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Acara & Program</a>
        <a href="eventProgram.html"
            class="${a("eventProgram.html")} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Program</a>
        <a href="#join-us"
            class="block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase text-green-lt">Bergabung →</a>
    </div>
`,document.getElementById("menu-btn").addEventListener("click",()=>{const t=document.getElementById("mobile-menu");t.classList.toggle("hidden"),t.classList.toggle("block")})}function g(){const e=document.getElementById("strip");e&&(e.innerHTML=`
    <div class="flex gap-[5px] py-[5px] bg-black overflow-hidden" id="film-strip-top" aria-hidden="true"></div>

    <div
        class="bg-black border-b text-white border-border px-10 h-[36px] hidden md:flex items-center justify-between text-[9px]  lg:text-[11px] tracking-widest7 uppercase">
        <div class="flex gap-5 items-center">
            <span>Agrimovie Filmmaker Club · Institut Pertanian Bogor</span>
            <span>·</span>
            <span>Bogor, Jawa Barat</span>
        </div>
        <div class="flex gap-[18px] items-center">
            <span>agrimovieipb@gmail.com</span>
            <span>·</span>
            <a href="https://www.instagram.com/agrimovie/" class="hover:text-green-lt transition-colors duration-300">Instagram</a>
            <a href="https://www.youtube.com/@agrimoviesvipb" class="hover:text-green-lt transition-colors duration-300">YouTube</a>
            <a href="https://www.tiktok.com/@agrimoviesvipb" class="hover:text-green-lt transition-colors duration-300">TikTok</a>
        </div>
    </div>
    `)}const b=window.location.pathname.split("/").pop()||"index.html";p();m();g();const l={"index.html":{title:"Kosong"},"about.html":{title:"Tentang"},"aboutVisi.html":{title:"Tentang"},"aboutStruktur.html":{title:"Tentang"},"filmAll.html":{title:"Film"},"filmBesar.html":{title:"Film"},"filmPendek.html":{title:"Film"},"filmBts.html":{title:"Film"},"filmDokumenter.html":{title:"Film"},"filmAchievement.html":{title:"Pencapaian"},"eventProgram.html":{title:"Program"},"eventUpcoming.html":{title:"Acara"}},h=l[b]||l["index.html"];c(h.title);function s(e){const r=document.getElementById(e);if(r)for(let i=0;i<60;i++){const a=document.createElement("div");a.style.cssText="width:22px;height:14px;border-radius:2px;background:#222222;flex-shrink:0;",r.appendChild(a)}}s("film-strip-top");s("film-strip-footer");const u=document.querySelectorAll(".reveal"),d=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(r.target.classList.add("visible"),d.unobserve(r.target))})},{threshold:.08});u.forEach((e,r)=>{e.style.transitionDelay=`${r%4*.07}s`,d.observe(e)});const x=document.querySelectorAll("section[id]");window.addEventListener("scroll",()=>{x.forEach(e=>{window.scrollY>=e.offsetTop-100})});
