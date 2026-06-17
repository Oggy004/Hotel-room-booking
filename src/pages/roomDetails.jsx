import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import { rooms } from '../data/roomsData'
import RoomCard from '../components/Roomcard'

const RoomDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useUser()
    const room = location.state?.room || rooms.find((item) => item.id === Number(id))
    const roomImages = room?.images?.length ? room.images : [room?.image].filter(Boolean)
    const suggestedRooms = rooms
        .filter((item) => item.id !== room?.id)
        .sort((a, b) => Math.abs(a.price - room.price) - Math.abs(b.price - room.price))
        .slice(0, 3)

    const [bookingData, setBookingData] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1
    })

    const handleBookingChange = (e) => {
        setBookingData({
            ...bookingData,
            [e.target.name]: e.target.value
        })
    }

    const handleBooking = () => {
        if (!user) {
            alert('Please login first to book a room')
            return
        }

        if (!bookingData.checkIn || !bookingData.checkOut) {
            alert('Please select check-in and check-out dates')
            return
        }

        // Store booking in localStorage
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        bookings.push({
            id: Math.random(),
            roomId: room.id,
            roomName: room.name,
            roomPrice: room.price,
            userEmail: user.emailAddresses[0].emailAddress,
            ...bookingData,
            bookedAt: new Date().toLocaleDateString()
        })
        localStorage.setItem('bookings', JSON.stringify(bookings))

        alert('Room booked successfully!')
        navigate('/dashboard')
    }

    if (!room) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f1ea]">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold text-[#211c18]">Room not found</h1>
                    <button
                        onClick={() => navigate('/rooms')}
                        className="bg-[#211c18] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#b98a5a]"
                    >
                        Back to Rooms
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f7f1ea]">
            <div className="border-b border-[#e1d2c2] bg-white px-4 pb-4 pt-28 sm:px-6 md:px-16">
                <button
                    onClick={() => navigate('/rooms')}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#9a7654] transition hover:text-[#211c18]"
                >
                    Back to Rooms
                </button>
            </div>

            <div className="px-4 py-12 sm:px-6 md:px-16">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <img
                            src={roomImages[0]}
                            alt={room.name}
                            className="mb-6 h-[28rem] w-full object-cover shadow-[0_18px_45px_rgba(45,35,26,0.12)]"
                        />

                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {roomImages.slice(1, 3).map((image, index) => (
                                <img
                                    key={`${room.id}-detail-${index}`}
                                    src={image}
                                    alt={`${room.name} view ${index + 2}`}
                                    className="h-56 w-full object-cover shadow-[0_18px_45px_rgba(45,35,26,0.10)]"
                                />
                            ))}
                        </div>

                        <div className="bg-white p-7 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">{room.size}</p>
                            <h1 className="mb-4 mt-2 text-5xl font-semibold text-[#211c18]">{room.name}</h1>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-[#c49a6c]">★</span>
                                    <span className="font-semibold text-[#6f6257]">{room.rating}</span>
                                </div>
                                <div className="text-3xl font-bold text-[#211c18]">₹{room.price}<span className="text-sm font-medium text-[#6f6257]"> /night</span></div>
                            </div>

                            <p className="mb-6 text-base leading-8 text-[#6f6257]">{room.fullDescription}</p>

                            <div className="border-t border-[#eadfd3] pt-6">
                                <h3 className="mb-4 text-2xl font-semibold text-[#211c18]">Room Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-[#9a7654]">Capacity</p>
                                        <p className="font-semibold text-[#211c18]">{room.capacity}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#9a7654]">Beds</p>
                                        <p className="font-semibold text-[#211c18]">{room.beds}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-[#eadfd3] pt-6">
                                <h3 className="mb-4 text-2xl font-semibold text-[#211c18]">Amenities</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {room.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-[#b98a5a]">✓</span>
                                            <span className="text-[#6f6257]">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="sticky top-24 bg-white p-8 shadow-[0_18px_45px_rgba(45,35,26,0.10)]">
                            <h2 className="mb-6 text-3xl font-semibold text-[#211c18]">Book This Room</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Check-in Date</label>
                                    <input
                                        type="date"
                                        name="checkIn"
                                        value={bookingData.checkIn}
                                        onChange={handleBookingChange}
                                        className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Check-out Date</label>
                                    <input
                                        type="date"
                                        name="checkOut"
                                        value={bookingData.checkOut}
                                        onChange={handleBookingChange}
                                        className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#6f6257]">Number of Guests</label>
                                    <select
                                        name="guests"
                                        value={bookingData.guests}
                                        onChange={handleBookingChange}
                                        className="w-full border border-[#d8c7b5] px-4 py-3 outline-none transition focus:border-[#b98a5a]"
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                        <option value="5">5+ Guests</option>
                                    </select>
                                </div>

                                <div className="bg-[#f7f1ea] p-4">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-[#6f6257]">Price per night:</span>
                                        <span className="font-semibold">₹{room.price}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-[#211c18]">
                                        <span>Total:</span>
                                        <span>₹{room.price}</span>
                                    </div>
                                </div>

                                <div className="rainbow w-full">
                                    <button
                                        onClick={handleBooking}
                                        className="w-full rounded-full bg-[#211c18]/90 py-3 text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur"
                                    >
                                        Book Now
                                    </button>
                                </div>

                                <p className="text-center text-sm text-[#6f6257]">
                                    {user ? `Booking as ${user.emailAddresses[0].emailAddress}` : 'Login to book'}
                                </p>
                            </div>

                            <div className="mt-8 border border-[#e1d2c2] bg-[#fbf8f4] p-4">
                                <h3 className="mb-2 font-semibold text-[#211c18]">Cancellation Policy</h3>
                                <p className="text-sm text-[#6f6257]">Free cancellation up to 7 days before check-in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="px-4 pb-16 sm:px-6 md:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">You May Also Like</p>
                        <h2 className="mt-3 text-4xl font-semibold text-[#211c18] md:text-5xl">Suggested rooms for your stay</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {suggestedRooms.map((suggestedRoom) => (
                            <RoomCard
                                key={suggestedRoom.id}
                                room={suggestedRoom}
                                onViewDetails={() => navigate(`/room/${suggestedRoom.id}`, { state: { room: suggestedRoom } })}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoomDetails
