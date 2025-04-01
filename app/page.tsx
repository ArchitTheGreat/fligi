import { Metadata } from "next"
import { Button } from "components/Button/Button"

import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Fligi",
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-6 max-w-2xl font-light text-purple-500 md:text-lg lg:mb-8 lg:text-5xl dark:text-gray-400">
              Fligi
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              An open source flip clock made in HTML based on Fliqlo avaliable in web and more platforms to come... :)
            </p>
            <Button href="/fligi.html" className="mr-3">
              Go to Fligi
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 align-bottom">
      <footer className="bg-white dark:bg-gray-900 ">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Fligi</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                
                <li className="mb-4">
                    <a href="https://github.com/ArchitTheGreat/fligi/tree/main/public" className="hover:underline">Repo</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Me</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="https://architbhunia.netlify.app/" className="hover:underline">My Portofolio</a>
                </li>
                
            </ul>
        </div>
        
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Coming Soon... :)</a>
                </li>
                
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 <a href="https://architbhunia.netlify.app/">Archit Bhunia</a>. All Rights Reserved.
        </span>
        
      </div>
    </div>
</footer>
      </section>
    </>
  )
}
