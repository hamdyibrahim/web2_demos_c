export default function Dog({ dog }) {
  const { name, age, breed, color } = dog; // destructure dog propos
  return (
    <section className="bg-slate-400 p-4 w-1/5 m-4">
      <h2 className="font-bold text-blue-700">Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Breed: {breed}</p>
      <p>Color: {color}</p>
    </section>
  );
}
