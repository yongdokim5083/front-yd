'use client';

import { Suspense, use } from 'react';
import Comments from '../../components/use/Comments';
import { themeContext } from '../Provider';

export default function Page() {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.

  return (
    <>
      <Suspense fallback={<div>Something Wrong</div>}>
        <Comments />
      </Suspense>
    </>
  );
}
