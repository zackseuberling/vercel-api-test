import { groq } from "next-sanity";
import { getClient } from "../lib/sanity";

export default async function handler(request, response) {
  try {
    const { featuredProductions } = await getClient()
      .fetch(groq`*[_type == "homepage"][0]{
      featuredProductions[]-> {
        _type,
        _id,
        slug,
        country,
        dates,
        title,
        featuredImage,
        eventType[]->,
      }
    }`);

    console.log(featuredProductions);

    return response.status(200).json({ body: ["results"] });
  } catch (error) {
    return response.status(500).json({ body: JSON.stringify(error) });
  }
}
