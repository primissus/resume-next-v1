import fs from 'fs';
import { join } from 'path';

const postsDir = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug: string, locale: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDir, locale, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    return fileContents;
}

