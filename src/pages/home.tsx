// pages/home
import { lazy } from "solid-js";
import Hero from "../componets/hero";
import Footer from "../componets/footer";
import Divider from "../componets/divider"
const Preview = lazy(() => import("../componets/preview"));
export default function Project() {
  return (
    <>
      <Hero />
      <div class="text-zinc-400 px-10">
        <Divider title="Meine arbeiten" border="border-zinc-400"/>
        </div>
      <Preview
        title="Chatbot User Interface"
        desc="Ein innovativer Chatbot wurde entwickelt, um eine breite Palette von Fragen zu beantworten und Unklarheiten auszuräumen. Dieser Chatbot bietet den Nutzern wertvolle Hilfe und Unterstützung."
        image="/images/chatbot.png"
        imageWebp="/images/chatbot.webp"
        route="/project/0"
        labels="UI/UX"
        flex="flex-row"
      />
      <Preview
        title="Merchandise CodingDay"
        desc="Meine Kreationen für den CodingDay-Merchandise – von Pokalen über Plakate bis zu Kleidung und Stickern – spiegeln die Begeisterung fürs Coden wider und würdigen die Teilnehmer."
        image="/images/codingday.png"
        imageWebp="/images/codingday.webp"
        route="/project/1"
        labels="Design"
        flex="flex-row-reverse"
      />
      <Preview
        title="Tutor gesucht!"
        desc="Ich entwarf eine Website, um Tutoren für unsere Hackathons zu finden. Dabei nutzte ich intensiv UX und UI, um eine benutzerfreundliche und ansprechende Erfahrung zu gewährleisten."
        image="/images/tutor.png"
        imageWebp="/images/tutor.webp"
        route="/project/2"
        labels="UI/UX"
        flex="flex-row"
      />
      <Preview
        title="SafePaw Versicherung"
        desc="Schon jemals von einer zuverlässigen Haustierversicherung gehört? Wir auch nicht. Unsere Aufgabe war es eine stabile aber dennoch optisch zuverlässige Haustierversicherung zu gestalten."
        image="/images/safepaw.png"
        imageWebp="/images/safepaw.webp"
        route="/project/3"
        labels="UI/UX"
        flex="flex-row-reverse"
      />
      <Footer />
    </>
  );
}
