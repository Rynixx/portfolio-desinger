import { createSignal } from 'solid-js';
export default async function getData(i) {
    const accessToken = "8cibYALqde4U_xnW1m9Mv20TFQScNOuhZkojgvsJUiI";
    try {
        const response = await fetch(
            `https://cdn.contentful.com/spaces/ba1bkpjilhhq/environments/master/entries?content_type=project`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        const data = await response.json();
        return data.items[i];
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}