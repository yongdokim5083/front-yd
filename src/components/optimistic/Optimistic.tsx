'use client';

import React, { useOptimistic } from 'react';
import { updateNameOptimistic } from '../../app/api/test';
import './button.css';

export default function Optimistic({
  currentName,
  onUpdateName,
}: {
  currentName: string;
  onUpdateName: (value: string) => void;
}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async (formData: { get: (arg0: string) => any }) => {
    const newName = formData.get('name');
    setOptimisticName(newName);
    const updatedName = await updateNameOptimistic(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type='text'
          name='name'
          disabled={currentName !== optimisticName}
        />
      </p>
      {currentName !== optimisticName ? '달라요' : '같아요'}
    </form>
  );
}
