import { cn } from '@/lib/utils';

interface MaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthContainer = ({
  children,
  className,
}: MaxWidthContainerProps) => {
  return <div className={cn('w-[90%] max-w-7xl', className)}>{children}</div>;
};
