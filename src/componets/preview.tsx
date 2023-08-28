export default function Preview(props) {
  return (
    <>
      <div
        class={`flex flex-col md:${props.flex} px-8 w-full items-center justify-center font-titillium mt-10 mb-10`}
      >
        <div class="max-w-2xl flex flex-col -pr-20 md:pt-60 md:pb-60 md:p-12 md:m-10 m-2 justify-center md:space-x-2 space-y-4 md:w-2/3 h-auto bg-svg-bubble bg-contain bg-center bg-no-repeat">
          <h3 class="text-4xl font-bold">{props.title}</h3>
          <p class="text-xl max-w-xl">{props.desc}</p>
          <span class="w-min pl-4 pr-4 bg-zinc-100 rounded-full">{props.labels}</span>
          <a
            class="font-bold underline-offset-8 underline decoration-4"
            href={props.route}
          >
            Zum Projekt
          </a>
        </div>
        <div class="flex-row-reverse m-2">
          <picture>
            <source srcset={props.imageWebp} type="image/webp" />
            <img
              src={props.image}
              class="w-px-500"
              width="508px"
              height="315px"
              alt={`Image for ${props.title}`}
            />
          </picture>
        </div>
      </div>
    </>
  );
}
