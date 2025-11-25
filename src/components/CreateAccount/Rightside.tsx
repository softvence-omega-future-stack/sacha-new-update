import { useState } from 'react';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

// IMPORTANT: This path must be correct based on where your image is located relative to this component file.
// Assuming the user has a logo at this path.
import logo from '../../assets/main-logo.png'; 

// --- Spinner/Loader Component ---
const Spinner: React.FC = () => (
    <svg 
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
    >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
    </svg>
);

// --- Toast Notification Component ---
const Toast = ({ message, type, onClose }: { message: string; type: string; onClose: () => void }) => {
    const baseClasses = "fixed top-5 right-5 z-50 p-4 rounded-lg shadow-xl text-white flex items-center transition-opacity duration-300";
    let classes = '';

    if (type === 'success') {
        classes = 'bg-green-500';
    } else if (type === 'error') {
        classes = 'bg-red-500';
    } else {
        classes = 'bg-gray-700';
    }

    return (
        <div className={`${baseClasses} ${classes}`}>
            <CheckCircle size={20} className="mr-2" />
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-white opacity-80 hover:opacity-100 font-bold text-lg">
                &times;
            </button>
        </div>
    );
};


// --- InputField Component ---
const InputField = ({ label, placeholder, type = 'text', value, onChange, isPassword = false, isPhone = false, name }: { label: string, placeholder: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, isPassword?: boolean, isPhone?: boolean, name: string }) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;
    
    if (isPhone) {
        return (
            <div className="space-y-1">
                <label htmlFor={name} className="text-gray-700 text-sm font-medium">{label}</label>
                <div className="flex border border-gray-300 rounded-lg p-2.5 transition-all">
                    <div className="flex items-center space-x-2 pr-2 border-r border-gray-300">
                        {/* Mock flag icon */}
                        <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-4 h-3" />
                        <span className="text-gray-700 text-xs">▼</span>
                    </div>
                    <input
                        id={name} name={name} type="tel" placeholder={placeholder} value={value} onChange={onChange}
                        className="flex-1 min-w-0 px-2 focus:outline-none text-sm text-gray-800 placeholder-gray-400" 
                    />
                </div>
            </div>
        );
    }
    
    return (
        <div className="space-y-1">
            <label htmlFor={name} className="text-gray-700 text-sm font-medium">{label}</label>
            <div className="relative">
                <input
                    id={name} name={name} type={inputType} placeholder={placeholder} value={value} onChange={onChange}
                    className={`w-full border border-gray-300 focus:outline-none rounded-lg p-2.5 text-sm text-gray-800 placeholder-gray-400 transition-all pl-3`}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
        </div>
    );
};

