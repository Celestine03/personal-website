import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex sm:flex-row flex-col sm:space-x-10 sm:space-y-0 space-y-10 m-10 justify-center"> 
      <div className="flex flex-col -mb-10 group">
        <Link
          href="/"
          className="p-3 space-x-2 flex items-center max-w-sm mx-auto rounded-full transition-colors border border-transparent group-hover:border-gray-2 group-hover:bg-slate-1 group-hover:dark:border-gray-3 group-hover:dark:bg-gray-1"
        >
          <Image className="w-auto h-auto dark:invert group-hover:invert"
            src="/resume-icon.png"
            alt="Resume icon"
            width={20}
            height={20}
          />
          <p className="sm:text-lg text-base font-semibold group-hover:text-white">
            Resume
          </p>
        </Link>
      </div>
      <div className="flex flex-col -mb-10 group">
        <Link
          href="https://github.com/CelestineTan03"
          className="p-3 space-x-2 flex items-center max-w-sm mx-auto rounded-full border border-transparent transition-colors group-hover:border-gray-2 group-hover:bg-slate-1 group-hover:dark:border-gray-3 group-hover:dark:bg-gray-1"
        >
          <Image className="w-auto h-auto dark:invert group-hover:invert"
            src="/github-icon.png"
            alt="Github icon"
            width={23}
            height={23}
          />
          <p className="sm:text-lg text-base font-semibold group-hover:text-white">
            Github
          </p>
        </Link>
      </div>
    </div>
  )
}