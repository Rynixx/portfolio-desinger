// pages/projects/[id].js
import { useParams, useRouteData } from "@solidjs/router";
import Divider from "../../componets/divider";
import ProjectInfo from "../../componets/projectInfo";
import Gallery from "../../componets/gallery";

import getData from "../../componets/getData";
import { resolveLink } from "../../helpers/resolveImg";
import { For, createResource } from "solid-js";
export default function Project(props) {
  const params = useParams();
  const [projectData] = createResource(() => params.id, getData);
  const [image1] = createResource(
    () => projectData()?.fields.projectimage[0]?.sys.id,
    resolveLink
  );
  const [image2] = createResource(
    () => projectData()?.fields.projectimage[1]?.sys.id,
    resolveLink
  );
  const [image3] = createResource(
    () => projectData()?.fields.projectimage[2]?.sys.id,
    resolveLink
  );
  const [link] = createResource(() => {
    const id = projectData()?.fields.download?.sys?.id;
    if (id) {
      return projectData()?.fields.download?.sys?.id, resolveLink;
    }
  });
  return (
    <div class="pt-page-moveFromRight">
      <div class="w-full justify-evenly flex flex-col-reverse lg:flex-row bg-blue-200 p-9">
        <div>
          <h1 class="text-5xl mt-5 mb-5 font-bold max-w-xl">
            {projectData()?.fields.title}
          </h1>
          <p class="text-lg mt-5 mb-5 font-light max-w-xl">
            {projectData()?.fields.headingDesc.content[0].content[0].value}
          </p>
        </div>
        <div class="lg:p-10">
          <img src={image1()} loading="eager"></img>
        </div>
      </div>

      <ProjectInfo tags={projectData()?.fields.tags} />
      <div class="w-full justify-evenly flex flex-col-reverse mt-2 p-9 lg:flex-row ">
        <div>
          <Divider title="Problem" border="border-zinc-800" />
          <h1 class="text-3xl  mt-5 mb-5 font-bold max-w-xl">
            {projectData()?.fields.sectionHeading1}
          </h1>{" "}
          <For each={projectData()?.fields?.sectionText1?.content}>
            {(item, index) => (
              <p class="text-lg  mt-5 mb-5 font-light max-w-xl">
                {item.content[0]?.value}
              </p>
            )}
          </For>
        </div>
        <div class="lg:p-10 max-w-xl">
          <img src={image2()} loading="eager"></img>
        </div>
      </div>
      <div class="w-full justify-evenly flex flex-col-reverse pt-16 lg:flex-row p-9 bg-cyan-700 text-white">
        <div>
          <Divider title="Lösung" border="border-white" />
          <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">
            {projectData()?.fields.sectionHeading2}
          </h1>
          <For each={projectData()?.fields.sectionText2.content}>
            {(item) => (
              <p class="text-lg mt-5 mb-5 font-light max-w-xl">
                {item.content[0]?.value}
              </p>
            )}
          </For>
        </div>
        <div class="lg:p-10 max-w-xl">
          <img src={image3()} loading="eager" alt="Image" />
        </div>
      </div>

      <div class="w-full justify-evenly flex flex-col-reverse pt-16 lg:flex-row p-9">
        <div>
        
          <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">
            {projectData()?.fields?.sectionHeading3}
          </h1>
          <For each={projectData()?.fields?.sectionText3?.content}>
            {(item) => (
              <p class="text-lg mt-5 mb-5 font-light max-w-xl">
                {item.content[0]?.value}
                {item.content[1]?.value}
                {item.content[2]?.value}
                {item.content[3]?.value}
                {item.content[4]?.value}
              </p>
            )}
          </For>
        </div>
        <div class="lg:p-10 w-4/12 ">
         
        </div>
      </div>
      
         
        
      {projectData()?.fields?.download?.sys?.id && (
        <div class="flex flex-row justify-center mb-5">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1m0j-E-Den3AwTyWNoeTGMU-wDQ5AYyXS/view?usp=sharing"
            class="font-bold underline-offset-8 underline decoration-4 hover:decoration-[10px]"
          >
            Projekthandbuch öffnen
          </a>
        </div>
      )}
      <div class="mb-5">
        {projectData() && projectData()?.fields.gallery && (
          <Gallery images={projectData()?.fields.gallery} />
        )}
      </div>
      <div class="flex flex-row justify-center mb-10 mt-10">
        <a
          href="/"
          class="font-bold underline-offset-8 underline decoration-4 hover:decoration-[10px]"
        >
          Zurück zu den Projekten
        </a>
      </div>
    </div>
  );
}
