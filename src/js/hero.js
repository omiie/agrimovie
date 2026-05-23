export function hero(title) {
  const hero = document.getElementById('hero');
  if (!hero) return;
  console.log(title)
hero.innerHTML = `
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
            ${title} <br />
            <span class="text-green-lt">Agrimovie</span><br />
          </h1>
        </div>
    </section>`
}