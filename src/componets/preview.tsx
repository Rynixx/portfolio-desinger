
export default function Preview(props) {
    return (
    <>
    <div class={`flex ${props.flex} lg:${props.flex} flex-row-reverse px-8 w-full items-center justify-around font-titillium mt-10 mb-10`}>
        <div class="flex flex-col max-w-xl pt-40 pb-40 p-12 justify-center space-y-4 bg-svg-bubble bg-cover bg-center bg-clip-border">
            <h3>{props.title}</h3>
            <p class="text-xl">{props.desc}</p>
            <span>{props.labels}</span>
            <a class="font-bold underline-offset-8 underline decoration-4" href={props.route}>Zum Projekt</a>
        </div>
        <div class="justify-center">
            <img src={props.image} class="w-px-500" width="508px" height="315px" alt={`Image for ${props.title}`} />
        </div>
    </div>
    </>
    )
}