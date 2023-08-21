import type { Component } from 'solid-js';
import Hero from './componets/hero'
import Preview from './componets/preview'
import ChatbotImg from '/images/chatbot.png'
const App: Component = () => {
  return (
   <> 
    <Hero/>
    <div class="zinc-400 mb-9 font-light mx-auto px-4 sm:px-6 md:px-20 font-titillium text-sm"><span class="w-20 h-px border-"></span>Meine arbeiten </div>
    <Preview
      title="Chatbot User Interface"
      desc="Ein innovativer Chatbot wurde entwickelt, um eine breite Palette von Fragen zu beantworten und Unklarheiten auszuräumen. Dieser Chatbot bietet den Nutzern wertvolle Hilfe und Unterstützung."
      image={ChatbotImg}
      route=""
      labels="Test"
      flex="flex-row"
      />
          <Preview
      title="Chatbot User Interface"
      desc="Ein innovativer Chatbot wurde entwickelt, um eine breite Palette von Fragen zu beantworten und Unklarheiten auszuräumen. Dieser Chatbot bietet den Nutzern wertvolle Hilfe und Unterstützung."
      image={ChatbotImg}
      route=""
      labels="Test"
      flex="flex-row-reverse"
      />
    </>
  );
};

export default App;
