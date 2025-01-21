import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).url();
}

export const fetchAllProducts = async (): Promise<any[]> => {
  const query = `
      *[_type == "product"] | order(_createdAt desc) {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        name,
        slug {
          current
        },
        description,
        price,
        quantity,
        features,
        dimensions {
          width,
          height,
          depth,
          _type
        },
        image {
          asset->{
            _id,
            url
          }
        }
      }
    `;
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    throw new Error("Failed to fetch product data");
  }
};

export const fetchProductById = async (id: string): Promise<any> => {
  const query = `
      *[_type == "product" && _id == $id] {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        name,
        slug {
          current
        },
        description,
        price,
        quantity,
        features,
        dimensions {
          width,
          height,
          depth,
          _type
        },
        image {
          asset->{
            _id,
            url
          }
        }
      }[0]
    `;
  try {
    const product = await client.fetch(query, { id });
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product by ID");
  }
};

export const fetchAllCartData = async (): Promise<any[]> => {
  const query = `
      
    *[_type == "addToCart"] | order(_id desc) {
  _id,
  _type,
  productId,
  productName,
  productImage {
    asset->{
      _id,
      url
    }
  },
  price,
  quantity,
  "productImageFromProductTable": *[_type == "product" && _id == ^.productId][0].image.asset->{
    _id,
    url
  }
} 
    `;

  try {
    const cartData = await client.fetch(query);
    return cartData;
  } catch (error) {
    console.error("Error fetching cart data:", error);
    throw new Error("Failed to fetch cart data");
  }
};

export const deleteCartItem = async (id: string) => {
  try {
    // Delete the item from the "addToCart" table using the provided ID
    const deletedItem = await client.delete(id);
    // console.log('Item deleted:', deletedItem);
    return deletedItem;
  } catch (error) {
    console.error("Error deleting cart item:", error);
    throw new Error("Failed to delete item from cart");
  }
};


export const deleteAllCartItems = async () => {
  try {
    // Fetch all items from the "addToCart" table
    const items = await client.fetch('*[_type == "addToCart"]');
    
    if (items.length > 0) {
      // Loop through and delete each item
      const deletePromises = items.map((item: { _id: string }) => client.delete(item._id));
      await Promise.all(deletePromises);
      console.log('All cart items have been deleted successfully.');
    } else {
      console.log('No items found in the cart to delete.');
    }
  } catch (error) {
    console.error("Error deleting all cart items:", error);
    throw new Error("Failed to delete all items from the cart");
  }
};

