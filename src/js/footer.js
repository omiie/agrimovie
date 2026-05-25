import instagramUrl from '../../assets/img/IG.jpg';
import logoUrl from '../../assets/img/LOGO_AGRIMOVIE.jpg';
import tiktokUrl from '../../assets/img/TT.jpg';
import whatsappUrl from '../../assets/img/WA.jpg';
import youtubeUrl from '../../assets/img/YT.png';

export function footer() {
  const footerElement = document.getElementById('footer');
  if (!footerElement) return;
  const path = window.location.pathname.split("/").pop() || "index.html";
const activeSub = (pageName) =>{
    return path == pageName
    ? "text-green-lt translate translate-x-2x " 
    : "text-muted footer-link";
  } 
  footerElement.innerHTML = `
    <footer class="bg-black border-t-[3px] border-t-green">
        <div class="flex gap-[5px] py-[5px] bg-black overflow-hidden" id="film-strip-footer" aria-hidden="true"></div>
        <div class="max-w-[1240px] mx-auto px-10 max-md:px-5 pt-16">
            <div
                class="grid grid-cols-[1.6fr_1fr_1fr_1fr] max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 mb-12 max-lg:gap-8">

                <!-- Brand -->
                <div>
                    <img src="${logoUrl}" alt="Agrimovie" class="h-16 w-auto mb-4"
                        style="filter:brightness(0.9);" />
                    <p class="text-[13px] font-light text-muted leading-[1.7] mb-5">Organisasi Mahasiswa
                        Film<br />Institut Pertanian Bogor<br />Bogor, Jawa Barat</p>
                    <div class="flex gap-3">
                        <a href="https://www.instagram.com/agrimovie/"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="${instagramUrl}" alt="IG"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="https://www.youtube.com/@agrimoviesvipb"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="${youtubeUrl}" alt="YT"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="https://www.tiktok.com/@agrimoviesvipb"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="${tiktokUrl}" alt="TT"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                        <a href="#"
                            class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-green hover:border-green hover:-translate-y-[3px] transition-all duration-300">
                            <img src="${whatsappUrl}" alt="WA"
                                style="height:20px;width:auto;filter:brightness(0.85);margin:0;" />
                        </a>
                    </div>
                </div>

                <!-- About -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Tentang</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="about.html" class="${activeSub("about.html")} text-[13px] ">
                        Tentang Kami</a></li>
                    </ul>
                </div>

                <!-- Films & Galeri -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Films
                        &amp; Galeri</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="filmAll.html" class="${activeSub("filmAll.html")} text-[13px] ">Film</a>
                        </li>
                       <li class="mb-[10px]"><a href="filmBts.html" class="${activeSub("filmBts.html")} text-[13px] ">
                        Dibalik Layar</a></li>
                        <li class="mb-[10px]"><a href="filmAchievement.html" class="${activeSub("filmAchievement.html")} text-[13px] ">
                        Pencapaian</a></li>
                    </ul>
                </div>
                
                <!-- Event -->
                <div>
                    <h4 class="text-[10px] font-extrabold tracking-[0.2em] uppercase text-green-lt mb-[18px]">Acara & Program</h4>
                    <ul class="list-none">
                        <li class="mb-[10px]"><a href="#events" class="${activeSub("eventUpcoming.html")} text-[13px] ">
                                Acara Mendatang</a></li>
                        <li class="mb-[10px]"><a href="#program" class="${activeSub("eventProgram.html")} text-[13px] ">
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
  `;
}
