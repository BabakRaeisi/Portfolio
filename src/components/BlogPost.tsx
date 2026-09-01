import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`/blog/${slug}.md`)
            .then(res => res.text())
            .then(setContent)
            .catch(() => setContent('# 404\nPost not found.'));
    }, [slug]);

    return (
        <main className="prose prose-invert max-w-3xl mx-auto py-12 font-mono">
            <ReactMarkdown>{content}</ReactMarkdown>
        </main>
    );
};

export default BlogPost;
