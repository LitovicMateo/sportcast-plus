export function transformDate(postDate: string): string {

  const date = new Date(postDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const returnDate = `${day}/${month}/${year}`

  return returnDate

}