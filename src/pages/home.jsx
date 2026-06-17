import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import RoomCard from '../components/Roomcard'
import { rooms } from '../data/roomsData'

const galleryPreview = [
  { id: 1, title: "Signature Suite", url: rooms[2].image },
  { id: 2, title: "Terrace Evenings", url: rooms[6].image },
  { id: 3, title: "Garden Rooms", url: rooms[4].image },
  { id: 4, title: "Grand Residence", url: rooms[7].image }
]

const features = [
  { icon: "Wi", title: "High Speed Wifi", description: "Seamless access throughout rooms and shared spaces." },
  { icon: "Pk", title: "Parking Space", description: "Secure parking with easy arrival support." },
  { icon: "Rb", title: "Restaurant & Bar", description: "Seasonal dining, quiet cocktails, and private tables." },
  { icon: "Sp", title: "Spa Center", description: "Relaxing treatments designed for restful stays." },
  { icon: "Ft", title: "Fitness Center", description: "Modern equipment for your daily routine." },
  { icon: "Pl", title: "Swimming Pool", description: "A calm pool deck for morning and evening swims." }
]

const testimonials = [
  { name: "Rajesh Kumar", rating: "4.9/5", text: "Excellent service, beautiful rooms, and a calm atmosphere from check-in to breakfast." },
  { name: "Priya Singh", rating: "5/5", text: "The design feels premium and the staff made the whole stay effortless." },
  { name: "Amit Patel", rating: "4.8/5", text: "Great location, polished rooms, and exactly the quiet weekend we wanted." },
  { name: "Neha Sharma", rating: "4.9/5", text: "The terrace suite was spotless, quiet, and beautifully arranged for our anniversary." },
  { name: "Arjun Mehta", rating: "5/5", text: "Warm staff, fast check-in, excellent breakfast, and one of the best beds I have slept in." },
  { name: "Sara Khan", rating: "4.7/5", text: "Loved the bronze interiors and soft lighting. It felt calm without losing city convenience." },
  { name: "Karan Malhotra", rating: "4.8/5", text: "The room service was quick, the view was lovely, and the whole stay felt carefully managed." },
  { name: "Isha Rao", rating: "5/5", text: "A beautiful hotel for a weekend reset. The spa and garden room were both excellent." }
]

export const Home = () => {
  const navigate = useNavigate()
  const featuredRooms = rooms.slice(0, 6)

  return (
    <>
      <Hero />

      <section className="bg-white px-4 py-16 sm:px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={rooms[1].image} alt="Deluxe room" className="h-72 w-full object-cover reveal-up" />
            <img src={rooms[4].image} alt="Garden room" className="mt-10 h-72 w-full object-cover reveal-up-delay" />
          </div>
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">Welcome to Verona</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#211c18] md:text-5xl">
              Luxury hotel in the heart of the city.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#6f6257]">
              Verona Stay offers warm interiors, modern rooms, thoughtful service, and refined spaces for travelers who want both comfort and polish.
            </p>
            <button onClick={() => navigate('/contact')} className="mt-7 bg-[#b98a5a] px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#211c18]">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f1ebe4] px-4 py-16 sm:px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">Exquisite and Luxurious</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#211c18] md:text-5xl">Room and suite collection</h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map(room => (
              <RoomCard
                key={room.id}
                room={room}
                onViewDetails={() => navigate(`/room/${room.id}`, { state: { room } })}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate('/rooms')}
              className="border border-[#211c18] px-8 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#211c18] transition hover:bg-[#211c18] hover:text-white"
            >
              View All Rooms
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">Modern and Comfortable</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#211c18] md:text-5xl">Facilities and amenities</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d4b28f] text-sm font-bold text-[#b98a5a]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#211c18]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6f6257]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#1b1714] md:grid-cols-4">
        {galleryPreview.map(image => (
          <button key={image.id} onClick={() => navigate('/gallery')} className="group relative h-72 overflow-hidden text-left">
            <img src={image.url} alt={image.title} className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-95" />
            <span className="absolute bottom-5 left-5 text-sm font-bold uppercase tracking-[0.25em] text-white">{image.title}</span>
          </button>
        ))}
      </section>

      <section className="overflow-hidden bg-[#f7f1ea] px-4 py-16 sm:px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">Guest Impressions</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#211c18] md:text-5xl">Reviews from recent stays</h2>
          </div>

          <div className="relative mx-auto max-w-6xl overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f7f1ea] to-transparent md:w-32" />

            <div className="marquee-inner flex min-w-[200%] transform-gpu pb-5 pt-3" style={{ animationDuration: "28s" }}>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}-top`} className="mx-4 w-72 shrink-0 bg-white p-5 shadow-[0_18px_45px_rgba(45,35,26,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,35,26,0.14)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#211c18]">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9a7654]">Verified Guest</p>
                    </div>
                    <span className="bg-[#f1ebe4] px-3 py-1 text-xs font-bold text-[#b98a5a]">{testimonial.rating}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#6f6257]">"{testimonial.text}"</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-[#9a7654]">
                    <span>Posted after stay</span>
                    <span>★★★★★</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee-inner marquee-reverse flex min-w-[200%] transform-gpu pb-3 pt-5" style={{ animationDuration: "32s" }}>
              {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}-bottom`} className="mx-4 w-72 shrink-0 border border-[#eadfd3] bg-[#fffaf5] p-5 shadow-[0_18px_45px_rgba(45,35,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,35,26,0.12)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[#211c18]">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9a7654]">Verified Guest</p>
                    </div>
                    <span className="bg-white px-3 py-1 text-xs font-bold text-[#b98a5a]">{testimonial.rating}</span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#6f6257]">"{testimonial.text}"</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-[#9a7654]">
                    <span>Verona Stay</span>
                    <span>★★★★★</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f7f1ea] to-transparent md:w-32" />
          </div>
        </div>
      </section>

      <section className="bg-[#211c18] px-4 py-16 text-center text-white sm:px-6 md:px-16">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c49a6c]">Reservation</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">Ready to book a warmer, quieter stay?</h2>
        <div className="rainbow mx-auto mt-8 w-fit">
          <button
            onClick={() => navigate('/rooms')}
            className="rounded-full bg-[#211c18]/90 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur"
          >
            Book Now
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
