
export default function Preview(props) {
    return (
    <>
    <div class="flex flex-col w-full lg:flex-row">
        <div class="flex flex-col bg-im ">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <span>{props.labels}</span>
        </div>
        <div>
            <img src={props.image} alt={`Image for ${props.title}`} />
        </div>
    </div>
    </>
    )
}