// --- Custom Role Button (Tab) Component ---
const RoleButton = ({ role, label, description, isSelected, onClick }: { role: string, label: string, description: string, isSelected: boolean, onClick: (role: string) => void }) => (
    <label
        onClick={() => onClick(role)}
        className={`flex flex-col items-start p-4 rounded-lg w-full text-left transition-all duration-200 border-2 cursor-pointer ${
            isSelected
                ? 'border-blue-600 bg-blue-50/50' 
                : 'border-gray-300 hover:border-blue-200' 
        }`}
    >
        <div className="flex items-center">
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all mr-2 ${
                isSelected ? 'border-blue-600' : 'border-gray-400'
            }`}>
                {/* The blue filled circle for selected state */}
                {isSelected && <div className="w-2 h-2 rounded-full bg-blue-600" />}
            </div>
            <span className="ml-1 font-semibold text-base text-gray-800">{label}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1 pl-7">{description}</p>
    </label>
);


// --- Main Registration Form Component (Rightside) ---
const Rightside = () => {
    const [userRole, setUserRole] = useState('tenant'); 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        receiveNews: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });

    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    
    const showToast = (message: string, type = 'success') => {
        setToast({ visible: true, message, type });
        // Auto-hide the toast after 4 seconds
        setTimeout(() => {
            setToast(prev => ({ ...prev, visible: false }));
        }, 4000);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        // Basic validation checks
        if (!formData.acceptTerms) {
            showToast('Please accept the terms of use and privacy policy.', 'error');
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            showToast('Passwords do not match.', 'error');
            return;
        }

        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsLoading(false);

        // Success simulation
        showToast('Account created successfully!', 'success');
        
        console.log('Form submission completed for:', { ...formData, userRole });
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-3">
            {/* Toast Render */}
            {toast.visible && <Toast message={toast.message} type={toast.type} onClose={() => setToast(prev => ({ ...prev, visible: false }))} />}

            <div className="w-full max-w-xl bg-white rounded-xl p-5 md:p-7">
                
                {/* Header (Matching Image Content) */}
                <div className="text-center lg:text-left mb-6"> 
                    <div className="flex justify-center lg:justify-start">
                        <img src={logo} alt="HelloAppart Logo" className="h-10 w-auto" />
                    </div>
                    
                    <h1 className="text-3xl font-medium text-[#061251] mt-4">
                        Create your account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1 lg:text-left ">
                        Create your profile on My Appart and access rentals or tenants that match your criteria in just a few clicks.
                    </p>
                </div>

                {/* --- Role Selector (Tabs) - The missing buttons implemented --- */}
                <div className="flex space-x-4 mb-6">
                    <RoleButton 
                        role="tenant" 
                        label="I Am A Tenant" 
                        description="And I'm looking for a place to rent."
                        isSelected={userRole === 'tenant'}
                        onClick={setUserRole}
                    />
                    <RoleButton 
                        role="owner" 
                        label="I Am The Owner" 
                        description="And I'm looking for a tenant."
                        isSelected={userRole === 'owner'}
                        onClick={setUserRole}
                    />
                </div>
            

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* --- Input Fields --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <InputField label="First Name" name="firstName" placeholder="eg: John" value={formData.firstName} onChange={handleChange} />
                        <InputField label="Last Name" name="lastName" placeholder="eg: Deo" value={formData.lastName} onChange={handleChange} />
                    </div>
                    {/* Placeholder updated to match image: "Enter your email or phone" */}
                    <InputField label="Email" name="email" placeholder="Enter your email or phone" type="text" value={formData.email} onChange={handleChange} />
                    <InputField label="Phone" name="phone" placeholder="1234" type="tel" value={formData.phone} onChange={handleChange} isPhone={true} />
                    <InputField label="Choose Password" name="password" placeholder="**********" value={formData.password} onChange={handleChange} isPassword={true} />
                    <InputField label="Confirm Password" name="confirmPassword" placeholder="**********" value={formData.confirmPassword} onChange={handleChange} isPassword={true} />

                    {/* --- Checkboxes --- */}
                    <div className="pt-1 space-y-2">
                        <div className="flex items-start">
                            <input id="acceptTerms" name="acceptTerms" type="checkbox" checked={formData.acceptTerms} onChange={handleChange} className="mt-1 w-4 h-4 text-blue-600 border-[#D0D5DD] rounded-lg focus:ring-blue-500" />
                            <label htmlFor="acceptTerms" className="ml-3 text-xs text-gray-500">I accept the <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">terms of use</a> and the <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">privacy policy.</a></label>
                        </div>
                        <div className="flex items-center">
                            <input id="receiveNews" name="receiveNews" type="checkbox" checked={formData.receiveNews} onChange={handleChange} className="w-4 h-4 text-blue-600 border-[#D0D5DD] rounded-lg focus:ring-blue-500" />
                            <label htmlFor="receiveNews" className="ml-3 text-xs text-gray-500">I would like to receive HelloAppart news and offers</label>
                        </div>
                    </div>

                    {/* --- Sign Up Button (Updated with Loader) --- */}
                    <button
                        type="submit"
                        disabled={isLoading} 
                        className={`w-full text-white py-2.5 mt-3 rounded-lg font-semibold text-base transition-colors flex items-center justify-center ${
                            isLoading 
                                ? 'bg-blue-400 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <Spinner />
                                Please wait...
                            </>
                        ) : (
                            'SIGN UP'
                        )}
                    </button>
                </form>

                {/* --- Sign In Link --- */}
                <p className="text-center text-md font-sans text-gray-500 mt-4">
                    Already have an account? <a href="/pages/login" className="text-blue-600 hover:text-blue-700 font-semibold">Sign In!</a>
                </p>

            </div>
        </div>
    );
};

export default Rightside;