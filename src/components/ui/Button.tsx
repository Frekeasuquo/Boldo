import React from 'react';

// Define the props for the Button component
interface ButtonProps {
    label: string; // Text to display on the button
    onClick?: () => void; // Function to execute on click
    disabled?: boolean; // Disable the button
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'page'; // Different styles for the button
    className?: string; // Additional custom class for styling
    type?: 'button' | 'submit' | 'reset'; // Button type
}

// Button component
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    variant = 'primary',
    className = '',
    type = 'button',
}) => {
  // Define styles for each variant
    const variantClasses = {
        primary: 'bg-buttonColor text-black',
        secondary: 'bg-background text-white',
        danger: 'bg-white text-black',
        success: 'bg-darkBlue text-white',
        page: 'bg-page text-black'
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-full focus:ring-1 focus:ring-offset-1 text-s font-bold font-sans ${
                variantClasses[variant]
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
        {label}
        </button>
    );
};

export default Button;
