import React from 'react'

const RoomCard = ({ room, onViewDetails }) => {
  return (
    <div className="group cursor-pointer overflow-hidden bg-white shadow-[0_18px_45px_rgba(45,35,26,0.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(45,35,26,0.16)]" onClick={onViewDetails}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute right-4 top-4 bg-[#1b1714]/85 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          ★ {room.rating}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-[#211c18]">{room.name}</h3>
          <p className="text-right text-xs uppercase tracking-[0.2em] text-[#9a7654]">{room.size}</p>
        </div>

        <p className="mb-5 min-h-10 text-sm leading-6 text-[#6f6257]">
          {room.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="border border-[#e1d2c2] px-3 py-1 text-xs text-[#6f6257]">
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[#eadfd3] pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#9a7654]">From</p>
            <p className="text-2xl font-bold text-[#211c18]">₹{room.price}<span className="text-xs font-medium text-[#6f6257]"> /night</span></p>
          </div>
          <button
            className="border border-[#211c18] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#211c18] transition hover:bg-[#211c18] hover:text-white"
            onClick={(e) => {
              e.stopPropagation()
              onViewDetails()
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
