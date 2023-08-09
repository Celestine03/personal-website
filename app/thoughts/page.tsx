// to read writings from file system
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';

export default function Thoughts() {
  const directory = "thoughts"

  // find all files in directory
  const files = fs.readdirSync(path.join(directory))

  const thoughts = files.map(filename => {
    // read content
    const fileContent = fs.readFileSync(path.join(directory, filename), 'utf-8')
    // extract metadata
    const { data: frontMatter} = matter(fileContent)

    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', '')
    }
  })

  const technicals = thoughts.filter(thought => thought.meta.tags == 'tech').sort((a, b) => a.meta.id - b.meta.id).reverse();
  const life = thoughts.filter(thought => thought.meta.tags == 'life').sort((a, b) => a.meta.id - b.meta.id).reverse();

  return (
    <>
      <Head>
        <title>Celestine Tan - Thoughts</title>
        <meta 
          name="description" 
          content="Articles written regarding tech and life" 
        />
        <meta
          name="keywords"
          content="Celestine Tan, Celestine Tan Yen Tong, blog, thoughts, tech, life"
        />
      </Head>
      <div className='text-center mb-10'>
        <p className='sm:text-5xl text-3xl font-bold m-10 border-b border-black dark:border-white'>
          Constantly thinking
        </p>
        <p className='text-3xl font-semivold mt-10'>Tech</p>
        <div className='grid md:grid-cols-4'>
          {technicals.map(thought => (
            <Link href={'/thoughts/' + thought.slug} passHref key={thought.slug} className='border rounded-sm p-5 h-auto flex flex-col justify-between space-y-3 m-5 border-black dark:border-white'>
              <p className='text-2xl font-sans font-bold'>{thought.meta.title}</p>
              <p className='text-md font-sans'>{thought.meta.description}</p>
              <p className='text-sm font-sans font-light'>{thought.meta.date}</p>
            </Link>
          ))}
        </div>
        <p className='text-3xl font-semivold mt-10'>Life</p>
        <div className='grid md:grid-cols-4'>
          {life.map(thought => (
            <Link href={'/thoughts/' + thought.slug} passHref key={thought.slug} className='border rounded-sm p-5 h-auto flex flex-col justify-between space-y-3 m-5 border-black dark:border-white'>
              <p className='text-2xl font-sans font-bold'>{thought.meta.title}</p>
              <p className='text-md font-sans'>{thought.meta.description}</p>
              <p className='text-sm font-sans font-light'>{thought.meta.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
