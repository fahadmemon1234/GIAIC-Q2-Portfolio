import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "j2g8ddia",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: true,
  token:
    "sk0FQNN5I754HJdcXGbmcRwHtfFTvkF9wz3DlDK63koGZkFgIc2iPlAxDK1CVgHhicsLskgnO53wSzBjboby6PxnbH0D19jN9zTcyc1DazdIrSZRkcExnmjny75wnit3EerEe0sQagtiCRe16tHPOwqEHEhWF3WiOMomz3PHyQVntoXr3Sih",
});