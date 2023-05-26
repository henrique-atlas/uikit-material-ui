import React from 'react';
import { Button as MuiButton } from '@mui/material';
 
export interface ButtonProps {
  label: string;
}
 
export const Button = ({ label, ...rest }: ButtonProps) => (
  <MuiButton {...rest}>{label}</MuiButton>
);