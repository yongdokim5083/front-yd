'use client';
import { redirect } from 'next/navigation';
import React, { useActionState } from 'react';
import { updateName } from '../api/test';
import './button.css';

export default function Actions3() {
  const [error, submitAction, isPending] = useActionState(
    async (previousState: any, formData: FormData) => {
      const error = await updateName(formData.get('name') as string);
      if (error) {
        return error;
      }
      redirect('/path');
    },
    false
  );

  return (
    <form action={submitAction}>
      <input type='text' name='name' value={'김용도'} />
      <button
        type='submit'
        disabled={isPending}
        className='button-1'
        role='button'
      >
        Update
      </button>
      {error && <p>{error ? 'true' : 'false'}</p>}
    </form>
  );
}
