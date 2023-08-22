export function displayDate(data) {
  // const date = new Date(parseInt(data));
  const date = new Date(data);
  return (
    date.getFullYear() +
    "." + 
    (date.getMonth() <10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "." +
    (date.getDate() < 10 ? ".0" + date.getDate() : date.getDate()) + " " +
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}
