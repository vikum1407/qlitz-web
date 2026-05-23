import fs from 'fs';
import path from 'path';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: number;
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

function extract(content: string, key: string): string {
  const m = content.match(new RegExp(`${key}:\\s*["'\`]([^"'\`\\n]+)["'\`]`));
  return m?.[1] ?? '';
}

function estimateReadTime(content: string): number {
  const body = content.replace(/export const meta[\s\S]*?\}/, '');
  const words = body.replace(/[#*`_[\]()!]/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx'));
  return files
    .map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      return {
        slug,
        title: extract(content, 'title'),
        date: extract(content, 'date'),
        description: extract(content, 'description'),
        readTime: estimateReadTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
