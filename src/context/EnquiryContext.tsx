import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { PackageEnquiryModal } from '../components/modals/PackageEnquiryModal';

interface EnquiryModalOptions {
  title: string;
  subtitle?: string;
  type?: 'package' | 'destination' | 'general';
}

export interface EnquiryContextType {
  openEnquiry: (options: EnquiryModalOptions | string) => void;
  closeEnquiry: () => void;
}

export const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export const EnquiryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<EnquiryModalOptions>({
    title: 'Custom Travel Inquiry',
    subtitle: 'Share your travel desires with our dedicated concierge.',
    type: 'general',
  });

  const openEnquiry = (options: EnquiryModalOptions | string) => {
    if (typeof options === 'string') {
      setModalData({
        title: options,
        subtitle: 'Our private travel concierge will design your personalized itinerary.',
        type: 'general',
      });
    } else {
      setModalData(options);
    }
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryContext.Provider value={{ openEnquiry, closeEnquiry }}>
      {children}
      <PackageEnquiryModal
        isOpen={isOpen}
        onClose={closeEnquiry}
        title={modalData.title}
        subtitle={modalData.subtitle}
        type={modalData.type}
      />
    </EnquiryContext.Provider>
  );
};

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};
