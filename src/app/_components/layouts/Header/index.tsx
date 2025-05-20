'use client';

import { LanguageSwitcher } from '../../common/LanguageSwitcher';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Your logo or brand here */}
          <span className="font-bold">Your Brand</span>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          {/* Other header items */}
        </div>
      </div>
    </header>
  );
}; 