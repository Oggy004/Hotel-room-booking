import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoomCard from '../components/Roomcard'
import { rooms as roomCatalog } from '../data/roomsData'

const Rooms = () => {
    const navigate = useNavigate()
    const [sortBy, setSortBy] = useState('featured')

    const rooms = [...roomCatalog].sort((a, b) => {
        if (sortBy === 'price') return a.price - b.price
        if (sortBy === 'rating') return b.rating - a.rating
        return a.id - b.id
    })

    return (
        <div className="luxury-page min-h-screen">
            <div className="bg-[#211c18] px-4 pb-16 pt-32 text-center text-white sm:px-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c49a6c]">Rooms and Suites</p>
                    <h1 className="mt-4 text-5xl font-semibold md:text-6xl">Our Room Collection</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dfd2c6]">
                        Choose from warm standard rooms, spacious suites, terrace stays, and signature residences.
                    </p>
                </div>
            </div>

            <div className="border-b border-[#e1d2c2] bg-white px-4 py-6 sm:px-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <h2 className="text-2xl font-semibold text-[#211c18]">Available Rooms ({rooms.length})</h2>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSortBy('featured')} className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${sortBy === 'featured' ? 'bg-[#211c18] text-white' : 'border border-[#d8c7b5] text-[#211c18]'}`}>
                            Featured
                        </button>
                        <button onClick={() => setSortBy('price')} className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${sortBy === 'price' ? 'bg-[#211c18] text-white' : 'border border-[#d8c7b5] text-[#211c18]'}`}>
                            Price
                        </button>
                        <button onClick={() => setSortBy('rating')} className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition ${sortBy === 'rating' ? 'bg-[#211c18] text-white' : 'border border-[#d8c7b5] text-[#211c18]'}`}>
                            Rating
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map(room => (
                        <RoomCard
                            key={room.id}
                            room={room}
                            onViewDetails={() => navigate(`/room/${room.id}`, { state: { room } })}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rooms
