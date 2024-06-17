import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';

export default async function Todos({ border }: { border: string }) {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    }); // Not Cached

  return todos.map(
    (todo: {
      id: Key | null | undefined;
      title:
        | string
        | number
        | bigint
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | Promise<AwaitedReactNode>
        | null
        | undefined;
    }) => (
      <p style={{ border: border }} key={todo.id}>
        {todo.title}
      </p>
    )
  );
}
