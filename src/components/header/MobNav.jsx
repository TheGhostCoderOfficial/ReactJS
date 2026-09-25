import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const MobNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = ["Home", "Projects", "Experience", "Contact"];

  return (
    <>
      {!isOpen && (
        <div className="flex flex-col sm:hidden bg-zinc-700 fixed left-6 bottom-6 z-50 shadow-md w-15 h-15 rounded-full p-4 justify-center hover:bg-zinc-600 items-center">
          <button type="button" className="outline-hidden active:rotate-90 active:scale-50 transition-all duration-200 cursor-pointer" onClick={() => setIsOpen(true)} aria-label="Open menu" aria-haspopup="dialog" aria-expanded={false}>
            <Menu className="w-6 h-6 stroke-1 text-white self-center" />
          </button>
        </div>
      )}

      {isOpen && (
        <div ref={menuRef} className="sm:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

          <div className="flex flex-col justify-between bg-zinc-800 left-6 bottom-6 shadow-md w-[calc(100vw-3rem)] rounded-4xl p-4 absolute max-w-3xs">
            <div className="hover:bg-zinc-700 items-center rounded-full self-end h-10">
              <button type="button" className="self-end mb-4 p-2 rounded-full ml-auto block outline-hidden active:rotate-45 active:scale-50 duration-200 ease-in-out transition-all cursor-pointer" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 stroke-1 text-white self-center" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-2">
              {navLinks.map((label) => (
                <button key={label} type="button" className="text-white text-lg text-center py-2 px-3 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer" onClick={() => setIsOpen(false)}>
                  <a href={`#${label.toLowerCase()}`} className="block">
                    {label}
                  </a>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
      
      <div className="fixed bottom-8 right-6 sm:hidden z-30">
        <button className="whitespace-nowrap text-sm font-medium bg-black/50 hover:bg-black/90 text-white py-2 px-4 rounded-full flex justify-center items-center gap-1 ring-1 ring-[#262626] hover:ring-transparent transition-all ease-in-out cursor-pointer ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-full group bg-opacity-10 hover:bg-opacity-90 " aria-label="Let&#x27;s Talk" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rcrifja:" data-state="closed">
          Let&apos;s talk <ArrowRight className="stroke-1 group-hover:translate-x-0.5 transition-all ease-in-out duration-200" />
        </button>
      </div>
    </>
  );
};

export default MobNav;