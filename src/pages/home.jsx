import React, { useEffect, useRef } from 'react'
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

const hotelCities = [
  { name: "Agra, Uttar Pradesh", lat: 27.1767, lng: 78.0081 },
  { name: "Varanasi, Uttar Pradesh", lat: 25.3176, lng: 82.9739 },
  { name: "Mathura, Uttar Pradesh", lat: 27.4924, lng: 77.6737 },
  { name: "Jaipur, Rajasthan", lat: 26.9124, lng: 75.7873 },
  { name: "Udaipur, Rajasthan", lat: 24.5854, lng: 73.7125 },
  { name: "Jodhpur, Rajasthan", lat: 26.2389, lng: 73.0243 },
  { name: "Jaisalmer, Rajasthan", lat: 26.9157, lng: 70.9083 },
  { name: "New Delhi, Delhi", lat: 28.6139, lng: 77.2090 },
  { name: "Mumbai, Maharashtra", lat: 19.0760, lng: 72.8777 },
  { name: "Pune, Maharashtra", lat: 18.5204, lng: 73.8567 },
  { name: "Goa, Goa", lat: 15.2993, lng: 74.1240 },
  { name: "Amritsar, Punjab", lat: 31.6340, lng: 74.8723 },
  { name: "Shimla, Himachal Pradesh", lat: 31.1048, lng: 77.1734 },
  { name: "Manali, Himachal Pradesh", lat: 32.2396, lng: 77.1887 },
  { name: "Dharamshala, Himachal Pradesh", lat: 32.2190, lng: 76.3234 },
  { name: "Srinagar, Jammu & Kashmir", lat: 34.0837, lng: 74.7973 },
  { name: "Leh, Ladakh", lat: 34.1526, lng: 77.5771 },
  { name: "Rishikesh, Uttarakhand", lat: 30.0869, lng: 78.2676 },
  { name: "Nainital, Uttarakhand", lat: 29.3803, lng: 79.4636 },
  { name: "Mussoorie, Uttarakhand", lat: 30.4599, lng: 78.0664 },
  { name: "Kolkata, West Bengal", lat: 22.5726, lng: 88.3639 },
  { name: "Darjeeling, West Bengal", lat: 27.0410, lng: 88.2627 },
  { name: "Gangtok, Sikkim", lat: 27.3314, lng: 88.6138 },
  { name: "Shillong, Meghalaya", lat: 25.5788, lng: 91.8933 },
  { name: "Guwahati, Assam", lat: 26.1445, lng: 91.7362 },
  { name: "Kochi, Kerala", lat: 9.9312, lng: 76.2673 },
  { name: "Munnar, Kerala", lat: 10.0889, lng: 77.0595 },
  { name: "Alleppey, Kerala", lat: 9.4981, lng: 76.3388 },
  { name: "Bengaluru, Karnataka", lat: 12.9716, lng: 77.5946 },
  { name: "Mysuru, Karnataka", lat: 12.2958, lng: 76.6394 },
  { name: "Hampi, Karnataka", lat: 15.3350, lng: 76.4600 },
  { name: "Hyderabad, Telangana", lat: 17.3850, lng: 78.4867 },
  { name: "Chennai, Tamil Nadu", lat: 13.0827, lng: 80.2707 },
  { name: "Ooty, Tamil Nadu", lat: 11.4102, lng: 76.6950 },
  { name: "Kodaikanal, Tamil Nadu", lat: 10.2381, lng: 77.4892 }
];

