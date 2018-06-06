export const signin = async () => {
  const response = await fetch(`http://127.0.0.1:3000/api/signin`);
  console.log;
  const { data } = response.json();
  console.log(data);
};
