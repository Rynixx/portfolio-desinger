import FooterImage from "/images/footer.png";
import FooterImageWebP from "/images/footer.webp";
export default function Footer() {
  return (
    <>
      <div
        class={`flex flex-col text-center justify-end w-full md:flex-row font-titillium mt-10`}
      >
        <div class="flex flex-col md:pt-20 max-w-3xl md:space-x-2 space-y-4">
          <h3 class="text-4xl font-bold">
            Lassen Sie uns in Verbindung treten.
          </h3>
          <div class="flex flex-row">
            <div class="text-xl">
              Kontaktieren Sie Mich uns für Möglichkeiten oder einfach, um
              "Hallo" zu sagen!{" "}
            </div>
            <div class="animate-waving-hand text-2xl">
              <span class="pl-2 animate-waving-hand text-2xl">👋</span>
            </div>
          </div>
          <a
            class="font-bold underlined-text"
            href="/pdfs/cv.jpg"
            target="_blank"
          >
            CV Herunterladen
          </a>
        </div>
        <div class="">
          <picture>
            <source srcset={FooterImageWebP} type="image/webp" />
            <img
              src={FooterImage}
              class="rotate-45 md:rotate-0 "
              loading="lazy"
              width={624}
              height={1000}
              alt={`Footer Image pointing to call to action`}
            />
          </picture>
        </div>
      </div>
    </>
  );
}
