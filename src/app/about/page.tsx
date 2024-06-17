'use client';
import React, { useEffect, useState } from 'react';

export type todoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const About = () => {
  const [test, setTest] = useState<todoType>();
  const [test2, setTest2] = useState<todoType>();

  const temp = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTest(json);
      }); // Not Cached
    const b = await fetch('https://jsonplaceholder.typicode.com/todos/2', {
      cache: 'force-cache',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTest2(json);
      }); // Cached
  };

  useEffect(() => {
    temp();
  }, []);

  return (
    <>
      <div>{test?.userId}</div>
      <div>{test?.id}</div>
      <div>{test?.title}</div>
      <div>{test?.completed ? 'true' : 'false'}</div>
      <div>{test2?.title}</div>
    </>
  );
};

export default About;
