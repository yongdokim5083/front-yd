import { themeContext } from '@/app/Provider';
import { todoType } from '@/app/about/page';
import { use, useEffect, useState } from 'react';

export default function Comments() {
  // `use` will suspend until the promise resolves.
  //   const todo: [] = use();
  const [todos, setTodos] = useState<todoType[]>([
    { userId: 0, id: 0, title: '', completed: true },
  ]);

  const theme = use(themeContext);

  const temp = async () => {
    const a = await fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos(json);
      }); // Not Cached
  };

  useEffect(() => {
    temp();
  }, []);

  return todos.map((todo) => (
    <p style={{ ...theme }} key={todo.id}>
      {todo.title}
    </p>
  ));
}
