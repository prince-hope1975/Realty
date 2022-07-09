const calculateDates = () => {
  const t = new Date();
  const date = ("0" + t.getDate()).slice(-2);
  const month = ("0" + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();

  const time = `${date}/${month}/${year}`;

  console.log(time);
};
export default calculateDates;
