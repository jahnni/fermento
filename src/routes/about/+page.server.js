import client from "$lib/sanityClient";

export async function load(){
  const page = await client.fetch(/* groq */ `
  *[
    _type == 'page' && 
    slug.current=='le-projet' &&
    !(_id in path("drafts.**"))
  ][0]
  {title,
    "imageUrl": mainImage.asset->url,
    body}
  `);

  return {
    page
  };
};
