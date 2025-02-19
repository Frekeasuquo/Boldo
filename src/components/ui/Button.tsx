import Link from 'next/link';

// Define the props for the Button component
interface ButtonProps {
    label: string; // Text to display on the button
    onClick?: () => void; // Function to execute on click (if used as a button)
    disabled?: boolean; // Disable the button
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'page'; // Different styles for the button
    className?: string; // Additional custom class for styling
    type?: 'button' | 'submit' | 'reset'; // Button type (for button use only)
    to?: string; // URL for link navigation (if used as a link)
}

// Button component
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    variant = 'primary',
    className = '',
    type = 'button',
    to
}) => {
    // Define styles for each variant
    const variantClasses = {
        primary: 'bg-buttonColor text-black',
        secondary: 'bg-background text-white',
        danger: 'bg-white text-black',
        success: 'bg-darkBlue text-white',
        page: 'bg-page text-black'
    };

    const baseClasses = `px-4 rounded-full focus:ring-1 focus:ring-offset-1 text-s font-bold font-sans`;

    // If `to` is provided, render a link; otherwise, render a button
    if (to) {
        return (
            <Link
                href={to}
                className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
            >
                {label}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;






