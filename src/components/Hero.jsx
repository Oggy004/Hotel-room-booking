import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/hero-image.png'
import calendar from '../assets/calendar.svg'

export const Hero = () => {
    const navigate = useNavigate()
    const cities = [
        "Agra, Uttar Pradesh",
        "Varanasi, Uttar Pradesh",
        "Mathura, Uttar Pradesh",
        "Jaipur, Rajasthan",
        "Udaipur, Rajasthan",
        "Jodhpur, Rajasthan",
        "Jaisalmer, Rajasthan",
        "New Delhi, Delhi",
        "Mumbai, Maharashtra",
        "Pune, Maharashtra",
        "Goa, Goa",
        "Amritsar, Punjab",
        "Shimla, Himachal Pradesh",
        "Manali, Himachal Pradesh",
        "Dharamshala, Himachal Pradesh",
        "Srinagar, Jammu & Kashmir",
        "Leh, Ladakh",
        "Rishikesh, Uttarakhand",
        "Nainital, Uttarakhand",
        "Mussoorie, Uttarakhand",
        "Kolkata, West Bengal",
        "Darjeeling, West Bengal",
        "Gangtok, Sikkim",
        "Shillong, Meghalaya",
        "Guwahati, Assam",
        "Kochi, Kerala",
        "Munnar, Kerala",
        "Alleppey, Kerala",
        "Bengaluru, Karnataka",
        "Mysuru, Karnataka",
        "Hampi, Karnataka",
        "Hyderabad, Telangana",
        "Chennai, Tamil Nadu",
        "Ooty, Tamil Nadu",
        "Kodaikanal, Tamil Nadu"
    ];
    return (
        <div className='relative min-h-screen w-full overflow-hidden bg-cover bg-center text-white' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="luxury-hero-overlay absolute inset-0"></div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 md:px-16">
                <div className="reveal-up max-w-3xl">
                    <p className="mx-auto mb-4 w-fit text-sm tracking-[0.45em] text-[#d8a86f]">★★★★★</p>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#c49a6c]">Verona Stay Luxury Hotel</p>
                    <h1 className="text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                        Luxury Hotel in the Heart of the City
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#efe7de] sm:text-base">
                        Modern rooms, warm service, and calm spaces crafted for guests who love comfort with a refined city edge.
                    </p>
                    <button onClick={() => navigate('/rooms')} className="mt-8 border border-[#c49a6c] bg-[#c49a6c] px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-transparent">
                        Explore Rooms
                    </button>
                </div>

                <form className='hero-booking-panel reveal-up-delay mt-12 grid w-full max-w-6xl gap-5 border-t-4 border-[#c49a6c] px-5 py-5 text-left shadow-2xl backdrop-blur sm:px-7 md:grid-cols-[1.3fr_1fr_1fr_0.75fr_auto] md:items-end'>
                    <div>
                        <label htmlFor="destinationInput" className='hero-booking-label text-[11px] font-bold uppercase tracking-[0.25em]'>Destination</label>
                        <input list='destinations' id="destinationInput" type="text" className="hero-booking-input mt-2 w-full border px-3 py-3 text-sm outline-none transition focus:border-[#b98a5a]" placeholder="Type city name" required />
                        <datalist id="destinations">
                            {cities.map((city, index) => (
                                <option key={index} value={city} />
                            ))}
                        </datalist>
                    </div>

                    <div>
                        <div className='hero-booking-label flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em]'>
                            <img src={calendar} alt="Calendar" className='hero-booking-icon h-4 w-4' />
                            <label htmlFor="checkIn">Check in</label>
                        </div>
                        <input id="checkIn" type="date" className="hero-booking-input mt-2 w-full border px-3 py-3 text-sm outline-none transition focus:border-[#b98a5a]" />
                    </div>

                    <div>
                        <div className='hero-booking-label flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em]'>
                            <img src={calendar} alt="Calendar" className='hero-booking-icon h-4 w-4' />
                            <label htmlFor="checkOut">Check out</label>
                        </div>
                        <input id="checkOut" type="date" className="hero-booking-input mt-2 w-full border px-3 py-3 text-sm outline-none transition focus:border-[#b98a5a]" />
                    </div>

                    <div>
                        <label htmlFor="guests" className='hero-booking-label text-[11px] font-bold uppercase tracking-[0.25em]'>Guests</label>
                        <input min={1} max={5} id="guests" type="number" className="hero-booking-input mt-2 w-full border px-3 py-3 text-sm outline-none transition focus:border-[#b98a5a]" placeholder="2" />
                    </div>

                    <div className="rainbow">
                        <button type="button" onClick={() => navigate('/rooms')} className='h-[46px] rounded-full bg-[#211c18]/90 px-6 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur' >
                            Check Availability
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
