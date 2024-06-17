'use client';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { updateName } from '../api/test';
import './button.css';

// Before Actions
export default function Actions1({}) {
  const [name, setName] = useState('김용도');
  const [error, setError] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);

    console.log('error : ', error);

    if (error) {
      setError(error);
      return;
    }
    redirect('/path');
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button
        onClick={handleSubmit}
        disabled={isPending}
        className='button-1'
        role='button'
      >
        Update
      </button>
      {error && <p>{error ? 'true' : 'false'}</p>}
    </div>
  );
}
