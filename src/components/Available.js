import React from 'react'
import { Helmet } from 'react-helmet'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Fond from '../assets/fond.webp'

const Available = () => {
    return (
        <div className="w-full h-full relative mt-36 mb-36">
            <section className="w-full h-3/6 relative">
                <img
                    className="w-full h-96 lg:h-fond block relative opacity-50"
                    src={Fond}
                    alt="background for dylan belouis website portfolio"
                />
                <div
                    style={{
                        top: '50%',
                        left: '50%',
                        transform:
                            'translate(-50%, -50%)',
                    }}
                    className="absolute w-full h-3/4  lg:py-auto text-center flex flex-col justify-center items-center"
                >
                    <p className="text-xl lg:text-2xl">
                        Vous avez un projet en
                        tête ?
                    </p>
                    <p className="text-2xl lg:text-4xl font-bold mx-6 mt-5 mb-5 lg:mb-0">
                        Je suis disponible pour
                        tout vos projets
                    </p>
                    <div
                        onClick={() =>
                            scrollTo('#contact')
                        }
                        className="bg-gradient-to-r from-green-400 to-blue-500 w-60 flex justify-center items-center rounded-xl  lg:mt-16 lg:mb-40 cursor-pointer"
                    >
                        <p className="text-xl py-6">
                            Travaillons ensemble
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Available
