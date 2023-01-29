import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MySwitch() {
  const [enable, setEnable] = useState(false);
  return (
    <div>
      <h1>Switch</h1>
      <Switch
        checked={enable}
        onChange={setEnable}
        className={`${
          enable ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enable ? "translate-x-6" : "translate-x-1"
          } h-4 w-4 bg-white inline-block rounded-full transform transition`}
        />
      </Switch>
    </div>
  );
}
