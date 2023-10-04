
const accessToken = "8cibYALqde4U_xnW1m9Mv20TFQScNOuhZkojgvsJUiI";
export async  function resolveLink(assetId) {
    const url = `https://cdn.contentful.com/spaces/ba1bkpjilhhq/environments/master/assets/${assetId}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (!response.ok) {
      console.error('Failed to fetch asset:', response.statusText);
      return;
    }
    const data = await response.json();
    console.log(data.fields.file.url)
    return data.fields.file.url;
  }