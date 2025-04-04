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
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Sorry, but if you use linux or macOS, you'll have to use Fligi from the browser you want over the internet.
            </p>
          <Button href="/fligi Setup 1.0.0.exe" className="mr-3">
              Download for Windows
            </Button>
            <br></br><br></br>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              To full screen Fligi, press F11 key on your keyboard.
            </p>
          </div>
        </div>
      </section>

      
    </>
  )
}
