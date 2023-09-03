import FooterImage from "/images/footer.png";
import HeroImageWebP from "/images/hero.webp";
export default function Footer() {
    return (
      <>
        <div
          class={`flex flex-col text-center justify-end w-full md:flex-row font-titillium mt-10`}
        >
          <div class="flex flex-col md:pt-20 max-w-3xl md:space-x-2 space-y-4">
            <h3 class="text-4xl font-bold">Lassen Sie uns in Verbindung treten.</h3>
            <p class="text-xl">Kontaktieren Sie Mich uns für Möglichkeiten oder einfach, um "Hallo" zu sagen! 👋</p>
            
            <a
              class="font-bold underline-offset-8 underline decoration-4"
              href=""
            >
              CV Herunterladen
            </a>
          </div>
          <div class="">
            <picture>
              <source srcset={FooterImage} type="image/webp" />
              <img
                src={FooterImage}
                class="rotate-45 md:rotate-0 "
                width=""
                height=""
                alt={`Footer Image pointing to call to action`}
              />
            </picture>
          </div>
        </div>
      </>
    );
  }
  