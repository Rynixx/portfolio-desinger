import { createEffect, createSignal, For } from "solid-js";
import { resolveLink } from "../helpers/resolveImg";

export default function Gallery(props) {
  const [imageUrls, setImageUrls] = createSignal([]);
  const [isLoading, setIsLoading] = createSignal(true);  // Initialize loading state to true
  
  createEffect(async () => {
    setIsLoading(true);
    console.log(props.images)  // Set loading state to true when effect starts
    if (props.images) {
      const urls = await Promise.all(
        props.images.map(image => resolveLink(image.sys.id))
      );
      setImageUrls(urls);
      console.log(urls)
    } else {
      setImageUrls([]);
    }
    setIsLoading(false);  // Set loading state to false when effect completes
  });

  return (
    <div class="flex flex-col lg:flex-row items-center justify-center flex-wrap">
      {isLoading() ? (
        <div>Loading...</div>  // Render loading indicator if data is loading
      ) : (
        <For each={imageUrls()}>
          {(url) => (
            <div class="w-full lg:w-1/4 p-2 shadow-md rounded">
              <img
                src={url}
                class="w-full h-auto max-h-[1900px]"
              />
            </div>
          )}
        </For>
      )}
    </div>
  );
}