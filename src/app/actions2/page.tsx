'use client';
import { redirect } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { updateName } from '../api/test';
import './button.css';

// Before Actions
export default function Actions2({}) {
  const [name, setName] = useState('김용도');
  const [error, setError] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
      redirect('/path');
    });
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
