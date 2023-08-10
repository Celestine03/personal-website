import Link from "next/link"
import {useTheme} from "next-themes";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Navbar() {

  const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) {
      return null
    }

    return (
      <Image className=""
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
    <nav className="bg-slate-1 dark:bg-slate-3 p-3 sticky top-0 z-10">
      <div className="flex flex-row m-3 sm:space-x-4 space-x-2 justify-end">
        <Link href="/">
          <p className="flex sm:text-xl text-lg font-semibold px-4 rounded-full item-center transition-colors dark:text-white hover:bg-white hover:text-slate-1 hover:dark:bg-gray-1 hover:dark:text-white">
            Home
          </p>
        </Link>
        <Link href="/thoughts">
          <p className="flex sm:text-xl text-lg font-semibold px-4 rounded-full item-center transition-colors dark:text-white hover:bg-white hover:text-slate-1 hover:dark:bg-gray-1 hover:dark:text-white">
            Thoughts
          </p>
        </Link>
        {ThemeSwitch()}
      </div>
    </nav>
  )
}