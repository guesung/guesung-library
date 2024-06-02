import { cn } from '@guesung/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';
import NavLink from './NavLink';

interface ListItemProps extends ComponentProps<typeof Link> {
  coverSrc?: string;
  title: string;
  className?: string;
}

export default function ListItem({
  title,
  coverSrc,
  children,
  className,
  ...props
}: PropsWithChildren<ListItemProps>) {
  return (
    <NavLink className={cn('gap-16 p-16', className)} {...props}>
      {coverSrc && (
        <div className="w-270 relative">
          <Image
            src={coverSrc}
            fill
            alt="cover"
            objectFit="cover"
            className="rounded-8"
          />
        </div>
      )}
      <div className="flex grow flex-col gap-8">
        <div className="text-body2 font-bold">{title}</div>
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </NavLink>
  );
}
