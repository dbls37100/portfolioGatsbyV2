import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import Phone from '../../assets/phone-call.webp'
import Email from '../../assets/email.webp'
import Location from '../../assets/location.webp'
import IndeedLogo from '../../images/social/indeed.png'
import LinkedinLogo from '../../images/social/linkedin.png'
import InstagramLogo from '../../images/social/instagram.png'
import GithubLogo from '../../images/social/github.png'

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = event => {
        event.preventDefault()
        emailjs
            .sendForm(
                'service_wkscx3qdsdqsqd',
                'template_1j9gvpe',
                event.target,
                'user_qsR6w1zQugpTDVGogP89p'
            )
            .then(
                result => {
                    setName('')
                    setPhone('')
                    setEmail('')
                    setMessage('')
                    console.log(result.text)
                },
                error => {
                    console.log(error.text)
                }
            )
    }

    return (
        <section id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <section className="mb-20 grid grid-cols-1 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-4 text-center lg:ml-60 lg:text-left">
                        Contactez Moi
                    </h2>
                    <p className="mx-10 lg:mx-60 mb-14 text-center lg:text-left">
                        Contactez moi si vous
                        souhaitez discuter d'un
                        projet que vous souhaitez
                        développer, si vous
                        aimeriez me proposer une
                        opportunité d'emploi, ou
                        si vous souhaitez
                        simplement faire un
                        feedback sur ce portfolio
                        !
                    </p>
                    <div className="ml-10 lg:ml-60 mb-12 flex flex-row">
                        <div className="border-2 border-white flex justify-center items-center rounded-full p-4 mr-6">
                            <img
                                className="h-6 w-6"
                                src={Phone}
                                alt="phone number of dylan belouis developper web portfolio"
                            />
                        </div>
                        <div>
                            <p className="lg:text-lg">
                                Call Me
                            </p>
                            <p className="lg:text-xl">
                                06.08.10.32.19
                            </p>
                        </div>
                    </div>
                    <div className="ml-10 lg:ml-60 mb-12 flex flex-row">
                        <div className="border-2 border-white flex justify-center items-center rounded-full p-4 mr-6">
                            <img
                                className="h-6 w-6"
                                src={Email}
                                alt="email of dylan belouis developper web portfolio"
                            />
                        </div>
                        <div>
                            <p className="lg:text-lg">
                                Email
                            </p>
                            <p className="lg:text-xl">
                                dylan.belouis@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="ml-10 lg:ml-60 mb-12 flex flex-row">
                        <div className="border-2 border-white flex justify-center items-center rounded-full p-4 mr-6">
                            <img
                                className="h-6 w-6"
                                src={Location}
                                alt="location of dylan belouis developper web portfolio"
                            />
                        </div>
                        <div>
                            <p className="text-lg">
                                Adresse
                            </p>
                            <p className="lg:text-xl">
                                53 allée de
                                Trianon, Tours
                            </p>
                            <p className="lg:text-xl">
                                37100, France
                            </p>
                        </div>
                    </div>
                    <p className="ml-10 lg:ml-60">
                        Find Me On
                    </p>
                    <div className="mt-5 pl-10 py-5 w-4/5 lg:pl-60 flex flex-row bg-site-violet rounded-r-2xl">
                        <a
                            href="https://www.linkedin.com/in/dylan-belouis-developpeur-web-0a8557182/"
                            target="_blank"
                        >
                            <img
                                className="w-10 h-10 mr-6"
                                src={LinkedinLogo}
                                alt="linkedin social in dylan belouis website"
                            />
                        </a>
                        <a
                            href="https://gitlab.com/dylan.belouis"
                            target="_blank"
                        >
                            <img
                                className="w-10 h-10 mr-6"
                                src={GithubLogo}
                                alt="github social in dylan belouis website"
                            />
                        </a>
                    </div>
                </section>
                <section className="mx-10 lg:mx-0 lg:mr-60 grid grid-cols-1">
                    <h2 className="text-4xl font-bold mb-12">
                        Laissez moi un mot
                    </h2>
                    <form
                        className="font-black"
                        onSubmit={sendEmail}
                    >
                        <div className="grid grid-cols-2 gap-7 mb-12">
                            <input
                                id="form"
                                className="bg-site-background p-5 rounded-md"
                                label="Name"
                                name="Name"
                                value={name}
                                onChange={e =>
                                    setName(
                                        e.target
                                            .value
                                    )
                                }
                                placeholder="Nom"
                                type="text"
                                required
                            />
                            <input
                                className="bg-site-background p-5 rounded-md"
                                label="Phone"
                                name="Phone"
                                value={phone}
                                onChange={e =>
                                    setPhone(
                                        e.target
                                            .value
                                    )
                                }
                                placeholder="Téléphone"
                                type="text"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-10 mb-12 w-full">
                            <input
                                className="bg-site-background p-5 rounded-md"
                                label="Email"
                                name="Email"
                                value={email}
                                onChange={e =>
                                    setEmail(
                                        e.target
                                            .value
                                    )
                                }
                                placeholder="Email"
                                type="Email"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1">
                            <textarea
                                className="bg-site-background p-5 rounded-md"
                                label="Message"
                                name="Message"
                                value={message}
                                onChange={e =>
                                    setMessage(
                                        e.target
                                            .value
                                    )
                                }
                                placeholder="Message"
                                required
                            />
                        </div>
                        <div className="bg-site-background w-1/3 mt-5">
                            <button
                                type="submit"
                                className="w-full py-5 bg-site-violet rounded-md"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <div className="text-center mt-14">
                <p className="text-xs pb-2 lg:text-lg">
                    Copyright ©2021dylanbelouis.
                    All Rights Reserved.
                </p>
            </div>
        </section>
    )
}

export default Contact
