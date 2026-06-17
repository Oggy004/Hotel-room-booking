import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#1b1714] text-[#f6efe7]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:px-16">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#c49a6c]">Verona Stay</p>
          <h2 className="mt-3 text-3xl font-semibold">Luxury hotel in the heart of the city.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#d8cfc5]">
            Warm rooms, graceful hospitality, and peaceful spaces designed for modern city stays.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c49a6c]">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-[#d8cfc5]">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/rooms" className="transition hover:text-white">Rooms and Suites</Link>
            <Link to="/gallery" className="transition hover:text-white">Gallery</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c49a6c]">Contact</h3>
          <div className="mt-5 space-y-3 text-sm leading-6 text-[#d8cfc5]">
            <p>123 Hotel Street, City Center</p>
            <p>+91 1234-567-890</p>
            <p>info@veronastay.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs uppercase tracking-[0.25em] text-[#a99b8d]">
        Since 1930 - Verona Stay Hospitality
      </div>
    </footer>
  )
}

export default Footer
