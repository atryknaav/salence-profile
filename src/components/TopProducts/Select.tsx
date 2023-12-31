import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAtomValue } from "jotai";
import { isDarkMode } from "../../contexts/themeContext";

const opts = [
  { name: "This week" },
  { name: "This month" },
  { name: "This year" },
];

export default function Select() {
  const isDark = useAtomValue(isDarkMode);
  const [selected, setSelected] = useState(opts[0]);

  return (
    <div className="flex-1 ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button
            className={`hover:cursor-pointer relative w-full cursor-default rounded-lg dark:bg-transparent border-[1px] border-minor-dark py-[0.4rem] pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${
              isDark ? "text-white " : "text-black"
            }`}
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
                isDark ? "bg-back-dark" : "bg-white"
              }`}
            >
              {opts.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active
                        ? "bg-minor-dark text-stone-900"
                        : `${isDark ? "text-white" : "text-black"}`
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gstone-800"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
