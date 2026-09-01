import matter from 'gray-matter';
import { Buffer } from 'buffer';

if (!window.Buffer) {
    window.Buffer = Buffer;
}

const postFiles = import.meta.glob('/src/content/Blog/*.md', { as: 'raw', eager: true });

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
};

export function getAllPosts(): BlogPost[] {
    console.log("Loaded slugs:", Object.keys(postFiles));
    return Object.entries(postFiles).map(([filePath, fileContent]) => {
        const slug = filePath.split('/').pop()?.replace('.md', '') as string;
        const { data, content } = matter(fileContent as string);

        return {
            slug,
            title: data.title,
            date: data.date,
            summary: data.summary,
            content,
        };
    });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return getAllPosts().find((post) => post.slug === slug);
}
