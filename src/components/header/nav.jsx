import { ArrowRight, House } from 'lucide-react';
import MobNav from './MobNav';


const Nav = () => {

  const navLinks = ["Home", "Projects", "Experience", "Contact"];

  return (
    <>

      <div className="hidden fixed bottom-6 h-16 w-full max-w-2xl rounded-full p-2 sm:flex justify-between items-center font-medium bg-[#3d3838] text-sm text-white z-30">
        <button aria-label="Home" className="rounded-full h-full w-12 p-2 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer">
          <a href="#home" className="h-full w-full flex items-center justify-center"><House /></a>
        </button>

        <div className="flex flex-row gap-2 h-full">
          <button className="h-full rounded-full w-24 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer" aria-label="Projects"><a href="#projects" className="h-full w-full flex items-center justify-center">Projects</a></button>
          <button className="h-full rounded-full w-30 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer" aria-label="Experience"><a href="#experience">Experience</a></button>
          <button className="h-full rounded-full w-32 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer" aria-label="Testimonials"><a href="#testimonials">Testimonials</a></button>
          <button className="h-full rounded-full w-24 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer" aria-label="Contact"><a href="#contact">Contact</a></button>
          {/* {navLinks.map((label) => (
            <button key={label} type="button" className="h-full rounded-full w-24 hover:bg-black/20 transition-all ease-in-out duration-500 cursor-pointer" onClick={() => setIsOpen(false)}>
              <a href={`#${label.toLowerCase()}`} className="block">
                {label}
              </a>
            </button>
          ))} */}
        </div>
        <button className="whitespace-nowrap text-sm font-medium bg-black/50 hover:bg-black/90 text-white py-2 px-4 rounded-full flex justify-center items-center gap-1 ring-1 ring-[#262626] hover:ring-transparent transition-all ease-in-out cursor-pointer ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-full group bg-opacity-10 hover:bg-opacity-90 " aria-label="Let&#x27;s Talk" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rcrifja:" data-state="closed">
          Let&apos;s talk <ArrowRight className="stroke-1 group-hover:translate-x-0.5 transition-all ease-in-out duration-200" />
        </button>
      </div>
      <MobNav />
    </>
  )
}

export default Nav