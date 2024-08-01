import { Suspense } from 'react';
import {
  SuspenseWithQueryComponent,
  QueryProvider,
  IsErrorComponent,
  IsLoadingComponent,
  Loading,
} from './components';
import dynamic from 'next/dynamic';

// const SuspenseWithoutQueryComponent = dynamic(
//   () => import('./components'),
//   {
//     loading: () => <Loading />,
//   }
// );

export default function Page() {
  return (
    <QueryProvider>
      {/* <IsLoadingComponent /> */}
      {/* <IsErrorComponent /> */}
      Outer Suspense
      <Suspense fallback={<Loading />}>
        <SuspenseWithQueryComponent />
      </Suspense>
      {/* <SuspenseWithoutQueryComponent /> */}
    </QueryProvider>
  );
}