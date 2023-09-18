export default function Divider(props) {
  return (
    <>
      <div class={`w-16 mr-4 h-3 border-b-2 border-solid ${props.border}`}></div>
      <div>{props.title}</div>
    </>
  );
}
