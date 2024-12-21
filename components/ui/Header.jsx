import Link from "next/link"
import {Button} from "./button"
import MobileNav from "./MobileNav"
//components
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container max-auto flex justify-between items-center">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            FranDev <span className="text-accent">.</span>
        </h1>
        </Link>
        {/* desktop nav & hire me button*/ }
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
              <Button>Contactame</Button>
            </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav/>
        </div>


      </div>
    </header>
  )
}

export default Header
