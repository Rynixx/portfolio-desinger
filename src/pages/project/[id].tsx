// pages/projects/[id].js
import { useParams, useRouteData } from "@solidjs/router";
import Divider from "../../componets/divider";
import ProjectInfo from "../../componets/projectInfo";
import Gallery from "../../componets/gallery";

import getData from "../../componets/getData"
import { resolveLink } from "../../helpers/resolveImg"
import { createResource } from "solid-js";
export default function Project(props) {
  const params = useParams()
  const [projectData] = createResource(() => params.id, getData);
  const [image1] = createResource(() => projectData()?.fields.projectimage[0]?.sys.id, resolveLink);
  const [image2] = createResource(() => projectData()?.fields.projectimage[1]?.sys.id, resolveLink);
  const [image3] = createResource(() => projectData()?.fields.projectimage[2]?.sys.id, resolveLink);

  return (
  <div>
    <div class="w-full justify-evenly flex flex-col-reverse lg:flex-row bg-blue-200 p-9">
      <div>
        <h1 class="text-5xl mt-5 mb-5 font-bold max-w-xl">{projectData()?.fields.title}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{projectData()?.fields.headingDesc.content[0].content[0].value}</p>
      </div>
      <div class="lg:p-10">
        <img src={image1()} loading="eager"></img>
      </div>
    </div>
    <ProjectInfo tags={projectData()?.fields.tags} />
    <div class="w-full justify-evenly flex flex-col-reverse mt-2 p-9 lg:flex-row ">
      <div>
      <Divider title="Problem" border="border-zinc-800"/>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{projectData()?.fields.sectionHeading1}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{projectData()?.fields.sectionText1.content[0].content[0].value}{projectData()?.fields.sectionText1.content[1]?.content[0].value}</p>
        </div>
      <div class="lg:p-10 max-w-xl">
        <img src={image2()}  loading="eager"></img>
      </div>
    </div>
    <div class="w-full justify-evenly flex flex-col-reverse pt-16 lg:flex-row p-9 bg-cyan-700 text-white">
      <div>
      <Divider title="Lösung" border="border-white"/>
        <h1 class="text-3xl mt-5 mb-5 font-bold max-w-xl">{projectData()?.fields.sectionHeading2}</h1>
        <p class="text-lg mt-5 mb-5 font-light max-w-xl">{projectData()?.fields.sectionText2.content[0].content[0].value}</p>
      </div>
      <div class="lg:p-10 max-w-xl">
        <img src={image3()}  loading="eager"></img>
      </div>
    </div>
    <div class="w-full flex  flex-col pt-16 lg:flex-col p-9">
        <h1 class="text-3xl lg:ml-24 mt-5 mb-5 font-bold max-w-xl">{projectData()?.fields.sectionHeading3}</h1>
        <p class="text-lg lg:ml-24 mt-5 mb-5 font-light max-w-xl">{projectData()?.fields.sectionText3.content[0].content[0].value}{projectData()?.fields.sectionText1.content[1]?.content[0].value}</p>
    </div>
    <div><Gallery/></div>
  </div>
  );
}
