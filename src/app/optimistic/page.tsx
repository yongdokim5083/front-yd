'use client';

import React, { useState } from 'react';
import Optimistic from '../../components/optimistic/Optimistic';

export default function Page() {
  const [name, setName] = useState('김용도');

  return <Optimistic currentName={name} onUpdateName={setName} />;
}
