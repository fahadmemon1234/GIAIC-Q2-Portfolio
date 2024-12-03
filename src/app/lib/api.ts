import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).url();
}

interface CategoryItem {
  id: number;
  title: string;
}

// interface BlogCard {
//   id: number;
//   title: string;
//   category: string;
//   author: string;
//   date: string;
//   imageUrl: { asset: { url: string } }[];
//   description: string[];
// }

export const fetchCategory = async (): Promise<CategoryItem[]> => {
  const query = `*[_type == "category"] | order(id desc) { id, title }`;
  try {
    const category = await client.fetch<CategoryItem[]>(query);
    return category;
  } catch (error) {
    console.error("Error fetching category data from Sanity:", error);
    throw new Error("Failed to fetch category data");
  }
};

// export const fetchBlogCard = async (): Promise<BlogCard[]> => {
//   const query = `*[_type == "blogCard"] | order(id asc) { id, title, category, author, date, imageUrl[] {
//     asset->{
//       url
//     }
//   }, description }`;
//   try {
//     const blogcard = await client.fetch<BlogCard[]>(query);

//     return blogcard;
//   } catch (error) {
//     console.error("Error fetching blogcard data from Sanity:", error);
//     throw new Error("Failed to fetch blogcard data");
//   }
// };

export const fetchTutorials = async (query: string): Promise<any> => {
  try {
    const tutorials = await client.fetch(query);
    return tutorials;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    throw new Error("Failed to fetch tutorials");
  }
};
