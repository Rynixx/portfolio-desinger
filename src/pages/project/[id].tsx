// pages/projects/[id].js
import { useRouteData } from "@solidjs/router";

export default function Project() {
  //const project = useRouteData();
  const project = {
    title1: {
        title: "Title 1",
        paragraph: "This is the paragraph for Title 1. It can contain any content or text you want to describe or mention related to the first title.",
        img:"/images/"
    },
    title2: {
        title: "Title 2",
        paragraph: "This is the paragraph for Title 2. Likewise, it can be a detailed description or any content that relates to the second title.",
        img:""
    },
    title3: {
        title: "Title 3",
        paragraph: "Lastly, this is the paragraph for Title 3. It provides more information or context about the third title in the list.",
        img:""
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
        <img src="/images/chatbot.png" loading="eager"></img>
      </div>
    </div>
    <div class="w-full justify-evenly flex flex-col-reverse p-9 lg:flex-row bg-cyan-700 text-white">
      <div>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{project.title2.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{project.title2.paragraph}</p>
      </div>
      <div class="lg:p-10">
        <img src="/images/chatbot.png" loading="eager"></img>
      </div>
    </div>
    <div class="w-full justify-evenly flex flex-col-reverse lg:flex-row p-9 ">
      <div>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{project.title2.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{project.title2.paragraph}</p>
      </div>
      <div class="lg:p-10">
        <img src="/images/chatbot.png" loading="eager"></img>
      </div>
    </div>
  </div>
  );
}
