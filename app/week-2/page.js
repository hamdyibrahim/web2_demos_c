import Title from "./title";
export default function Page() {
  let a = 5;
  let b = 10;
  return (
    <main>
      <h1>Week 2 Demo</h1>
      <Title />
      <p>Congratulations, you created the first Next project!</p>
      <p>
        Sum of {a} and {b} = {a + b}
      </p>
    </main>
  );
}
