import React from 'react'
import { Helmet } from 'react-helmet'
import Dylan from '../assets/dylan_about.webp'
import scrollTo from 'gatsby-plugin-smoothscroll'

const About = () => {
    return (
        <section
            id="about"
            className="mx-40 my-5 mt-40 lg:mt-40 flex flex-row justify-around"
        >
            <div className="hidden lg:flex min-w-1/2">
                <img
                    className="h-auto w-full opacity-60"
                    src={Dylan}
                    alt="dylan belouis"
                />
                <></>
            </div>
            <div className="lg:pl-10 w-screen lg:min-w-1/2">
                <div className="flex justify-center relative w-full text-center lg:text-left">
                    <div className="absolute lg:relative w-full min-h-full">
                        <h2 className="relative min-h-full lg:max-w-md text-4xl lg:text-6xl font-bold lg:mb-12">
                            Qui est ce ?
                        </h2>
                    </div>
                    <img
                        className="min-h-about mt-28 lg:mt-12 lg:hidden h-auto w-full"
                        src={Dylan}
                        alt="dylan belouis web developper"
                    />
                </div>
                <p className="text-l lg:max-w-lg lg:leading-8 lg:text-xl mt-6 lg:mt-0 mb-16 mx-10 lg:mx-0">
                    Salut, moi c&apos;est Dylan,
                    24 ans et passionné de
                    technologies web !
                    D&apos;abord autodidacte,
                    j&apos;ai ensuite suivi une
                    formation de développeur web
                    et mobile à la wild code
                    school de Tours. Maintenant je
                    suis développeur fullstack, et
                    freelance. On travaille
                    ensemble ?
                </p>
                <p className="text-l lg:text-xl mt-2 lg:mt-0 mb-6 mx-10 lg:mx-0">
                    Soft-Skills :
                </p>
                <p className="text-l lg:text-xl mb-16 mx-10 lg:mx-0">
                    #Professionel #Passionnée
                    #Autonome #Heureux #CodeAddict
                    #Sociable
                </p>
                <p className="text-l lg:text-xl mt-6 lg:mt-0 mb-6 mx-4 lg:mx-0">
                    Orientation de mon profil :
                </p>
                <p className="mb-6 ml-4 lg:ml-0">
                    FrontEnd 65%
                </p>
                <div className="relative pt-1 mb-16 mx-4 lg:mx-0">
                    <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-700">
                        <div className="shadow-none w-full mr-thirty_five flex flex-col text-center whitespace-nowrap text-white justify-center bg-site-violet"></div>
                    </div>
                </div>
                <h6 className="mb-6 ml-4 lg:ml-0">
                    BackEnd et Bases de données
                    35%
                </h6>
                <div className="relative pt-1 mb-16 mx-4 lg:mx-0">
                    <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-gray-700">
                        <div className="shadow-none w-full mr-sixty_five flex flex-col text-center whitespace-nowrap text-white justify-center bg-site-violet"></div>
                    </div>
                </div>
                <div className="mx-4 flex justify-row lg:mx-0">
                    <div
                        onClick={() =>
                            scrollTo('#services')
                        }
                        className="rounded-md mr-6 bg-site-violet py-6 w-60 item-center text-center cursor-pointer"
                    >
                        <p>En savoir plus</p>
                    </div>
                    <div
                        onClick={() =>
                            scrollTo('#form')
                        }
                        className="rounded-md border-white border-2 py-6 w-60 item-center text-center cursor-pointer"
                    >
                        <p>Embauchez moi</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
