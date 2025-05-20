import { Input } from '@/app/_components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { NumericFormat } from 'react-number-format';
interface InputProps {
  name: string;
  classNames?: string;
  label?: string;
  error?: string | string[];
  isAllowed?: (value: unknown) => boolean;
  placeholder?: string;
}
const InputNumber = ({ name, classNames, label, error, placeholder, isAllowed }: InputProps) => {
  return (
    <div className={cn('flex-col flex gap-2 items-start', { classNames })}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <NumericFormat
        name={name}
        customInput={Input}
        thousandSeparator
        isAllowed={isAllowed}
        placeholder={placeholder}
        datatype="BigNumber"
      />
      <p aria-live="polite">{error}</p>
    </div>
  );
};

export default InputNumber;
