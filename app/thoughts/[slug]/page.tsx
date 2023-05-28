import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';

// statically generate routes at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('thoughts'));

  const paths = files.map(filename => {
    slug: filename.replace('.mdx', '');
  })

  return paths;
}

// fetch
function getPost({slug}:{slug: string}) {
  const markdownFile = fs.readFileSync(path.join('thoughts', slug + '.mdx'), 'utf-8');

  const {data: frontMatter, content} = matter(markdownFile);

  return {frontMatter, slug, content}
}

// display
export default function Post({params}: any) {
  const props = getPost(params);

  return (
    <article className='dark:text-white prose dark:prose-blockquote:text-white dark:prose-h1:text-white dark:prose-a:text-white prose-h1:pt-10 flex flex-col my-10 md:mx-60 mx:40 space-y-5'>
      <p className='text-5xl font-serif font-bold mb-3 border-b dark:border-white border-black'> {props.frontMatter.title}</p>
      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={props.content}/>
    </article>
  )
}

export async function generateMetadata({params} : any) {
  const thought = getPost(params);

  return {
    title: thought.frontMatter.title,  
    description: thought.frontMatter.description,      
  }
}