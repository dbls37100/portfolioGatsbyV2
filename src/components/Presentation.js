import React from 'react'
import '../styles/global.css'
import { Helmet } from 'react-helmet'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Cv from '../assets/cvDylanBelouis.pdf'
import Dylan from '../assets/dylan.webp'

const Presentation = () => {
    return (
        <section
            id="presentation"
            className="relative lg:mt-20 lg:pt-20 bg-opacity-25 h-full section"
        >
            <div className="flex lg:hidden opacity-50 z-0 h-full w-full presentation_image"></div>
            <div className="top-0 h-full absolute flex flex-col justify-center z-10 opacity-100 mx-10 lg:mx-0 lg:ml-40 mb-6 lg:mb-0 mt-10 bg-transparent">
                <div className="my-8 w-36 h-12 bg-site-violet flex justify-center items-center">
                    <p className="text-xl">
                        Hello, I am
                    </p>
                </div>
                <h2 className="lg:my-8 text-xl lg:text-7xl font-bold text-white">
                    Mr. Dylan Belouis
                </h2>
                <p className="my-8 text-xl max-w-3/4">
                    A Professional FrontEnd,
                    BackEnd and Database
                    Developer.
                </p>
                <div className="flex justify-row">
                    <div className="opacity-100 rounded-md mr-6 bg-site-violet py-6 px-6 lg:w-60 item-center text-center cursor-pointer">
                        <a href={Cv} download>
                            Download CV
                        </a>
                    </div>
                    <div
                        onClick={() =>
                            scrollTo('#about')
                        }
                        className="rounded-md border-white border-2 py-6 px-6 lg:w-60 item-center text-center cursor-pointer"
                    >
                        <p>Qui suis-je</p>
                    </div>
                </div>
            </div>
            <div className="relative z-0 w-full h-presentation_mobile lg:h-full lg:w-full flex justify-end ml-auto opacity-40">
                <img
                    className="hidden lg:flex relative lg:w-1/2  w-presentation_mobile lg:h-full"
                    src={Dylan}
                    alt="dylan belouis developper"
                />
            </div>
        </section>
    )
}

export default Presentation
