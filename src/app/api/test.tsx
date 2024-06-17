export const updateName = (name: string) => {
  console.log('들어오는감? ', name);
  sleep(2000);
  return true;
};

export const updateNameOptimistic = (name: string) => {
  console.log('들어오는감? ', name);
  sleep(5000);
  return name;
};

function sleep(ms: number) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}
