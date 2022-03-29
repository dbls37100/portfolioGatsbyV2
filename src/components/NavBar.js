import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Logo from '../assets/logo.webp'
import scrollTo from 'gatsby-plugin-smoothscroll'
import BurgerMenu from '../assets/menu.webp'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const mobileScroll = path => {
        setIsOpen(!isOpen)
        scrollTo(path)
    }

    useEffect(() => {}, [isOpen])
    return (
        <div>
            <div className="bg-site-background z-40 w-full maw-w-screen fixed h-20 lg:h-36">
                <nav className="flex lg:h-full items-center flex-rows justify-between">
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            className="w-24 h-16 mt-2 lg:mt-0 lg:w-32 lg:h-24"
                            alt="logo dylan belouis website"
                        />
                    </div>
                    <div className="h-full justify-end text-white lg:flex hidden">
                        <div
                            onClick={() =>
                                scrollTo('#about')
                            }
                            className="h-full cursor-pointer bg-site-violet flex justify-center items-end p-10"
                        >
                            <p>About Me</p>
                        </div>
                        <div
                            onClick={() =>
                                scrollTo(
                                    '#services'
                                )
                            }
                            className="transition duration-500 h-full cursor-pointer hover:bg-site-violet flex justify-center items-end lg:p-10"
                        >
                            <p>Services</p>
                        </div>
                        <div
                            onClick={() =>
                                scrollTo(
                                    '#portfolio'
                                )
                            }
                            className="transition duration-500 h-full cursor-pointer hover:bg-site-violet flex justify-center items-end lg:p-10"
                        >
                            <p>Portfolio</p>
                        </div>
                        <div
                            onClick={() =>
                                scrollTo(
                                    '#testimonials'
                                )
                            }
                            className="transition duration-500 ease-in-out h-full cursor-pointer hover:bg-site-violet flex justify-center items-end lg:p-10"
                        >
                            <p>Testimonials</p>
                        </div>
                        <div className="transition duration-500 h-full cursor-pointer hover:bg-site-violet flex justify-center items-end lg:p-10">
                            <p>Blog</p>
                        </div>
                        <div
                            onClick={() =>
                                scrollTo(
                                    '#contact'
                                )
                            }
                            className="transition duration-500 cursor-pointer hover:bg-site-violet flex justify-center items-end lg:p-10"
                        >
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div
                        onClick={() =>
                            setIsOpen(!isOpen)
                        }
                        className="flex lg:hidden mr-10"
                    >
                        <img
                            src={BurgerMenu}
                            alt="navbar of dylan belouis developpeur website"
                        />
                    </div>
                </nav>
            </div>
            <div
                className={
                    isOpen
                        ? `flex flex-col text-white w-screen h-screen z-30 pt-24 text-center bg-site-background fixed`
                        : `hidden`
                }
            >
                <div
                    onClick={() =>
                        mobileScroll('#about')
                    }
                    className=""
                >
                    <p className="my-10">
                        About Me
                    </p>
                </div>
                <div
                    onClick={() =>
                        mobileScroll('#services')
                    }
                    className=""
                >
                    <p className="my-10">
                        Services
                    </p>
                </div>
                <div
                    onClick={() =>
                        mobileScroll('#portfolio')
                    }
                    className=""
                >
                    <p className="my-10">
                        Portfolio
                    </p>
                </div>
                <div
                    onClick={() =>
                        mobileScroll(
                            '#testimonials'
                        )
                    }
                    className=""
                >
                    <p className="my-10">
                        Testimonials
                    </p>
                </div>
                <div
                    onClick={() =>
                        mobileScroll('#contact')
                    }
                    className=""
                >
                    <p className="my-10">
                        Contact Us
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
