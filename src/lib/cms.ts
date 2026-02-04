import { createClient } from 'contentful';

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Only initialize if credentials exist to avoid "Expected parameter accessToken" error
export const client = SPACE_ID && ACCESS_TOKEN 
  ? createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    })
  : null;

export const getBlogPosts = async () => {
  if (!client) {
    console.warn('Contentful credentials missing. Using mock data.');
    return [];
  }
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

export const getBlogPostById = async (slug: string) => {
  if (!client) return null;
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

export const getCaseStudies = async () => {
  if (!client) return [];
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

export const getCaseStudyById = async (slug: string) => {
  if (!client) return null;
  try {
    const response = await client.getEntries({
      content_type: 'caseStudy',
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
};