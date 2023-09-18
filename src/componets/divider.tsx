export default function Divider(props) {
  return (
    <>
      <div class="flex content-center flex-row mb-3 font-light font-titillium text-sm">
        <div
          class={`w-16 mr-4 h-3 border-b-[1px] border-solid ${props.border}`}
        ></div>
        <div>{props.title}</div>
      </div>
    </>
  );
}
