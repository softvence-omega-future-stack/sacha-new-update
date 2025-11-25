import { useState } from 'react';

// --- Icon Components ---

// Location Icon (for the Location field)
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-blue-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

// Chevron Down Icon (the required dropdown arrow)
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 pointer-events-none"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Custom Select Component ---

const CustomSelect = ({ label, value, onChange, options, placeholder, icon, isLocation = false } : { label: string, value: string, onChange: (value: string) => void, options: string[], placeholder: string, icon?: React.ReactNode, isLocation?: boolean }) => (

  <div className=" w-full bg-white rounded-xl hover:shadow-xl 
  transition-shadow duration-300  ">
    <div className="p-3">
      {/* Label: Property type, Location, Price Range */}
      <label className="text-sm text-gray-500 block mb-1 font-medium">
        {label}
      </label>
      
      {/* Value/Input area: Flex container for content and dropdown arrow */}
      <div className="relative flex items-center">
        {/* Optional Icon (e.g., Location Icon) */}
        {icon && <span className="mr-2">{icon}</span>}
        
        {/* The core select/input field area */}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
      
          className="w-full appearance-none bg-transparent focus:outline-none text-gray-800 font-semibold cursor-pointer"
        >
          <option value="" disabled className="text-gray-400 font-normal">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-gray-800">
              {option}
            </option>
          ))}
        </select>
        
        {/* Dropdown Icon: Absolute positioning to place it on the right edge */}
        {/* We only show the dropdown icon if it's NOT the location field (mimicking the image's design) */}
        {!isLocation && (
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <ChevronDownIcon />
            </span>
        )}

      </div>
    </div>
  </div>
);

// --- Main Apartment Search Component ---

const ApartmentSearch = ({ onSearch = () => alert('Searching...') }) => {
  const [propertyType, setPropertyType] = useState('');
  // Corrected spelling to match image's 'Dhanmondi, Dhaka'
  const [location, setLocation] = useState('Dhanmondi, Dhaka'); 
  const [priceRange, setPriceRange] = useState('€10,000 - €200,000');


  return (
    <div className="w-full  relative -top-20 ">
      <div 
        className="w-full bg-[#F0F5FF] p-2 sm:p-4 rounded-2xl flex flex-wrap lg:flex-nowrap
         gap-2 items-center"
        // Applying the shadow and rounded corners for the main search bar itself
      >
        {/* Property Type Select */}
        <CustomSelect
          label="Property type"
          value={propertyType}
          onChange={setPropertyType}
          options={['Apartment', 'House', 'Condo', 'Townhouse']}
          placeholder="Select type"
        />

        {/* Location Select (mimicking input with select style, uses Location Icon) */}
        {/* Note: The image shows a small blue compass icon, not a standard dropdown arrow */}
        <CustomSelect
          label="Location"
          value={location}
          onChange={setLocation}
          options={['Dhanmondi, Dhaka', 'Gulshan, Dhaka', 'Banani, Dhaka', 'Mohakhali, Dhaka']}
          placeholder="Enter location"
          icon={<LocationIcon />}
          isLocation={true} // Flag to hide the standard dropdown arrow
        />

        {/* Price Range Select */}
        <CustomSelect
          label="Price Range"
          value={priceRange}
          onChange={setPriceRange}
          options={['€10,000 - €200,000', '€200,001 - €500,000', '€500,001 - €1,000,000', 'Over €1,000,000']} placeholder={''}        />

        {/* Modify Search Button */}
        <button
          onClick={onSearch}
          // The button uses `shrink-0` to prevent it from shrinking and has the specific blue background
          className="w-full lg:w-auto shrink-0 px-8 py-5 bg-blue-600 text-white font-bold text-sm uppercase rounded-xl hover:bg-blue-700 transition duration-150 shadow-lg"
        >
          MODIFY SEARCH
        </button>
      </div>
    </div>
  );
};

export default ApartmentSearch;