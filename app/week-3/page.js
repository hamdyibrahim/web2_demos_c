import Dog from "./dog";
export default function Page() {
  // add an object(s)
  const dog1 = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    color: "Golden",
  };
  const dog2 = {
    name: "Max",
    age: 5,
    breed: "German Shepherd",
    color: "Black and Tan",
  };
  const dog3 = {
    name: "Charlie",
    age: 2,
    breed: "Beagle",
    color: "Tri-color",
  };
  return (
    <main>
      <h1 className="text-4xl font-bold text-red-500">
        Week 3 - Components and Props
      </h1>
      <h2 className="text-3xl font-bold text-blue-500">Dogs List</h2>
      <Dog dog={dog1} />
      <Dog dog={dog2} />
      <Dog dog={dog3} />
      <Dog dog={{ name: "Rocky", age: 4, breed: "Boxer", color: "Fawn" }} />
    </main>
  );
}
