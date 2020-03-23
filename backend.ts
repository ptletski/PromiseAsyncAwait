export async function backend(index: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(index + 1), 1000);
  });
}