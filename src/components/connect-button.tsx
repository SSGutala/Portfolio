"use client";

import { useState } from "react";
import { Button, type ButtonProps } from '@/components/ui/button';
import { ConnectModal } from '@/components/connect-modal';

interface ConnectButtonProps extends Omit<ButtonProps, 'onClick'> {
  children: React.ReactNode;
}

export function ConnectButton({ children, ...props }: ConnectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} {...props}>
        {children}
      </Button>
      <ConnectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
}
