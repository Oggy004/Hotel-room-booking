import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const { user } = useUser()
    const navigate = useNavigate()
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        if (!user) return

        const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
        const userBookings = allBookings.filter(b => b.userEmail === user.emailAddresses[0].emailAddress)
        setBookings(userBookings)
    }, [user])

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#f7f1ea]">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold text-[#211c18]">Please Login</h1>
                    <p className="mb-6 text-[#6f6257]">You need to login to view your bookings</p>
                </div>
            </div>
        )
    }

    return (
        <div className="luxury-page min-h-screen">
            <div className="bg-[#211c18] px-4 pb-16 pt-32 text-center text-white sm:px-6 md:px-16">
                <div className="mx-auto flex max-w-7xl flex-col items-center">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c49a6c]">Dashboard</p>
                    <h1 className="mt-4 text-5xl font-semibold md:text-6xl">My Bookings</h1>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#dfd2c6]">Welcome, {user.firstName || user.emailAddresses[0].emailAddress}</p>
                </div>
            </div>

            <div className="px-4 py-8 sm:px-6 md:px-16">
                <div className="mx-auto max-w-7xl">
                <div className="mb-8 bg-white p-6 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                    <h2 className="mb-6 text-3xl font-semibold text-[#211c18]">Profile Information</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-[#9a7654]">Name</p>
                            <p className="text-lg font-semibold text-[#211c18]">{user.firstName} {user.lastName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[#9a7654]">Email</p>
                            <p className="text-lg font-semibold text-[#211c18]">{user.emailAddresses[0].emailAddress}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 shadow-[0_18px_45px_rgba(45,35,26,0.08)]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold text-[#211c18]">My Bookings</h2>
                        <button
                            onClick={() => navigate('/rooms')}
                            className="bg-[#211c18] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b98a5a]"
                        >
                            Book More Rooms
                        </button>
                    </div>

                    {bookings.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="mb-4 text-lg text-[#6f6257]">No bookings yet</p>
                            <button
                                onClick={() => navigate('/rooms')}
                                className="bg-[#211c18] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b98a5a]"
                            >
                                Book a Room
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {bookings.map(booking => (
                                <div key={booking.id} className="border border-[#e1d2c2] p-6 transition hover:shadow-lg">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#211c18]">{booking.roomName}</h3>
                                            <p className="text-[#6f6257]">Booked on: {booking.bookedAt}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-[#211c18]">₹{booking.roomPrice}</p>
                                            <span className="mt-2 inline-block bg-[#f1ebe4] px-3 py-1 text-sm font-semibold text-[#7d5b3b]">
                                                Confirmed
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="text-[#9a7654]">Check-in</p>
                                            <p className="font-semibold text-[#211c18]">{booking.checkIn}</p>
                                        </div>
                                        <div>
                                            <p className="text-[#9a7654]">Check-out</p>
                                            <p className="font-semibold text-[#211c18]">{booking.checkOut}</p>
                                        </div>
                                        <div>
                                            <p className="text-[#9a7654]">Guests</p>
                                            <p className="font-semibold text-[#211c18]">{booking.guests} {booking.guests > 1 ? 'guests' : 'guest'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
