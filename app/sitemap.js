import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap() {
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

  const URL = "https://celestinetan.vercel.app";

  const posts = thoughts.map((thought) => ({
    url: `${URL}/thoughts/${thought.slug}`,
    lastModified: new Date().toISOString(),
  }));
 
  const routes = ["", "/thoughts"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}
