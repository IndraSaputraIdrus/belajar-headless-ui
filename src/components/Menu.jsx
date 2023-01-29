import { Menu } from "@headlessui/react";

const list = ["Profile", "Settings", "Help", "Logout"];

export default function MyMenu() {
  return (
    <div className="my-4">
      <h1>Menu (Dropdown)</h1>
      <Menu as="div" className="relative">
        <Menu.Button className="bg-indigo-500 text-white px-3 py-2 rounded-lg">
          More
        </Menu.Button>
        <Menu.Items className="bg-white z-10 absolute top-full w-56 mt-2">
          <div className="p-1 border rounded-lg">
            {list.map((item) => (
              <Menu.Item key={item} className="flex px-3 py-2 rounded-lg">
                {({ active }) => (
                  <a className={`${active && "bg-indigo-200"}`} href="#">
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
