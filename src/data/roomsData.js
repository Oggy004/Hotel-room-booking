export const rooms = [
  // Change each `image` or `images` value below to your own local asset path or image URL.
  // Example:
  // import room1 from '../assets/rooms/room1.jpg'
  // image: room1,
  // images: [room1, room2, room3],
  {
    id: 1,
    name: "Standard Room",
    price: 4200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A calm, modern room with warm lighting and essential comfort.",
    fullDescription: "A beautifully finished standard room with a queen bed, soft linen, warm wood details, fast WiFi, and a quiet work corner. Ideal for short city stays and relaxed weekends.",
    amenities: ["Free WiFi", "Queen Bed", "Street View", "Breakfast", "Smart TV"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "28 m2"
  },
  {
    id: 2,
    name: "Deluxe King Room",
    price: 6200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Spacious king room with elegant finishes and city views.",
    fullDescription: "The deluxe king room offers more space, a plush king bed, city-facing windows, a rain shower, curated minibar, and relaxed seating for an elevated everyday stay.",
    amenities: ["Free WiFi", "King Bed", "City View", "Mini Bar", "Rain Shower"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "34 m2"
  },
  {
    id: 3,
    name: "Premium Suite",
    price: 9800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A refined suite with a separate lounge and premium service.",
    fullDescription: "A refined suite designed for memorable stays, featuring a separate living area, king bedroom, deep soaking tub, butler service, and breakfast served in-room on request.",
    amenities: ["Butler Service", "King Bed", "Lounge Area", "Soaking Tub", "Breakfast"],
    capacity: "2-3 guests",
    beds: "1 King Bed + Sofa",
    size: "52 m2"
  },
  {
    id: 4,
    name: "Family Residence",
    price: 12500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A generous family room with connected spaces and extra storage.",
    fullDescription: "A practical yet elegant family residence with two sleeping zones, a lounge corner, generous wardrobes, child-friendly amenities, and quick access to the restaurant and pool.",
    amenities: ["Free WiFi", "Two Beds", "Living Area", "Kids Amenities", "Breakfast"],
    capacity: "4-5 guests",
    beds: "2 Double Beds",
    size: "58 m2"
  },
  {
    id: 5,
    name: "Garden View Room",
    price: 7200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A peaceful room with private balcony and garden outlook.",
    fullDescription: "Wake up to landscaped garden views from a private balcony, with premium bedding, a rain shower, calm neutral interiors, and an optional breakfast tray.",
    amenities: ["Balcony", "Garden View", "Rain Shower", "Breakfast", "Free WiFi"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "32 m2"
  },
  {
    id: 6,
    name: "Executive Studio",
    price: 8500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A polished studio for work trips and longer stays.",
    fullDescription: "A smart studio with a king bed, compact pantry, work desk, lounge chair, strong WiFi, and quiet acoustic treatment for focused business travel.",
    amenities: ["Work Desk", "Pantry", "King Bed", "High Speed WiFi", "Smart TV"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "40 m2"
  },
  {
    id: 7,
    name: "Terrace Suite",
    price: 14500,
    rating: 5,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A luxury suite with private terrace and evening dining setup.",
    fullDescription: "A spacious terrace suite created for celebrations, with private outdoor seating, king bedroom, marble bathroom, dining setup, and personalized concierge support.",
    amenities: ["Private Terrace", "Concierge", "King Bed", "Dining Setup", "Marble Bath"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "64 m2"
  },
  {
    id: 8,
    name: "Presidential Suite",
    price: 24000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Our signature suite with grand living space and private service.",
    fullDescription: "The signature suite brings together a grand living room, refined bedroom, walk-in wardrobe, premium bath, private service, and the best views in the hotel.",
    amenities: ["Private Service", "Grand Lounge", "Walk-in Wardrobe", "Best View", "Premium Bar"],
    capacity: "2-4 guests",
    beds: "1 King Bed + Lounge",
    size: "92 m2"
  },
  {
    id: 9,
    name: "Heritage Haveli Room",
    price: 6800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Traditional Indian accents with carved wood and warm textiles.",
    fullDescription: "Inspired by classic haveli interiors, this room features carved furniture, earthy colors, handcrafted decor, and a calm lounge corner suited to slow and graceful stays.",
    amenities: ["Courtyard View", "Handcrafted Decor", "Breakfast", "Free WiFi", "Tea Setup"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "36 m2"
  },
  {
    id: 10,
    name: "Jaipur Courtyard Room",
    price: 7300,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Pink City-inspired room with jaali details and calm courtyard tones.",
    fullDescription: "A warm room influenced by Jaipur palaces, with patterned accents, soft sandstone hues, elegant headboards, and peaceful courtyard-facing windows.",
    amenities: ["Courtyard View", "Smart TV", "Free WiFi", "Rain Shower", "Tea Setup"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "33 m2"
  },
  {
    id: 11,
    name: "Goa Sea Breeze Room",
    price: 7600,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Airy coastal room with relaxed textures and breezy daylight.",
    fullDescription: "This Goa-inspired room blends light wood, woven accents, and a laid-back coastal palette with balcony seating and spa-style bathroom details.",
    amenities: ["Balcony", "Sea Breeze Style", "Breakfast", "Free WiFi", "Mini Bar"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "35 m2"
  },
  {
    id: 12,
    name: "Kerala Backwater Suite",
    price: 11200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "A serene suite with dark wood textures and quiet resort calm.",
    fullDescription: "Inspired by Kerala backwater homes, this suite layers dark timber details, linen drapes, a lounge nook, and a bathtub made for longer relaxing stays.",
    amenities: ["Lounge Area", "Bathtub", "Breakfast", "Free WiFi", "Tea Setup"],
    capacity: "2-3 guests",
    beds: "1 King Bed + Sofa",
    size: "48 m2"
  },
  {
    id: 13,
    name: "Maharaja Club Room",
    price: 8900,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Classic regal styling with deeper tones and club-floor comfort.",
    fullDescription: "A polished club room with regal accents, layered lighting, king bedding, extra seating, and executive-level service designed for refined business and leisure travel.",
    amenities: ["Club Access", "King Bed", "Evening Snacks", "Free WiFi", "Desk"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "38 m2"
  },
  {
    id: 14,
    name: "Udaipur Lake View Suite",
    price: 13200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Romantic suite inspired by lakeside palaces and marble tones.",
    fullDescription: "A romantic escape with lake-inspired decor, marble textures, soft arches, elegant seating, and a warm palette drawn from palace hospitality in Udaipur.",
    amenities: ["Lake View Style", "Marble Bath", "Breakfast", "Free WiFi", "Mini Bar"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "54 m2"
  },
  {
    id: 15,
    name: "Rishikesh Retreat Room",
    price: 6100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Minimal, peaceful room for slow mornings and quiet evenings.",
    fullDescription: "A calming retreat room with natural materials, uncluttered layout, yoga-friendly space, and a light palette inspired by wellness stays in Rishikesh.",
    amenities: ["Yoga Mat", "Tea Setup", "Free WiFi", "Rain Shower", "Quiet Wing"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "30 m2"
  },
  {
    id: 16,
    name: "Mumbai Skyline Room",
    price: 7800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Modern city room with sharper styling and urban energy.",
    fullDescription: "Built for fast city stays, this room offers skyline-inspired decor, focused lighting, a smart desk zone, minibar, and polished finishes suited to Mumbai business travel.",
    amenities: ["City View", "Desk", "Mini Bar", "Free WiFi", "Smart TV"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "31 m2"
  },
  {
    id: 17,
    name: "Darjeeling Tea Garden Room",
    price: 7000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Fresh mountain tones and plantation-inspired quiet comfort.",
    fullDescription: "This room brings together tea-estate calm, misty green hues, wooden textures, window seating, and a slower mountain retreat mood.",
    amenities: ["Window Seat", "Breakfast", "Free WiFi", "Tea Service", "Mountain Style"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "32 m2"
  },
  {
    id: 18,
    name: "Kashmir Walnut Suite",
    price: 11800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616594039964-3d41277dbfc7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Rich walnut wood tones and warm textile layering throughout.",
    fullDescription: "A plush suite inspired by Kashmiri craftsmanship, with walnut-style finishes, thick drapery, embroidered accents, and deep winter-comfort textures.",
    amenities: ["Suite Lounge", "Craft Decor", "Breakfast", "Free WiFi", "Bathtub"],
    capacity: "2-3 guests",
    beds: "1 King Bed + Sofa",
    size: "50 m2"
  },
  {
    id: 19,
    name: "Pune Business Club Room",
    price: 6900,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Clean-lined room for business travel with practical comforts.",
    fullDescription: "A quiet club room with an efficient desk layout, premium bedding, express laundry, modern storage, and details tailored to mid-week business trips.",
    amenities: ["Work Desk", "Express Laundry", "Free WiFi", "Smart TV", "Breakfast"],
    capacity: "2 guests",
    beds: "1 King Bed",
    size: "33 m2"
  },
  {
    id: 20,
    name: "Jodhpur Blue City Room",
    price: 7500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Warm blue accents and desert-city textures with modern comfort.",
    fullDescription: "A room influenced by Jodhpur color palettes, featuring blue accent textures, warm wood, quiet lighting, and balanced modern comfort for leisure stays.",
    amenities: ["City View", "Tea Setup", "Free WiFi", "Rain Shower", "Smart TV"],
    capacity: "2 guests",
    beds: "1 Queen Bed",
    size: "34 m2"
  }
]
