"use client";

import { Button, type ButtonProps } from '@/components/ui/button';

interface ConnectButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function ConnectButton({ children, ...props }: ConnectButtonProps) {
  return (
    <Button asChild {...props}>
      <a href="https://www.linkedin.com/in/sai-gutala/" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
