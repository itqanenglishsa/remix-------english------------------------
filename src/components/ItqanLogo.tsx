import React from 'react';

interface ItqanLogoProps {
  variant?: 'default' | 'white' | 'blue' | 'coral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const ItqanLogo: React.FC<ItqanLogoProps> = ({
  size = 'md',
  className = ''
}) => {
  // تحديد الارتفاع حسب الحجم المحدد
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-16'
  };

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img 
        src="/logo.png" 
        alt="إتقان ENGLISH" 
        className={`${sizes[size]} w-auto object-contain`}
      />
    </div>
  );
};