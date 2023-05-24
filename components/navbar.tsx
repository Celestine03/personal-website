import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-300 dark:bg-slate-800 p-5 sticky top-0 z-10">
      <div className="prose lg:prose-xl flex flex-row sm:flex-auto space-x-4 justify-end">
        <Link href="" className="">
          <p className="flex text-xl font-semibold px-4 rounded-full border border-transparent item-center transition-colors hover:border-gray-400 hover:bg-white hover:text-blue-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-500/30 hover:dark:text-white">
            Home
          </p>
        </Link>
        <Link href="" className="">
          <p className="flex text-xl font-semibold px-4 rounded-full border border-transparent item-center transition-colors hover:border-gray-400 hover:bg-white hover:text-blue-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-500/30 hover:dark:text-white">
            Thoughts
          </p>
        </Link>
      </div>
    </nav>
  )
}