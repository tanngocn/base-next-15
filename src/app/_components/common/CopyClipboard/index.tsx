import { Button } from '@/components/ui/button';
import { toastError, toastSuccess } from '@/hooks/useToast';
import { FC } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';

interface CopyClipboardProps {
  text: string;
}
const CopyClipboard: FC<CopyClipboardProps> = ({ text }) => {
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toastSuccess('Copied!');
      })
      .catch((error) => {
        toastError('Failed to copy!' + error);
      });
  };
  return <Button onClick={() => handleCopy(text)}> {copiedText ? 'Copied' : 'Copy'} </Button>;
};

export default CopyClipboard;