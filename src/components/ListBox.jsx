import { Listbox } from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function MyListBox() {
  const [selectedPerson, setSelecredPerson] = useState(people[0]);
  return (
    <div className="my-4 w-56">
      <h1>List Box</h1>
      <Listbox
        as="div"
        className="relative"
        value={selectedPerson}
        onChange={setSelecredPerson}
      >
        <Listbox.Button className="w-full border border-slate-800 py-2 rounded-lg">
          {selectedPerson.name}
        </Listbox.Button>
        <Listbox.Options className="absolute z-10 bg-white w-full top-full mt-2 rounded-lg p-2 border border-slate-800">
          {people.map((person) => (
            <Listbox.Option
              className="py-2 text-center hover:underline cursor-pointer"
              key={person.id}
              value={person}
              disable={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
