// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "wl6ej80y",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: false,
};

const client = createClient(config);

export default client;