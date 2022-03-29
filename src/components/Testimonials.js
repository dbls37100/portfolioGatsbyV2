import React from 'react'
import { Helmet } from 'react-helmet'
import Separation from '../assets/Separation'
import ImageDamien from '../assets/damien.webp'

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="w-full flex justify-center flex-col text-center mt-40 mb-10"
        >
            <Separation />
            <div className="p-4 text-center leading-8">
                <h2 className="text-5xl font-bold mb-6">
                    Testimonials
                </h2>
                <p className="lg:text-xl lg:px-40">
                    Retrouvez les avis de mes
                    anciens employeurs, CTO et
                    collegues avec qui j&apos;ai
                    eu plaisir de travailler.
                </p>
            </div>
            <div className="bg-site-secondary w-2/3 relative pt-20 lg:pt-40 mx-auto mt-20 lg:mt-64">
                <img
                    style={{
                        transform:
                            'translate(-50%, -50%)',
                        top: '-10%',
                        left: '50%',
                    }}
                    className="rounded-full relative lg:absolute h-auto w-28 lg:w-60"
                    src={ImageDamien}
                    alt="testimonials on dylan belouis developper portfolio"
                />
                <p className="text-secondary text-xl font-bold">
                    Damien Autrusseau
                </p>
                <p>CTO Surviving Data</p>
                <p className="mt-7 text-left ml-6 lg:ml-20 text-4xl text-lightGray">
                    &quot;
                </p>
                <p className="mx-4 lg:mx-20">
                    Dylan a su relever les défis
                    qu&apos;on lui avait confié
                    avec une grande motivation, il
                    a fait preuve d&apos;une
                    détermination et d&apos;une
                    passion sans faille pour les
                    technologies du web, il est un
                    atout certain pour
                    l&apos;innovation
                    technologique
                </p>
                <p className="mb-10 lg:mb-24 text-right mr-6 lg:mr-60 text-4xl text-lightGray">
                    &quot;
                </p>
            </div>
        </section>
    )
}

export default Testimonials
