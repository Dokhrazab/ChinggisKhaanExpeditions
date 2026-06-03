// /app/sitemap.js
import { expeditions, sampleBlogs } from '../data/itinerary';

export default function sitemap() {
  const baseUrl = 'https://chinggiskhaanexpeditions.com';

  // Base routes
  const routes = ['', '/stories'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));

  // Expedition routes - expeditions is now an array
  const expeditionRoutes = expeditions.map((tour) => ({
    url: `${baseUrl}/expeditions/${tour.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Blog routes
  const blogRoutes = sampleBlogs.map((blog) => ({
    url: `${baseUrl}/stories/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...expeditionRoutes, ...blogRoutes];
}
