import { cn } from '@/lib/utils';

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthContainer = ({ children, className }: MaxWidthContainerProps) => {
  return (
    <div className={cn('width-[90%] max-w-7xl', className)}>{children}</div>
  );
};

export default MaxWidthContainer;
