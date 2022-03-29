import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './style.css'
import Separation from '../../assets/Separation'
import Arrow from '../../assets/right-arrow.webp'
import Stack from './Stack'
import StacksData from './data'
import ImageProvider from './ImageProvider'

const Services = () => {
    const [
        stackObjectSelected,
        setStackObjectSelected,
    ] = useState('allStacks')

    const stackObject =
        StacksData[stackObjectSelected]

    const [
        visibleStackDetail,
        setVisibleStackDetail,
    ] = useState(false)

    const [stackSelected, setStackSelected] =
        useState('')

    const setTransitionDetailStack =
        stackSelected => {
            setVisibleStackDetail(true)
            setStackSelected(stackSelected)
        }

    const setFilter = stackSelected => {
        setVisibleStackDetail(false)
        setStackObjectSelected(stackSelected)
    }

    useEffect(() => {}, [stackObjectSelected])

    return (
        <section
            id="services"
            className="w-full min-h-screen flex justify-center flex-col text-center mt-40"
        >
            <Separation />
            <div className="p-4 text-center leading-8">
                <h2 className="text-5xl font-bold mb-6">
                    Mes Services
                </h2>
                <p className="lg:px-40">
                    Découvez ici les principaux
                    outils qui
                    m&apos;accompagneront dans le
                    développement de votre projet.
                    Cliquez plus bas pour afficher
                    toutes les compétences.
                </p>
            </div>
            <div className="w-full flex flex-row justify-center pb-3 mb-4 lg:mb-0">
                <p
                    onClick={() =>
                        setFilter(
                            'allStackFrontDesktop'
                        )
                    }
                    className={
                        stackObjectSelected ===
                        'allStackFrontDesktop'
                            ? 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer hover:text-purple-700 lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer hover:text-purple-700 lg:text-sm'
                    }
                >
                    Front
                </p>
                <p
                    onClick={() =>
                        setFilter('allStackStyle')
                    }
                    className={
                        stackObjectSelected ===
                        'allStackStyle'
                            ? 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    Style
                </p>
                <p
                    onClick={() =>
                        setFilter('allStackFront')
                    }
                    className={
                        stackObjectSelected ===
                        'allStackFront'
                            ? 'flex lg:hidden p-2 lg:p-4 text-xs cursor-pointer lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'flex lg:hidden p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    Front
                </p>
                <p
                    onClick={() =>
                        setFilter('allStacks')
                    }
                    className={
                        stackObjectSelected ==
                        'allStacks'
                            ? 'p-2 lg:p-4 text-xs cursor-pointer text-purple-700 lg:text-sm  border-b-2 border-solid border-purple-700'
                            : 'p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    Tous
                </p>
                <p
                    onClick={() =>
                        setFilter('allStackBack')
                    }
                    className={
                        stackObjectSelected ===
                        'allStackBack'
                            ? 'flex lg:hidden p-2 lg:p-4 text-xs cursor-pointer hover:text-purple-700 lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'flex lg:hidden p-2 lg:p-4 text-xs cursor-pointer hover:text-purple-700 lg:text-sm'
                    }
                >
                    Back
                </p>
                <p
                    onClick={() =>
                        setFilter(
                            'allStackDatabase'
                        )
                    }
                    className={
                        stackObjectSelected ===
                        'allStackDatabase'
                            ? 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    DataBase
                </p>
                <p
                    onClick={() =>
                        setFilter(
                            'allStackBackDesktop'
                        )
                    }
                    className={
                        stackObjectSelected ===
                        'allStackBackDesktop'
                            ? 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    Back
                </p>
                <p
                    onClick={() =>
                        setFilter('allStacksEnv')
                    }
                    className={
                        stackObjectSelected ===
                        'allStacksEnv'
                            ? 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm border-b-2 border-solid border-purple-700'
                            : 'hidden lg:flex p-2 lg:p-4 text-xs cursor-pointer lg:text-sm'
                    }
                >
                    Environnement
                </p>
            </div>
            {visibleStackDetail === false ? (
                <section className="slide-in-left text-center mx-2 leading-8 grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-3 lg:p-16">
                    {stackObject &&
                        stackObject.map(stack => (
                            <>
                                <div
                                    onClick={() =>
                                        setTransitionDetailStack(
                                            stack
                                        )
                                    }
                                    className="cursor-pointer lg:py-20 bg-site-secondary flex-row transition duration-1000 hover:bg-site-violet h-20 lg:h-32 flex items-center rounded-md p-2 lg:p-6"
                                >
                                    <ImageProvider
                                        stack={
                                            stack
                                        }
                                    />
                                    <div className="w-5/6 lg:w-3/4  flex items-center text-center">
                                        <h2 className="text-sm lg:text-xl font-bold lg:font-normal w-2/3">
                                            {
                                                stack
                                            }
                                        </h2>
                                    </div>
                                    <div className="w-1/6 lg:w-1/4 flex justify-end flex-end">
                                        <img
                                            className="w-4 lg:w-14"
                                            src={
                                                Arrow
                                            }
                                            alt="navigation in dylan belouis developpeur web website"
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    <div className="h-32 hidden lg:block lg:invisible"></div>
                </section>
            ) : (
                <>
                    <button
                        className="bg-site-violet w-20 py-2 lg:py-6 lg:w-40 mx-auto my-6"
                        onClick={() =>
                            setVisibleStackDetail(
                                !visibleStackDetail
                            )
                        }
                    >
                        revenir
                    </button>
                    <Stack
                        stack={stackSelected}
                    />
                </>
            )}
        </section>
    )
}

export default Services
