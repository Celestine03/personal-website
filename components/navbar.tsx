import Link from "next/link"
import {useTheme} from "next-themes";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Navbar() {

  const themeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {
      return null
    }

    return (
      <Image className="mx-20 h-auto w-auto"
        role="button"
        onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}
        src={theme === "dark" ? "/sun-icon.png" : "/moon-icon.png"}
        alt={theme === "dark" ? "sun icon" : "moon icon"}
        width={25}
        height={10}
      />
    )
  }

  return (
    <nav className="bg-blue-300 dark:bg-slate-800 p-5 sticky top-0 z-10">
      <div className="prose lg:prose-xl flex flex-row sm:flex-auto space-x-4 justify-end">
        <Link href="">
          <p className="flex text-xl font-semibold px-4 rounded-full border border-transparent item-center transition-colors hover:border-gray-400 hover:bg-white hover:text-blue-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-500/30 hover:dark:text-white">
            Home
          </p>
        </Link>
        <Link href="">
          <p className="flex text-xl font-semibold px-4 rounded-full border border-transparent item-center transition-colors hover:border-gray-400 hover:bg-white hover:text-blue-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-500/30 hover:dark:text-white">
            Thoughts
          </p>
        </Link>
        {themeSwitch()}
      </div>
    </nav>
  )
}