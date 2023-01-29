import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function MyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 w-76">
      <h1>Dialog (Modal)</h1>
      <button
        className="px-3 py-2 bg-green-500 text-white rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Pop Up
      </button>
      <Dialog
        className="fixed max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-white to-blue-500 p-5 rounded-lg drop-shadow-lg"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel>
          <Dialog.Title className="text-xl font-bold border-b border-slate-800 mb-2">
            Deactive account
          </Dialog.Title>
          <Dialog.Description>
            This will permanently deactive your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button
            className="bg-slate-800 text-white px-3 py-2 mt-2 mr-2 rounded-lg hover:bg-slate-600"
            onClick={() => setIsOpen(false)}
          >
            Deactivate
          </button>
          <button
            className="bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-400"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
