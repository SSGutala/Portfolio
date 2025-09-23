"use client";

import { Button, type ButtonProps } from '@/components/ui/button';

interface ConnectButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: React.ReactNode;
}

export function ConnectButton({ children, ...props }: ConnectButtonProps) {
  const handleConnectClick = () => {
    window.location.href = "mailto:sai.gutala@gmail.com";
  };

  return (
    <Button onClick={handleConnectClick} {...props}>
      {children}
    </Button>
  );
}
