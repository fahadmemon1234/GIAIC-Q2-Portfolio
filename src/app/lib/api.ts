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

interface HeroCard {
  id: number;
  title: string;
  category: {
    title: string;
  };
  author: string;
  createdDate: string;
  imageUrl: {
    asset: {
      url: string;
    };
  };
  description1: string;
  subHeading: string;
  subDescription: string;
  postType: string;
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

export const fetchheroCard = async (): Promise<HeroCard[]> => {
  const query = `
    *[_type == "post"] | order(id desc) {
      id,
      title,
      category-> {
        title
      },
      author,
      createdDate,
      imageUrl {
        asset->{
          url
        }
      },
      description1,
      subHeading,
      subDescription,
      postType
    }
  `;
  try {
    const heroCards = await client.fetch<HeroCard[]>(query);
    return heroCards;
  } catch (error) {
    console.error("Error fetching hero card data from Sanity:", error);
    throw new Error("Failed to fetch hero card data");
  }
};

export const fetchHeroCardById = async (
  id: number
): Promise<HeroCard | null> => {
  const query = `
    *[_type == "post" && id == $id][0] {
      id,
      title,
      category-> {
        title
      },
      author,
      createdDate,
      imageUrl {
        asset->{
          url
        }
      },
      description1,
      subHeading,
      subDescription,
      postType
    }
  `;

  try {
    const heroCard = await client.fetch<HeroCard | null>(query, { id });
    return heroCard;
  } catch (error) {
    console.log("Error fetching hero card data by ID from Sanity:", error);
    throw new Error("Failed to fetch hero card data by ID");
  }
};

export const fetchTutorials = async (query: string): Promise<any> => {
  try {
    const tutorials = await client.fetch(query);
    return tutorials;
  } catch (error) {
    console.error("Error fetching tutorials:", error);
    throw new Error("Failed to fetch tutorials");
  }
};
