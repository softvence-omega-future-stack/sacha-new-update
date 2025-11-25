import { Heart } from 'lucide-react';
import  { useState } from 'react';

// Icon placeholders (Unchanged)
const FurnitureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l-7-7-7 7m7-7v10m0-10h3m-3 10v4m0 0h4m-4 0v4m-4-4h4m-4 0v4m4-4h4m-4 0v4m4-4h4"
    />
  </svg>
);

const RoomsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    />
  </svg>
);

const AreaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const ApartmentCard = ({ apartment }: { apartment: any }) => {
  const { price, frequency, title, location, details } = apartment;
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [message, setMessage] = useState('');

  const handleViewDetails = () => {
    console.log(`Viewing details for apartment: ${title}`);
    alert(`Navigating to details page for ${title}`);
  };

  const handleFavorite = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);

    console.log(`Toggled favorite for apartment: ${title} to ${newState}`);
    
    // Set the sweet success message for a short period
    if (newState) {
      setMessage('✅ Saved successfully!');
    } else {
      setMessage('🗑️ Removed from favorites.');
    }
    
    // Clear the message after 2.5 seconds
    setTimeout(() => {
      setMessage(''); 
    }, 2500);
  };

  const DetailItem = ({ icon: Icon, text }: { icon: React.ElementType, text: string }) => (
    <div className="flex items-center text-xs text-gray-500">
      <Icon className="mr-1" />
      <span>{text}</span>
    </div>
  );

  return (
   
    <div className="relative bg-white rounded-xl hover:shadow-xl
     transition duration-300 overflow-hidden border border-gray-100">
      
      {/* 🚀 TOAST Notification Component */}
      {message && (
        <div 
          className="fixed top-5 right-5 z-50 p-4 bg-green-500 text-white rounded-lg shadow-xl 
                     transform transition-transform duration-500 ease-out animate-slide-in"
        
        >
          {message}
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-48">
        <img
          src={`https://picsum.photos/400/300?random=${apartment.id}`}
          alt={title}
          className="h-full w-full object-cover" 
        />
        {/* Favorite Icon */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-red-500 transition duration-150"
        >
        
          <Heart className={isFavorite ? 'text-red-500 fill-current' : 'text-white'} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price and Frequency */}
        <p className="text-xl font-bold text-gray-900">
          {price}
          <span className="text-sm font-light text-gray-500">{frequency}</span>
        </p>

        {/* Title */}
        <h3 className="mt-1 text-lg font-medium text-gray-800">{title}</h3>

        {/* Location */}
        <p className="text-sm text-gray-500 mb-4">📍 {location}</p>

        {/* Details Icons */}
        <div className="flex space-x-4 border-b border-gray-100 pb-4 mb-4">
          <DetailItem icon={FurnitureIcon} text="Furniture" />
          <DetailItem icon={RoomsIcon} text={`${details.rooms} Rooms`} />
          <DetailItem icon={AreaIcon} text={`${details.area}`} />
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className={`w-full py-3 font-semibold rounded-lg transition duration-150 
            ${
              apartment.id === 2
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;