"use client"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQueryHook } from '@/hooks/useCommonHooks';
import { FC, ReactElement, useEffect, useState } from 'react';

interface DrawerProps {
  txt: ReactElement | string;
  title: string;
  description?: ReactElement;
  children?: ReactElement;
}

const DrawerCustom: FC<DrawerProps> = ({ txt, title, description, children }) => {
  const { isMobile } = useMediaQueryHook();
  const [open, setOpen] = useState(false);

  // Auto-close drawer when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <Drawer 
      preventScrollRestoration 
      direction={isMobile ? 'bottom' : 'right'}
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger>
        <span className="md:hidden cursor-pointer block p-2 bg-primary text-black rounded-sm" onClick={() => setOpen(true)}>
          {txt}
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerCustom;
