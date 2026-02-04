import { createClient } from 'contentful';

// These should be set in your environment variables
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID || '';
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '';

export const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const getBlogPostById = async (id: string) => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': id,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getCaseStudies = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'caseStudy',
      order: ['-sys.createdAt'],
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};