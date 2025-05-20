'use client';

import { useState } from 'react';
import { DialogCustom } from './index';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export const DialogExample = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('common');

  return (
    <DialogCustom
      trigger={<Button>Open Dialog</Button>}
      title="Example Dialog"
      description="This is an example dialog using Shadcn UI components."
      open={open}
      onOpenChange={setOpen}
      footer={
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={() => setOpen(false)}>
            {t('confirm')}
          </Button>
        </div>
      }
    >
      <div className="py-4">
        <p>This is the dialog content. You can put any content here.</p>
      </div>
    </DialogCustom>
  );
}; 