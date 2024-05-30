/* exported truncate */
function truncate(length: number, str: string): string {
  return str.slice(0, length) + '...';
}
