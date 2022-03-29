import React from 'react'
import { Helmet } from 'react-helmet'
import InfiniteIcon from '../assets/infiniteIcon.webp'

const Stats = ({ yfdhc }) => {
    return (
        // <div className="flex flex-rows justify-around mt-40 mx-20">
        <section className="grid grid-cols-2 text-center mt-10 lg:mt-40 lg:mx-56 lg:grid-cols-4">
            <div className="py-28 border-2 border-dashed border-white rounded-md flex flex-col items-center bg-site-secondary m-4">
                <p className="font-bold text-lg lg:text-6xl">
                    03+
                </p>
                <p className="text-xl lg:text-4xl">
                    Clients
                </p>
            </div>
            <div className=" py-28 rounded-md flex flex-col items-center bg-site-violet m-4">
                <p className="font-bold lg:text-6xl">
                    20
                </p>
                <p className="lg:text-4xl">
                    Projects
                </p>
            </div>
            <div className=" py-28 border-2 border-dashed border-gray-50 rounded-md flex flex-col items-center bg-site-secondary m-4">
                <img
                    className="w-auto h-auto"
                    src={InfiniteIcon}
                    alt="passionate icon on dylan belouis développeur website"
                />
                <p className="lg:text-4xl">
                    Passionate
                </p>
            </div>
            <div className=" py-28 border-2 border-dashed border-white rounded-md flex flex-col items-center bg-site-secondary m-4">
                <p className="font-bold text-lg lg:text-6xl">
                    03
                </p>
                <p className="text-xl lg:text-4xl">
                    Years Experience
                </p>
            </div>
        </section>
    )
}

export default Stats