export const Home = ({ theme }) => {
  const navigate = useNavigate()
  const featuredRooms = rooms.slice(0, 6)
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // Inject Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // Inject Leaflet Custom Popup & Marker Styles
    if (!document.getElementById('leaflet-custom-styles')) {
      const style = document.createElement('style')
      style.id = 'leaflet-custom-styles'
      style.innerHTML = `
        @keyframes marker-pulse {
          0% { box-shadow: 0 0 0 0 rgba(185, 138, 90, 0.8); }
          70% { box-shadow: 0 0 0 6px rgba(185, 138, 90, 0); }
          100% { box-shadow: 0 0 0 0 rgba(185, 138, 90, 0); }
        }
        .custom-hotel-pin {
          animation: marker-pulse 2s infinite;
          border-radius: 50%;
        }
        .leaflet-popup-content-wrapper {
          background: #211c18 !important;
          color: #f7f1ea !important;
          border-radius: 4px !important;
          font-family: inherit !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
          border: 1px solid #c49a6c !important;
        }
        .leaflet-popup-tip {
          background: #211c18 !important;
          border-bottom: 1px solid #c49a6c !important;
        }
        .leaflet-popup-content {
          margin: 12px 16px !important;
          line-height: 1.4 !important;
        }
        .leaflet-control-layers {
          background: #211c18 !important;
          color: #f7f1ea !important;
          border: 1px solid #c49a6c !important;
          border-radius: 4px !important;
          font-family: inherit !important;
          font-size: 11px !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2) !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
        }
        .leaflet-control-layers-expanded {
          padding: 8px 12px !important;
        }
        .leaflet-control-layers-selector {
          margin-right: 6px !important;
          accent-color: #b98a5a !important;
        }
        .leaflet-bar {
          border: 1px solid #c49a6c !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
        }
        .leaflet-bar a {
          background-color: #211c18 !important;
          color: #f7f1ea !important;
          border-bottom: 1px solid #c49a6c !important;
          transition: background-color 0.2s, color 0.2s;
        }
        .leaflet-bar a:hover {
          background-color: #b98a5a !important;
          color: white !important;
        }
        .leaflet-bar a.leaflet-disabled {
          background-color: #1b1714 !important;
          color: #6f6257 !important;
        }
        .leaflet-container {
          background: #f7f1ea !important;
        }
        body.theme-dark-mode .leaflet-container {
          background: #181311 !important;
        }
      `
      document.head.appendChild(style)
    }

    const runMapInit = () => {
      if (!window.L || !mapRef.current) return
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      const L = window.L

      // Define different tile layers
      const voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      })

      const darkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      })

      const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 19
      })

      // Use darkMatter if theme is dark, else voyager
      const defaultLayer = theme === 'dark' ? darkMatter : voyager

      const baseMaps = {
        "Default Map": defaultLayer,
        "Satellite Map": satellite
      }

      // Center map on Central India with zoom 5, loading the default layer
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        layers: [defaultLayer]
      }).setView([22.5937, 78.9629], 5)
      mapInstanceRef.current = map

      // Add layers control switcher in top right
      L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map)

      // Add pins for all hotel cities
      hotelCities.forEach(city => {
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `
            <div class="custom-hotel-pin" style="
              background-color: #211c18;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              border: 2px solid #b98a5a;
            "></div>
          `,
          iconSize: [12, 12],
          iconAnchor: [6, 6]
        })

        L.marker([city.lat, city.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(`<div style="text-align: center;"><b style="color: #b98a5a; text-transform: uppercase; font-size: 10px; tracking: 0.1em;">Verona Stay</b><br/><span style="font-size: 12px; font-weight: 500;">${city.name}</span></div>`)
      })
    }

    if (!window.L) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.async = true
      script.onload = runMapInit
      document.body.appendChild(script)
    } else {
      runMapInit()
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [theme])

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

      {/* Interactive India Locations Map */}
      <section className="bg-[#fffaf5] px-4 py-16 border-t border-[#eadfd3] sm:px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b98a5a]">Our Locations</p>
            <h2 className="mt-3 text-4xl font-semibold text-[#211c18] md:text-5xl">Verona Stay Across India</h2>
            <p className="mt-4 text-sm leading-6 text-[#6f6257] max-w-2xl mx-auto">
              We are present in the country's most vibrant cities and serene retreats. Click on any pin to view the location details.
            </p>
          </div>
          <div className="relative overflow-hidden shadow-[0_18px_45px_rgba(45,35,26,0.1)] border border-[#eadfd3] rounded bg-white">
            <div ref={mapRef} className="h-[550px] w-full" style={{ zIndex: 1 }} />
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
