"use client";

import { useState } from "react";

//Read JSON file
import dogsData from "./dogs.json";

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(null);

  let dogsCopy = [...dogsData];

  /* dogsCopy.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });*/

  dogsCopy.sort((a, b) => a.name.localeCompare(b.name));

  dogsCopy = dogsCopy.filter((dog) => dog.id >= 2);

  const handleClick = (id) => {
    if (selectedDogId == id) {
      setSelectedDogId(null);
    } else {
      setSelectedDogId(id);
    }
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">Week 6 - Dogs Data</h1>
      <ul>
        {dogsCopy.map((dog) => (
          <li
            key={dog.id}
            onClick={() => handleClick(dog.id)}
            className={`m-2 cursor-pointer lg:max-w-lg ${
              selectedDogId == dog.id ? "bg-slate-500" : "bg-slate-300"
            }`}
          >
            <div className="flex">
              <img
                src={dog.imageurl}
                alt={dog.name}
                className="w-24 h-24 rounded-full"
              />
              <div className="ml-4">
                <h2 className="text-xl font-bold">{dog.name}</h2>
                <p className="text-blue-950">{dog.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>You selected {selectedDogId}</div>
    </main>
  );
}
