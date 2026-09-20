import { ArrowRight, Menu, X } from "lucide-react";

const MobNav = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden bg-zinc-700 fixed left-6 bottom-6 z-50 shadow-md w-15 h-15 rounded-full p-4">
        <button className="outline-hidden active:rotate-45 active:scale-50 active:opacity-0 ease-in-out transition-all duration-200 self-start m-auto" aria-label="Menu" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rcrifja:" data-state="closed">
          <Menu className="w-6 h-6 stroke-1 text-white self-center" />
        </button>
        <div className="flex flex-col sm:hidden bg-zinc-700 fixed left-6 bottom-6 z-50 shadow-md w-2xs h-2xs rounded-4xl p-6 will-change-auto">
          <button className="outline-hidden active:rotate-45 active:scale-50 active:opacity-0 ease-in-out transition-all duration-200 self-start mt-0 mr-0 ml-auto mb-auto will-change-auto" aria-label="Close" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rcrifja:" data-state="open">
            <X className="w-6 h-6 stroke-1 text-white self-center" />
          </button>
          <div className="text-white text-xl my-10 flex flex-col gap-6 items-center">
            <button className="mobile-menu-label" aria-label="Home">Home</button>
            <button className="mobile-menu-label" aria-label="Projects">Projects</button>
            <button className="mobile-menu-label" aria-label="Experience">Experience</button>
            <button className="mobile-menu-label" aria-label="Contact">Contact</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-6 sm:hidden rounded-full p-2 justify-between items-center font-medium text-sm text-white z-30">
        <button className="whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 py-2 h-full bg-black rounded-full flex justify-center items-center px-4 gap-1 group bg-opacity-50 hover:bg-opacity-90 transition-all ease-in-out ring-1 hover:ring-transparent ring-[#262626] cursor-pointer" aria-label="Let&#x27;s Talk" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rcrifja:" data-state="closed">
          Let&#x27;s talk <ArrowRight className="stroke-1 group-hover:translate-x-0.5 transition-all ease-in-out duration-00" />
        </button>
      </div>
    </>
  )
}

export default MobNav