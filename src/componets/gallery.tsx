import { createSignal, For } from "solid-js";

export default function Gallery() {
  const [list, setList] = createSignal([
    { id: "1", path: "/images/chatbot.png" },
    { id: "2", path: "/images/tutor.png" },
    { id: "3", path: "/images/codingday.png" },
  ]);
  return (
    <div class="flex flex-col lg:flex-row items-center  justify-center flex-wrap">
      <For each={list()}>
        {(list, i) => (
          <div class="w-full lg:w-1/3 p-2 shadow-md rounded">
            <img
              src={`${list.path}`}
              class="w-full h-auto"
            />
           
          </div>
        )}
      </For>
    </div>
  );
}
