import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coincashy.io';

  const routes = [
    '',
    '/about',
    '/aml',
    '/careers',
    '/complaints',
    '/compliance',
    '/contact',
    '/cookies',
    '/developers',
    '/help',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/fees',
    '/status'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
