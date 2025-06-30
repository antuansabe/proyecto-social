import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  variant?: 'default' | 'form' | 'document' | 'file';
}

export const Card = ({ 
  children, 
  className = '', 
  onClick, 
  hover = true,
  variant = 'default'
}: CardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'form':
        return 'form-box border-border bg-white/80';
      case 'document':
        return 'border-2 border-border bg-document relative';
      case 'file':
        return 'border border-border bg-white shadow-paper relative before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border before:to-transparent';
      default:
        return 'border border-border bg-white/90 shadow-paper';
    }
  };

  const hoverClasses = hover ? 'hover:shadow-lg hover:border-seal-400 transition-gentle' : '';
  const clickClasses = onClick ? 'cursor-pointer hover:bg-white' : '';

  return (
    <div
      className={`
        ${getVariantClasses()}
        ${hoverClasses}
        ${clickClasses}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export const CardHeader = ({ children, className = '', withDivider = true }: CardHeaderProps) => {
  return (
    <div className={`p-6 ${withDivider ? 'border-b border-border' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`p-6 border-t border-border ${className}`}>
      {children}
    </div>
  );
};

// Componente específico para archivos/documentos
interface FileCardProps {
  title: string;
  type: string;
  date?: string;
  status?: 'active' | 'pending' | 'archived';
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FileCard = ({ 
  title, 
  type, 
  date, 
  status = 'active', 
  children, 
  onClick,
  className = ''
}: FileCardProps) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'pending':
        return (
          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'archived':
        return (
          <svg className="w-4 h-4 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8l6 6 6-6" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getStatusBadge = () => {
    const statusColors = {
      active: 'bg-green-50 text-green-800 border-green-200',
      pending: 'bg-amber-50 text-amber-800 border-amber-200',
      archived: 'bg-gray-50 text-gray-600 border-gray-200'
    };

    const statusLabels = {
      active: 'Activo',
      pending: 'Pendiente',
      archived: 'Archivado'
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs font-mono border ${statusColors[status]}`}>
        {getStatusIcon()}
        <span className="ml-1">{statusLabels[status]}</span>
      </span>
    );
  };

  return (
    <Card variant="file" onClick={onClick} className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            {/* Icono de archivo */}
            <div className="w-10 h-12 border border-border bg-white flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-mono font-semibold text-ink-primary text-sm leading-tight">
                {title}
              </h3>
              <p className="font-mono text-xs text-ink-secondary uppercase tracking-wide mt-1">
                {type}
              </p>
              {date && (
                <p className="font-mono text-xs text-ink-400 mt-1">
                  {date}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {getStatusBadge()}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};