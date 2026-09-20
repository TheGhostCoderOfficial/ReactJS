// import Footer from "./footer";


const Body = () => {
    return (
        <>
            <div>
                <p className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-wide cursor-default leading-tight min-h-[calc(100vh-146px)] pb-20 uppercase flex flex-col gap-4 justify-center items-center select-none">
                    <span className="relative flex opacity-0 hover:tracking-widest transition-all ease-in-out duration-500 cursor-crosshair home-hero-heading">
                        <span id="char-A" className="hover:text-blue-600 transition-colors duration-500 relative group/char">
                            A
                            <span className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-blue-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span>
                        <span id="char-m" className="hover:text-green-600 transition-colors duration-500 relative group/char">
                            m
                            <span
                                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-green-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span>
                        <span id="char-a" className="hover:text-red-600 transition-colors duration-500 relative group/char">
                            a
                            <span
                                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-red-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span>
                        <span id="char-h"
                            className="hover:text-fuchsia-600 transition-colors duration-500 relative group/char">
                            n
                            <span
                                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-fuchsia-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span>
                        {/* <span id="char-w"
                            className="hover:text-emerald-600 transition-colors duration-500 relative group/char">
                            w
                            <span
                                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-emerald-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span>
                        <span id="char-a"
                            className="hover:text-pink-600 transition-colors duration-500 relative group/char">
                            a
                            <span
                                className="absolute -top-4 sm:-top-8 left-1/2 -translate-x-1/2 text-pink-600 opacity-0 group-hover/char:opacity-100 -ml-0.5 sm:-ml-1 md:-ml-1.5 transition-all ease-in-out duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="w-8 sm:w-10 h-8 sm:h-10 traingle-rotate-with-delay">
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 20l7 -12h-14z"></path>
                                </svg>
                            </span>
                        </span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="w-6 h-6 stroke-1 absolute md:top-4 -right-4 -rotate-45 cursor-pointer opacity-50 hover:opacity-75 transition-all ease-in-out duration-500">
                            <path d="M15 8a5 5 0 0 1 0 8"></path>
                            <path d="M17.7 5a9 9 0 0 1 0 14"></path>
                            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5">
                            </path>
                        </svg>
                    </span>
                    <span className="opacity-0 hover:tracking-widest transition-all ease-in-out duration-500 home-hero-subheading"></span>
                </p>
            </div>

        </>
    )
}

export default Body
