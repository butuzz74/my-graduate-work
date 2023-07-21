export function displayDate(data) {
  const date = new Date(parseInt(data));
  return (
    date.getFullYear() +
    "." +
    (date.getMonth() + 1) +
    (date.getDate() < 10 ? ".0" + date.getDate() : date.getDate()) + " " +
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}
