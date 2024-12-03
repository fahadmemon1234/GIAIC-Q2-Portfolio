import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "bwqiebq9",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: true,
});
