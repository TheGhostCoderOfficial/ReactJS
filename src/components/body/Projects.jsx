import styles from './project.module.css'


const Projects = () => {

    const arr = [
        {
            user: "Aman",
            img: "https://images.unsplash.com/photo-1786130567116-dce28e7fb1d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            user: "Gaurav",
            img: "https://images.unsplash.com/photo-1771838026270-28fd7e3bef1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww"
        },
        {
            user: "Abhi",
            img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            user: "Rohan",
            img: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            user: "Saroj",
            img: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        }
    ];

    return (
        <>
            {/* <div className="projects">
                <div className="container text-center text-5xl sm:text-7xl xl:text-8xl z-1">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <span className="nav-a">
                                <span className="nav-a-letters">
                                    <span className="nav-a-letter">P</span>
                                    <span className="nav-a-letter">r</span>
                                    <span className="nav-a-letter">o</span>
                                    <span className="nav-a-letter">j</span>
                                    <span className="nav-a-letter">e</span>
                                    <span className="nav-a-letter">c</span>
                                    <span className="nav-a-letter">t</span>
                                    <span className="nav-a-letter">s</span>
                                </span>
                                <span className="nav-a-stripe nav-a-stripe--yellow"></span>
                                <span className="nav-a-stripe nav-a-stripe--turquoise"></span>
                                <span className="nav-a-stripe nav-a-stripe--purple"></span>
                                <span className="nav-a-letters-top">
                                    <span className="nav-a-letter">P</span>
                                    <span className="nav-a-letter">r</span>
                                    <span className="nav-a-letter">o</span>
                                    <span className="nav-a-letter">j</span>
                                    <span className="nav-a-letter">e</span>
                                    <span className="nav-a-letter">c</span>
                                    <span className="nav-a-letter">t</span>
                                    <span className="nav-a-letter">s</span>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div> */}

            <div className='flex flex-wrap gap-10 justify-center'>
                {/* <button className="bg-[#ffffff08] border-1 p-6 rounded-2xl transition-[0.3s] backdrop-blur-xs hover:-transform-5 hover:border-[#00ffcc] hover: shadow-lg">
                    <a className="" href="PuterSite\index.html" target="_blank" rel="noopener noreferrer"><strong className="text-white block mb-2.5">PuterSite</strong></a>
                </button> */}

                {arr.map(function (elem, id) {
                    return <div className={styles.card} key={id}>
                        <img src={elem.img} alt="" />
                        <h1 className={styles.name}>{elem.user}</h1>
                        <p className={styles.para}>The quick brown fox jumps over the lazy dog.</p>
                    </div>
                })}




            </div>
        </>
    )
}

export default Projects