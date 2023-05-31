import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex space-x-10 m-10 justify-center"> 
      <div className="flex flex-col -mb-10 group">
        <Link
          href="/"
          className="p-3 space-x-2 flex items-center max-w-sm mx-auto rounded-full transition-colors group-hover:border-gray-400 group-hover:bg-blue-300 group-hover:dark:border-neutral-700 group-hover:dark:bg-neutral-500/30"
        >
          <Image className="w-auto h-auto dark:invert group-hover:invert"
            src="/resume-icon.png"
            alt="Resume icon"
            width={20}
            height={20}
          />
          <p className="text-lg font-semibold group-hover:text-white">
            Resume
          </p>
        </Link>
      </div>
      <div className="flex flex-col -mb-10 group">
        <Link
          href="https://github.com/Celestine03"
          className="p-3 space-x-2 flex items-center max-w-sm mx-auto rounded-full border border-transparent transition-colors group-hover:border-gray-400 group-hover:bg-blue-300 group-hover:dark:border-neutral-700 group-hover:dark:bg-neutral-500/30"
        >
          <Image className="w-auto h-auto dark:invert group-hover:invert"
            src="/github-icon.png"
            alt="Github icon"
            width={23}
            height={23}
          />
          <p className="text-lg font-semibold group-hover:text-white">
            Github
          </p>
        </Link>
      </div>
    </div>
  )
}