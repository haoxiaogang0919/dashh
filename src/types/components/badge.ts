import React from 'react';

export interface ActionButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}
