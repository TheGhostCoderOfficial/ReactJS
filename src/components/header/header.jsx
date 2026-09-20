import Datetime from './Datime';

const Header = () => {
    return (
        <>
            <nav id="home" className="flex justify-between p-4 items-baseline sm:px-16 sm:py-12 w-full">
                <div className="flex items-baseline group cursor-default gap-2 relative">
                    <p className="text-3xl sm:text-5xl group-hover:scale-90 transition-all ease-in-out duration-300 group-hover:rotate-12">👋</p>
                    <div className="text-2xl font-bold tracking-wider text-[#FBC138] group-hover:tracking-widest transition-all ease-in-out duration-300 hidden sm:flex">
                        Hello
                        <p className="w-0 overflow-hidden group-hover:w-43 transition-all ease-in-out duration-300">oooooooooo</p>!
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex gap-4">
                        <a data-state="closed">
                            <button className="play-button w-6 h-6 outline-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="w-6 h-6 stroke-1">
                                    <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path d="M9 17v-13h10v9"></path>
                                    <path d="M9 8h10"></path>
                                    <path d="M17 17v5"></path>
                                    <path d="M21 17v5"></path>
                                </svg>
                            </button>
                        </a>
                        <a href="https://github.com/TheGhostCoderOfficial" target="_blank" rel="noopener noreferrer" className="group/social" aria-label="Aman&#x27;s GitHub account">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="w-6 h-6 stroke-1">
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                </path>
                            </svg>
                            <svg xmlns="https://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-scribble absolute hidden group-hover/social:block"
                                width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5"
                                    fill="none" strokeWidth="1" strokeDasharray="0px 1px" pathLength="1"
                                    strokeDashoffset="0px"></path>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/eramankumar/" target="_blank" rel="noopener noreferrer"
                            className="group/social" aria-label="Aman&#x27;s LinkedIn account">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="w-6 h-6 stroke-1">
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                                </path>
                                <path d="M8 11l0 5"></path>
                                <path d="M8 8l0 .01"></path>
                                <path d="M12 16l0 -5"></path>
                                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                            </svg>
                            <svg xmlns="https://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-scribble absolute hidden group-hover/social:block" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5" fill="none" strokeWidth="1" strokeDasharray="0px 1px" pathLength="1" strokeDashoffset="0px"></path>
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="group/social" aria-label="Aman&#x27;s WhatsApp channel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="w-6 h-6 stroke-1">
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1">
                                </path>
                            </svg>
                            <svg xmlns="https://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-scribble absolute hidden group-hover/social:block"
                                width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5" fill="none" strokeWidth="1" strokeDasharray="0px 1px" pathLength="1"
                                    strokeDashoffset="0px"></path>
                            </svg>
                        </a>
                    </div>
                    <Datetime />
                </div>
                <audio src="#" id="radio"></audio>
            </nav>
        </>
    )
}

export default Header