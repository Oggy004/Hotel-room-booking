import React, { useState } from 'react'
import { rooms } from '../data/roomsData'

// Change gallery images here if you want a different order or different room photos.
// These currently reuse the image paths from `src/data/roomsData.js`.
const galleryImages = [
    { id: 1, title: "Luxury Suite", url: rooms[2].image },
    { id: 2, title: "Garden View", url: rooms[4].image },
    { id: 3, title: "Executive Studio", url: rooms[5].image },
    { id: 4, title: "Terrace Suite", url: rooms[6].image },
    { id: 5, title: "Presidential Suite", url: rooms[7].image },
    { id: 6, title: "Deluxe King Room", url: rooms[1].image },
    { id: 7, title: "Family Residence", url: rooms[3].image },
    { id: 8, title: "Standard Room", url: rooms[0].image },
]

const Gallery = () => {
    const [stopScroll, setStopScroll] = useState(false)

    return (
        <div className="luxury-page min-h-screen">
            <div className="bg-[#211c18] px-4 pb-16 pt-32 text-center text-white sm:px-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c49a6c]">Hotel Gallery</p>
                    <h1 className="mt-4 text-5xl font-semibold md:text-6xl">Explore Verona Stay</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dfd2c6]">
                        A closer look at our rooms, suites, and warm modern interiors.
                    </p>
                </div>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-16">
                <div
                    className="relative mx-auto w-full max-w-7xl overflow-hidden"
                    onMouseEnter={() => setStopScroll(true)}
                    onMouseLeave={() => setStopScroll(false)}
                >
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7f1ea] to-transparent md:w-32" />

                    <div
                        className="marquee-inner flex w-fit"
                        style={{
                            animationPlayState: stopScroll ? "paused" : "running",
                            animationDuration: `${galleryImages.length * 2500}ms`,
                        }}
                    >
                        <div className="flex">
                            {[...galleryImages, ...galleryImages].map((image, index) => (
                                <div
                                    key={`${image.id}-${index}`}
                                    className="group relative mx-4 h-[20rem] w-56 shrink-0 overflow-hidden bg-[#211c18] shadow-[0_18px_45px_rgba(45,35,26,0.12)] transition-all duration-300 hover:scale-95 sm:w-64"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                                        <p className="text-center text-2xl font-semibold text-white">{image.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7f1ea] to-transparent md:w-32" />
                </div>

                <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {galleryImages.slice(0, 4).map((image) => (
                        <div key={image.id} className="group relative h-72 overflow-hidden bg-[#211c18] shadow-[0_18px_45px_rgba(45,35,26,0.10)]">
                            <img src={image.url} alt={image.title} className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
