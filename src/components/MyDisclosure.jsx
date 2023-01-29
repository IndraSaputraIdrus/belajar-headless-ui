import { Disclosure } from "@headlessui/react";

export default function MyDisclosure() {
  return (
    <div className="my-4">
      <h1>Disclosure</h1>
      <div className="flex flex-col gap-1 bg-slate-800 w-72 p-1 rounded-lg">
        <Disclosure>
          <Disclosure.Button className="py-2 px-4 bg-white w-full rounded-md">
            Apakah masih tersedia?
          </Disclosure.Button>
          <Disclosure.Panel className="text-white p-2">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure>
          <Disclosure.Button className="py-2 px-4 bg-white w-full rounded-md">
            Apakah masih tersedia?
          </Disclosure.Button>
          <Disclosure.Panel className="text-white p-2">
            Yes! You can purchase a license that you can share with your entire
            team.
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </div>
  );
}
