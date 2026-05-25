import logoTransparentUrl from '../../assets/img/LOGO_AGRIMOVIE-removebg-preview.png';

export function navbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const path = window.location.pathname.split("/").pop() || "index.html";
  const active = (pageName) => {
    return pageName.includes(path) 
    ? "text-green-lt underline underline-offset-4" 
    : "text-white/75 bg-transparent";
  };
  const activeSub = (pageName) =>{
    return path == pageName
    ? "text-green-lt " 
    : "text-subtle hover:text-white";
  } 
navbar.className = 'sticky top-0 z-[100]'
navbar.innerHTML = `
    <nav class=" bg-[rgba(10,10,10,0.97)] backdrop-blur-[12px] border-b border-border">
        <div class="max-w-[1240px] mx-auto px-10 h-[70px] flex items-center justify-between gap-[30px]">

            <!-- Logo -->
            <a href="index.html" class="nav-logo ">
                <img src="${logoTransparentUrl}" alt="Agrimovie Filmmaker Club"
                    class="h-8 lg:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(42,154,60,0.3)] transition-all duration-300 hover:drop-shadow-[0_0_16px_rgba(42,154,60,0.6)]" />
            </a>

            <!-- Desktop Nav -->
            <ul class="hidden lg:flex list-none gap-1 items-center">

                <!-- About -->
                <li class="relative has-dropdown">
                <a href="about.html">
                <button
                    class="${active(['about.html', 'aboutVisi.html', 'aboutStruktur.html'])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                    Tentang 
                </button>
                </a>
                </li>

                <!-- Films & Galeri -->
                <li class="relative has-dropdown">
                    <button
                        class="${active(['filmAll.html', 'filmall', 'filmachievement','filmbts', 'filmBts.html', 'filmAchievement.html'])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                        Film &amp; Galeri
                        <svg class="chevron w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] transition-transform duration-300"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        class="dropdown absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-dark2 border border-border border-t-2 border-t-green rounded-b-lg shadow-dropdown opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200]">
                        <a href="filmAll.html"
                            class="${activeSub('filmAll.html' || 'filmall')} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Semua Film</a>
                        <a href="filmBts.html"
                            class="${activeSub('filmBts.html' || 'filmbts')} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Di Balik Layar</a>
                        <a href="filmAchievement.html"
                            class="${activeSub('filmAchievement.html' || 'filmachievement')} block px-[18px] py-[10px] text-[13px] font-medium rounded-b-[6px]               hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Pencapaian</a>
                    </div>
                </li>

                <!-- Events -->
                <li class="relative has-dropdown">
                    <button
                        class="${active(['eventUpcoming.html', 'eventProgram.html', 'eventupcoming', 'eventprogram'])} flex items-center gap-[5px] px-[14px] py-2 font-body text-[13px] font-semibold tracking-widest7 uppercase border-none cursor-pointer rounded hover:text-green-lt hover:bg-green-dim transition-all duration-300 whitespace-nowrap">
                        Acara
                        <svg class="chevron w-[10px] h-[10px] fill-none stroke-current stroke-[2.5] transition-transform duration-300"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        class="dropdown absolute top-[calc(100%+8px)] left-0 min-w-[200px] bg-dark2 border border-border border-t-2 border-t-green rounded-b-lg shadow-dropdown opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200]">
                        <a href="eventUpcoming.html"
                            class="${activeSub('eventUpcoming.html'||'eventupcoming')} block px-[18px] py-[10px] text-[13px] font-medium border-b border-white/[0.04]  hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
                            Acara Mendatang</a>
                        <a href="eventProgram.html"
                            class="${activeSub('eventProgram.html' || 'eventprogram')} block px-[18px] py-[10px] text-[13px] font-medium rounded-b-[6px]               hover:bg-[rgba(42,154,60,0.1)] hover:pl-6 transition-all duration-300">
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
            class="${activeSub('about.html')} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">
            Tentang</a>
        <a href="filmAll.html"
            class="${activeSub('filmAll.html')} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Films
            &amp; Galeri</a>
        <a href="eventUpcoming.html"
            class="${activeSub('eventUpcoming.html')} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Acara & Program</a>
        <a href="eventProgram.html"
            class="${activeSub('eventProgram.html')} block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase border-b border-border">Program</a>
        <a href="#join-us"
            class="block py-[10px] text-[14px] font-semibold tracking-[0.06em] uppercase text-green-lt">Bergabung →</a>
    </div>
`;

// hamburger menu
document.getElementById('menu-btn').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('block');
        });

}
