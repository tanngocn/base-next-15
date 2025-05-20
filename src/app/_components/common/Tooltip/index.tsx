import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';

interface TooltipProps {
  anchor: string;
  content: string | ReactElement;
  children: string | ReactElement;
  place?: PlacesType | undefined;
  classNames?: string;
}

const TooltipCustom: FC<TooltipProps> = ({ anchor, content, place, children, classNames }) => {
  return (
    <>
      <a data-tooltip-id={anchor} className={cn(classNames)}>
        {children}
      </a>
      <Tooltip anchorSelect={`#${anchor}`} place={place}>
        {content}
      </Tooltip>
    </>
  );
};

export default TooltipCustom;
