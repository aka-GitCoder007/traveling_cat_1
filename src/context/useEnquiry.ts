import { useContext } from 'react';
import { EnquiryContext } from './EnquiryContext';
import type { EnquiryContextType } from './EnquiryContext';

export const useEnquiry = (): EnquiryContextType => {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
};

