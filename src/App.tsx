import type { Component } from "solid-js";
import { lazy } from "solid-js";
import Hero from "./componets/hero";
import Footer from "./componets/footer";
import ChatbotImg from "/images/chatbot.png";
import ChatbotWebp from "/images/chatbot.webp";
import CodingImg from "/images/codingday.png";
import CodingWebp from "/images/codingday.webp";
import SafepawImg from "/images/safepaw.png";
import SafepawWebp from "/images/safepaw.webp";
const App: Component = () => {
  const Preview = lazy(() => import("./componets/preview"));
  return (
    <>
      <Hero />
      <div class="zinc-400 mb-9 font-light mx-auto px-4 sm:px-6 md:px-20 font-titillium text-sm">
        <span class="w-20 h-px border-"></span>Meine arbeiten{" "}
      </div>
      <Preview
        title="Chatbot User Interface"
        desc="Ein innovativer Chatbot wurde entwickelt, um eine breite Palette von Fragen zu beantworten und Unklarheiten auszuräumen. Dieser Chatbot bietet den Nutzern wertvolle Hilfe und Unterstützung."
        image={ChatbotImg}
        imageWebp={ChatbotWebp}
        route=""
        labels="Test"
        flex="flex-row"
      />
      <Preview
        title="Merchandise CodingDay"
        desc="Meine Kreationen für den CodingDay-Merchandise – von Pokalen über Plakate bis zu Kleidung und Stickern – spiegeln die Begeisterung fürs Coden wider und würdigen die Teilnehmer."
        image={CodingImg}
        imageWebp={CodingWebp}
        route=""
        labels="Test"
        flex="flex-row-reverse"
      />
      <Preview
        title="Tutor gesucht!"
        desc="Ich entwarf eine Website, um Tutoren für unsere Hackathons zu finden. Dabei nutzte ich intensiv UX und UI, um eine benutzerfreundliche und ansprechende Erfahrung zu gewährleisten."
        image={ChatbotImg}
        imageWebp={ChatbotWebp}
        route=""
        labels="Test"
        flex="flex-row"
      />
      <Preview
        title="SafePaw Versicherung"
        desc="Schon jemals von einer zuverlässigen Haustierversicherung gehört? Wir auch nicht. Unsere Aufgabe war es eine stabile aber dennoch optisch zuverlässige Haustierversicherung zu gestalten."
        image={SafepawImg}
        imageWebp={SafepawWebp}
        route=""
        labels="Test"
        flex="flex-row-reverse"
      />
      <Footer/>
    </>
  );
};

export default App;
