'use client';

import { cn } from '@guesung/utils';
import { useScroll } from '@hooks';
import { PropsWithChildren, useState } from 'react';

interface HeaderWrapperProps {}

export default function HeaderWrapper({
  children,
}: PropsWithChildren<HeaderWrapperProps>) {
  const [isChildrenShow, setIsChildrenShow] = useState(true);
  const { scrollY: prevScrollY } = useScroll({
    callbackFn: () => {
      const currentScrollY = window.scrollY;
      setIsChildrenShow(prevScrollY > currentScrollY);
    },
  });

  return (
    <header
      className={cn(
        'className="text-body2 fixed top-0 z-10 mx-auto flex w-screen transform items-center justify-between bg-white px-20 py-4 shadow-sm transition-transform duration-300 ease-in-out dark:bg-black',
        { '-translate-y-full': !isChildrenShow }
      )}
    >
      {children}
    </header>
  );
}