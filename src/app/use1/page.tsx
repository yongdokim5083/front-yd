'use client';

import { Suspense, use } from 'react';
import Todos from '@/components/use/Todos';
import { themeContext } from '../Provider';

export default function Page() {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.

  const theme = use(themeContext);

  return (
    <>
      <Suspense fallback={<div>Something Wrong</div>}>
        <Todos border={theme.border} />
      </Suspense>
    </>
  );
}
