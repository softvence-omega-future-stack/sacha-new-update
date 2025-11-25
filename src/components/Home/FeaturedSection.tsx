import { Heart, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import furniture from '../../assets/funiture.png';
import meter from '../../assets/meter.png';
import room from '../../assets/room.png';
import featured1 from '../../assets/featured1.png'
import featured2 from '../../assets/featured2.png'
import featured3 from '../../assets/featured3.png'
import featured4 from '../../assets/featured4.png'
import featured5 from '../../assets/featured5.png'
import featured6 from '../../assets/featured6.png'

interface Apartment {
    id: number;
    image: string;
    price: number;
    title: string;
    location: string;
    furniture: string;
    rooms: string;
    area: string;
    isFavorite?: boolean;
}

const FeaturedApartments: React.FC = () => {
    const [apartments, setApartments] = useState<Apartment[]>([
        {
            id: 1,
            image: featured1,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: false
        },
        {
            id: 2,
            image: featured2,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: true
        },
        {
            id: 3,
            image: featured3,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: false
        },
        {
            id: 4,
            image: featured4,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: false
        },
        {
            id: 5,
            image: featured5,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: false
        },
        {
            id: 6,
            image: featured6,
            price: 585,
            title: 'Appartement moderne T3 - Marais',
            location: 'Malibu, California',
            furniture: 'Furniture',
            rooms: 'Rooms',
            area: '62 m2',
            isFavorite: false
        }
    ]);

    const toggleFavorite = (id: number) => {
        setApartments(apartments.map(apt =>
            apt.id === id ? { ...apt, isFavorite: !apt.isFavorite } : apt
        ));
    };

    return (
        <div className="max-w-6xl mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#1a1a4d] mb-2">
                            Featured <span className="italic font-normal">Apartments</span>
                        </h1>
                        <p className="text-base text-[#1a1a4d]">
                            Discover our selection of available apartments
                        </p>
                    </div>
                    <button className="mt-4 sm:mt-0 px-4 py-3 border-2 border-[#0612511A] text-[#1a1a4d] rounded-lg font-normal hover:bg-[#1a1a4d] hover:text-white transition-colors duration-200 text-xs">
                        VIEW ALL
                    </button>
                </div>

                {/* Apartments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="p-3 bg-[#FBFBFB] rounded-2xl">
                            <div className="rounded-2xl transition-shadow duration-300">

                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden group rounded-2xl">
                                    <img
                                        src={apartment.image}
                                        alt={apartment.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Favorite Button */}
                                    <button
                                        onClick={() => toggleFavorite(apartment.id)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${apartment.isFavorite
                                                ? 'fill-red-500 text-red-500'
                                                : 'text-gray-600'
                                                }`}
                                        />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-0 mt-6">

                                    {/* Price */}
                                    <div className="mb-3">
                                        <span className="text-3xl font-bold text-[#0d6efd]">
                                            €{apartment.price}
                                        </span>
                                        <span className="text-sm text-gray-600">/month CC</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-[#061251] mb-3">
                                        {apartment.title}
                                    </h3>

                                    {/* Location */}
                                    <div className="flex items-center gap-2 text-[#061251] mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{apartment.location}</span>
                                    </div>

                                    {/* Features */}
                                    <div className="flex items-center gap-4 mb-5 text-[#646492]">
                                        <div className="flex items-center gap-1.5">
                                            <img src={furniture} alt="image" className="w-6 h-6" />
                                            <span className="text-xs">{apartment.furniture}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <img src={room} alt="image" className="w-6 h-6" />
                                            <span className="text-xs">{apartment.rooms}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <img src={meter} alt="image" className="w-6 h-6" />
                                            <span className="text-xs">{apartment.area}</span>
                                        </div>
                                    </div>

                                    {/* View Details Button */}
                                    <button className="w-full py-1.5 border border-[#06125133] text-[#061251] rounded-xl font-medium hover:bg-[#1a1a4d] hover:text-white transition-colors duration-200">
                                        View Details
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FeaturedApartments;
