// to read writings from file system
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

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
    <div className='text-center'>
      <p className='text-5xl font-bold m-10 border-b border-black dark:border-white'>
        Constantly thinking
      </p>
      <p className='text-3xl font-semivold mt-10'>Tech</p>
      <div className='flex flex-row justify-center space-x-10 m-5'>
        {technicals.map(thought => (
          <Link href={'/thoughts/' + thought.slug} passHref key={thought.slug} className='border rounded-sm p-5 lg:w-1/5 w-1/3 h-auto flex flex-col justify-between space-y-3 m-5 border-black dark:border-white'>
            <p className='text-2xl font-sans font-bold'>{thought.meta.title}</p>
            <p className='text-md font-sans'>{thought.meta.description}</p>
            <p className='text-sm font-sans font-light'>{thought.meta.date}</p>
          </Link>
        ))}
      </div>
      <p className='text-3xl font-semivold mt-10'>Life</p>
      <div className='flex flex-row justify-center space-x-10 m-5'>
        {life.map(thought => (
          <Link href={'/thoughts/' + thought.slug} passHref key={thought.slug} className='border rounded-sm p-5 lg:w-1/5 w-1/3 h-auto flex flex-col justify-between space-y-3 m-5 border-black dark:border-white'>
            <p className='text-2xl font-sans font-bold'>{thought.meta.title}</p>
            <p className='text-md font-sans'>{thought.meta.description}</p>
            <p className='text-sm font-sans font-light'>{thought.meta.date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
