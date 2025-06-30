import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'official' | 'stamp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'font-mono font-medium transition-gentle focus-visible-enhanced inline-flex items-center justify-center border';
  
  const variantClasses = {
    primary: 'bg-seal-600 text-white border-seal-600 hover:bg-seal-700 hover:border-seal-700',
    secondary: 'bg-ink-600 text-white border-ink-600 hover:bg-ink-700 hover:border-ink-700',
    outline: 'border-2 border-seal-600 text-seal-600 bg-white hover:bg-seal-600 hover:text-white',
    official: 'bg-white border-2 border-border text-ink-primary hover:border-seal-600 hover:text-seal-600 shadow-paper',
    stamp: 'bg-seal-600 text-white border-2 border-seal-800 shadow-stamp hover:bg-seal-700 relative overflow-hidden'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider',
    md: 'px-6 py-3 text-sm uppercase tracking-wide',
    lg: 'px-8 py-4 text-base uppercase tracking-wide'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:bg-current hover:border-current' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabledClasses} 
        ${className}
      `}
    >
      {variant === 'stamp' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

// Botón específico para sellos oficiales
interface StampButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  corners?: boolean;
}

export const StampButton = ({ 
  children, 
  onClick, 
  className = '',
  disabled = false,
  corners = true
}: StampButtonProps) => {
  return (
    <div className="relative inline-block">
      <Button
        variant="stamp"
        onClick={onClick}
        disabled={disabled}
        className={`relative ${className}`}
      >
        {children}
      </Button>
      
      {corners && (
        <>
          {/* Esquinas decorativas */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-seal-800"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-seal-800"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-seal-800"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-seal-800"></div>
        </>
      )}
    </div>
  );
};

// Botón de archivo/documento
interface FileButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
}

export const FileButton = ({ 
  children, 
  onClick, 
  icon,
  className = '',
  disabled = false
}: FileButtonProps) => {
  const defaultIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );

  return (
    <Button
      variant="official"
      onClick={onClick}
      disabled={disabled}
      className={`space-x-2 ${className}`}
    >
      {icon || defaultIcon}
      <span>{children}</span>
    </Button>
  );
};