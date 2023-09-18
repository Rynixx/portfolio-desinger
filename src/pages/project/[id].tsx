// pages/projects/[id].js
import { useRouteData } from "@solidjs/router";
import Divider from "../../componets/divider";
import ProjectInfo from "../../componets/projectInfo";

export default function Project() {
  //const project = useRouteData();
  const project = {
    title1: {
        title: "Chatbot User Interface",
        paragraph: "Der Chatbot wurde speziell entwickelt, um Lehrlinge während eines Hackathons zu unterstützen, indem er häufig gestellte Fragen beantwortet und nützliche Ressourcen bereitstellt. Der Chatbot ist in der Lage, Fragen zu verschiedenen Themen zu beantworten. Zudem bietet er eine intuitive Benutzeroberfläche, die es den Lehrlingen ermöglicht, schnell und einfach Antworten auf ihre Fragen zu erhalten.",
        img:"/images/chatbot.png"
    },
    title2: {
        title: "Während Lehrlinge an Hackathons und Programmier-Wettbewerben teilnehmen, entstehen während des Events Fragen, die schnell und präzise beantwortet werden sollen.",
        paragraph: "Während jedes Hackathons nehmen 20-100 Lehrlinge teil. Während dieses Programmier-Wettbewerbs stellen sich den Lehrlingen Fragen zu Themen wie Programmen und Organisation. Es ist wichtig, diese Fragen präzise zu beantworten, ohne den Ablauf der Mitarbeiter zu beeinträchtigen.",
        img:"/images/projects/1/mac-book-pro-161.png"
    },
    title3: {
        title: "Mithilfe fortschrittlicher KI-Technologie wird angestrebt, einen Chatbot für die Lehrlinge bereitzustellen. Dadurch ist es möglich, während des Hackathons zeitgleich auf Fragen einzugehen.",
        paragraph: "Zu Beginn meiner Arbeit konzentrierte ich mich darauf, grafische Elemente zu entwickeln, die den Lehrlingen eine Verbindung ermöglichen, gleichzeitig jedoch die Professionalität der Preisverleihung bewahren. Dadurch entstand das Apprentigo Einhorn, das als Maskottchen diente und mit Programmier-Elementen und Hexagons verschmolzen wurde. Die Einhaltung des Corporate Designs ermöglichte die Kreation mehrerer Produkte, die nicht nur eine Verbindung zu den Lehrlingen herstellen, sondern sie auch würdigen und ehren.",
        img:"/images/projects/1/surface-laptop-studio.png"
    }
  };
  return (
  <div>
    <div class="w-full justify-evenly flex flex-col-reverse lg:flex-row bg-blue-200 p-9">
      <div>
        <h1 class="text-5xl mt-5 mb-5 font-bold max-w-xl">{project.title1.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{project.title1.paragraph}</p>
      </div>
      <div class="lg:p-10">
        <img src={project.title1.img} loading="eager"></img>
      </div>
    </div>
    <ProjectInfo />
    <div class="w-full justify-evenly flex flex-col-reverse mt-2 p-9 lg:flex-row ">
      <div>
        
      <Divider title="Problem" border="border-zinc-800"/>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{project.title2.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{project.title2.paragraph}</p>
      </div>
      <div class="lg:p-10 max-w-xl">
        <img src={project.title2.img} loading="eager"></img>
      </div>
    </div>
    <div class="w-full justify-evenly flex flex-col-reverse pt-16 lg:flex-row p-9 bg-cyan-700 text-white">
      <div>
      <Divider title="Lösung" border="border-white"/>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{project.title2.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{project.title2.paragraph}</p>
      </div>
      <div class="lg:p-10 max-w-xl">
        <img src={project.title3.img} loading="eager"></img>
      </div>
    </div>
  </div>
  );
}
