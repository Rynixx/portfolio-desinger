export default function ProjectInfo(props) {
  return (
    <><div class ="pl-16 pr-16">
      <div class="mt-10 text-center p-5 border-gray-100 mx-auto border-[1px] justify-evenly flex flex-col lg:flex-row">
        <div class="flex flex-col p-5">
          <div class="font-bold text-base">Rolle</div>
          <p class="font-light">test{props.role}</p>
        </div>{" "}
        <div class="flex flex-col p-5">
          <div class="font-bold text-base">Team</div>
          <p>test{props.role}</p>
        </div>{" "}
        <div class="flex flex-col p-5">
          <div class="font-bold text-base">Dauer</div>
          <p>test{props.role}</p>
        </div>{" "}
      </div>
      </div>
    </>
  );
}
