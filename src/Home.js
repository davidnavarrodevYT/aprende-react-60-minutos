import React from 'react'
import "./home.css"


function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <h1>David <strong>Navarro</strong></h1>
            </div>
            <div className="home__subBanner">
                <p>Programador | Youtuber | Inútil</p>
            </div>
            <div className="home__content" id="proyectos">

                <div className="home__content__title">
                    <h2>Proyectos</h2>
                </div>

                <div className="home__content__clusters">
                    <div>
                        <a href="">
                            <h3>Proyecto 1</h3>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <h3>Proyecto 2</h3>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <h3>Proyecto 3</h3>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <h3>Proyecto 4</h3>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <h3>Proyecto 5</h3>
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <h3>Proyecto 6</h3>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home
