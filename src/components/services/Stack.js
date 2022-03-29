import React, { useEffect } from 'react'
import StacksData from './data'
import './style.css'
import ImageProvider from './ImageProvider'

const Stack = ({ stack }) => {
    const stackObject = StacksData['StackDetail']
    const stackSelected =
        stackObject[`Stack${stack}`]

    useEffect(() => {}, [
        stackObject,
        stackSelected,
    ])
    return (
        <div className="slide-in-left min-h-3/4 px-4 lg:px-60">
            <div className="w-full flex justify-center">
                <ImageProvider stack={stack} />
            </div>
            <h2 className="my-6 text-2xl lg:text-4xl font-bold lg:my-20">
                {stackSelected.title[0]}
            </h2>
            <p className="text-left lg:max-w-md mx-auto mb-10 lg:mb-20">
                {stackSelected.description[0]}
            </p>
            <div className="text-left lg:flex lg:flex-row w-full grid grid-cols-2 lg:justify-center">
                {stackSelected &&
                    stackSelected.power.map(
                        (data, index) => (
                            <p
                                key={index}
                                className="text-xs lg:text-xl mb-2 lg:mr-4"
                            >
                                #{data}
                            </p>
                        )
                    )}
            </div>
        </div>
    )
}

export default Stack
