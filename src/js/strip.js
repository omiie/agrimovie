export function strip() {
  const strip = document.getElementById('strip');
  if (!strip) return;


    strip.innerHTML =`
    <div class="flex gap-[5px] py-[5px] bg-black overflow-hidden" id="film-strip-top" aria-hidden="true"></div>

    <div
        class="bg-black border-b text-white border-border px-10 h-[36px] hidden md:flex items-center justify-between text-[9px]  lg:text-[11px] tracking-widest7 uppercase">
        <div class="flex gap-5 items-center">
            <span>Agrimovie Filmmaker Club · Institut Pertanian Bogor</span>
            <span>·</span>
            <span>Bogor, Jawa Barat</span>
        </div>
        <div class="flex gap-[18px] items-center">
            <span>agrimovie@apps.ipb.ac.id</span>
            <span>·</span>
            <a href="#" class="hover:text-green-lt transition-colors duration-300">Instagram</a>
            <a href="#" class="hover:text-green-lt transition-colors duration-300">YouTube</a>
            <a href="#" class="hover:text-green-lt transition-colors duration-300">TikTok</a>
        </div>
    </div>
    `
}
