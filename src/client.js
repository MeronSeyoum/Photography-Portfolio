import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    //projectId: 'h5hl0ma5',
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    // token: 'sk71Gf86eNs89NFNopdPkCNvkVK4xm3ThNjbSSv4vBqkyq7pr0AlkK7g7800SxIU6LLo9WtBR93CTy0uSOU8fRvcoGQjI9algWcvOH632NNtUFssKu9xerGpLRzaTYHarZ3i9WvQQkdseGHjbk9qE5cUz8k4hh41tUsEI8dgJ26eDyw07AFp',
    token: process.env.REACT_APP_SANITY_TOKEN,
    useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);