import createImageUrlBuilder from "@sanity/image-url";
import { getFile } from "@sanity/asset-utils";
import { createClient } from "next-sanity";

import { config } from "./config";

/**
 * Set up a helper function for generating File URLs with only the asset reference data in your documents.
 * Read more: https://sanity-io.github.io/asset-utils/index.html#getFile
 * Read more: https://www.sanity.io/blog/say-hi-to-our-new-asset-utilities-library
 **/
export const urlForFile = (asset) => getFile(asset, config).asset.url;

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
