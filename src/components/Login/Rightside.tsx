import { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react"; // Added CheckCircle for success icon

// IMPORTANT: This path must be correct based on where your image is located relative to this component file.
import logo from "../../assets/main-logo.png";

// --- Spinner/Loader Component ---
const Spinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// --- Toast Notification Component ---
const Toast = ({ message, type, onClose }: { message: string; type: string; onClose: () => void }) => {
  const baseClasses =
    "fixed top-5 right-5 z-50 p-4 rounded-lg shadow-xl text-white flex items-center transition-opacity duration-300";
  let classes = "";

  if (type === "success") {
    classes = "bg-green-500";
  } else if (type === "error") {
    classes = "bg-red-500";
  } else {
    classes = "bg-gray-700";
  }

  return (
    <div className={`${baseClasses} ${classes}`}>
      <CheckCircle size={20} className="mr-2" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white opacity-80 hover:opacity-100 font-bold text-lg"
      >
        &times;
      </button>
    </div>
  );
};

// --- InputField Component (No changes needed, included for completeness) ---
const InputField = ({ // Fix: Add explicit type for props
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  isPassword = false,
  isPhone = false,
  name,
}: { label: string; placeholder: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; isPassword?: boolean; isPhone?: boolean; name: string; }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  if (isPhone) {
    return (
      <div className="space-y-1">
        <label htmlFor={name} className="text-gray-700 text-sm font-medium">
          {label}
        </label>
        <div className="flex border border-gray-300 rounded-lg p-2.5 transition-all">
          <div className="flex items-center space-x-2 pr-2 border-r border-gray-300">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-4 h-3"
            />
            <span className="text-gray-700 text-xs">▼</span>
          </div>
          <input
            id={name}
            name={name}
            type="tel"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-1 min-w-0 px-2 focus:outline-none text-sm text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-gray-700 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full border border-gray-300 focus:outline-none rounded-lg p-2.5 text-sm text-gray-800 placeholder-gray-400 transition-all pl-3`}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

// --- Main Registration Form Component (Rightside) ---
const Rightside = () => {
  const [userRole] = useState("tenant");
 const [formData, setFormData] = useState<{
    email: string;
    password: string;
    acceptTerms: boolean;
  }>({ email: '', password: '', acceptTerms: false });  const [isLoading, setIsLoading] = useState(false); // NEW: Loader state
  const [toast, setToast] = useState({ visible: false, message: "", type: "" }); // NEW: Toast state

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const showToast = (message: string, type = "success") => {
    setToast({ visible: true, message, type });
    // Auto-hide the toast after 4 seconds
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    // Simulate API call delay (2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false); // Stop loading

    // Form submission successful logic
    showToast("Login successfully!", "success");

    // You would typically redirect or perform another action here
    console.log("Form submission completed for:", { ...formData, userRole });
  };

  // Custom Role Button (Tab) Component

  return (
    <div className="flex justify-center items-center min-h-screen p-3">
      {/* Toast Render */}
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
        />
      )}

      <div className="w-full max-w-xl bg-white rounded-xl p-5 md:p-7">
        {/* Header */}
        <div className="text-center lg:text-left mb-6">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Main Logo" className="h-10 w-auto" />
          </div>

          <h1 className="text-3xl font-medium text-[#061251] mt-4">
            Login
          </h1>
          <p className="text-sm text-gray-500 mt-1 lg:text-left ">
            Log in to your account to resume your search 🔍
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* --- Input Fields --- (Same as before) */}
        
          <InputField
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
      
          <InputField
            label="Choose Password"
            name="password"
            placeholder="**********"
            value={formData.password}
            onChange={handleChange}
            isPassword={true}
          />
       

          {/* --- Checkboxes --- */}
          <div className="pt-1 space-y-2 flex py-2 items-center justify-between">
            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-[#646492] border-[#D0D5DD] rounded-lg focus:ring-blue-500"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-3 text-sm text-gray-500"
              >
                Remember Me
              
              </label>
            </div>
            <div className="flex items-center">
             <a href="/pages/ForgatePassword" className=" text-sm text-[#646492] hover:text-blue-700 font-medium" > Forgate password </a>
             
            </div>
          </div>

          {/* --- Sign Up Button (Updated with Loader) --- */}
          <button
            type="submit"
            disabled={isLoading} // Disable button when loading
            className={`w-full text-white py-2.5 mt-3 rounded-lg font-semibold text-base transition-colors flex items-center justify-center ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed" // Lighter color when loading/disabled
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                <Spinner />
                Please wait...
              </>
            ) : (
              "LOG IN"
            )}
          </button>
        </form>

        {/* --- Sign In Link --- */}
        <p className="text-center text-md font-sans text-[#646492] mt-4">
          Don't have an account yet? 
          <a
            href="/pages/create-account"
            className="text-[#1077FF] ml-0.5 hover:text-blue-700 "
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Rightside;
