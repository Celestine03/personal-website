import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// statically generate routes at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'thoughts'));

  const paths = files.map(filename => 
    filename.replace('.mdx', '')
  )

  return paths;
}

// fetch
function getPost({slug}:{slug: string}) {
  const markdownFile = fs.readFileSync(path.join(process.cwd(), 'thoughts', slug + '.mdx'), 'utf-8');

  const {data: frontMatter, content} = matter(markdownFile);

  return {frontMatter, slug, content}
}

// display
export default function Post({params}: any) {
  const props = getPost(params);

  return (
    <>
      <Head>
        <title>{props.frontMatter.title}</title>
        <meta 
          name="description" 
          content={props.content}
        />
        <meta 
          name="keywords" 
          content={props.frontMatter.title}
        />
      </Head>
      <article className='dark:text-white prose dark:prose-blockquote:text-white dark:prose-h1:text-white dark:prose-a:text-white prose-h1:pt-10 flex flex-col my-10 lg:mx-60 mx-10 space-y-5'>
        <Link href="/thoughts" className="p-3 rounded-full hover:bg-slate-500 self-start">
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
        <p className='text-5xl font-serif font-bold mb-3 border-b dark:border-white border-black'>{props.frontMatter.title}</p>
        {/* @ts-expect-error Server Component*/}
        <MDXRemote source={props.content}/>
      </article>
    </>
  )
}

export async function generateMetadata({params} : any) {
  const thought = getPost(params);

  return {
    title: thought.frontMatter.title,  
    description: thought.frontMatter.description,      
  }
}