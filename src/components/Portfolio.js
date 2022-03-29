import React from 'react'
import { Helmet } from 'react-helmet'
import Separation from '../assets/Separation'
import '../styles/portfolio.css'

const Portfolio = () => {
    return (
        <section
            id="portfolio"
            className="w-full flex justify-center flex-col text-center mt-40"
        >
            <Separation />
            <h2 className="text-5xl font-bold mt-4 mb-10">
                My Portfolio
            </h2>
            <div className="lg:px-96">
                <p className="mb-10 lg:mb-40 lg:text-xl">
                    Dans cette section, vous
                    trouverez une partie de mes
                    projets personnels.
                </p>
            </div>
            <section className="flex justify-center w-4/5 grid grid-cols-3 gap-4 lg:gap-20 mx-auto h-96 lg:h-full">
                <a
                    href="https://domainedemontouvrin.netlify.app/"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>
                            Domaine de Montouvrin
                        </p>
                    </div>
                </a>
                <a
                    href="https://wizardly-feynman-6cec68.netlify.app/#/"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>Admin NFC Updates</p>
                    </div>
                </a>
                <a
                    href="https://testyouraim.netlify.app/"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>Test your Aim</p>
                    </div>
                </a>
                <a
                    href="https://rickandmortydbls.netlify.app/"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>Rick & Morty App</p>
                    </div>
                </a>
                <a
                    href="https://themovietracker.netlify.app/"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>Movies Tracker</p>
                    </div>
                </a>
                <a
                    href="https://github.com/Falcao1992/react-storybook"
                    target="blank"
                >
                    <div className="flex justify-center items-center w-full min-h-200 bg-site-secondary hover:bg-site-violet rounded">
                        <p>Storybook</p>
                    </div>
                </a>
            </section>
        </section>
    )
}

export default Portfolio
