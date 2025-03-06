import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


interface IProps {
  data:{ id: number; name: string; }[],
  style?: string;
  optionsStyle?: string;
}
const Select= ({data, style,optionsStyle}: IProps) => {
    const [selectedPerson, setSelectedPerson] = useState(data[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    <ListboxButton className={style}>{selectedPerson.name} <FontAwesomeIcon icon={faCaretDown} aria-hidden="true" />
    </ListboxButton>
    <ListboxOptions anchor="bottom" className="bg-white rounded-md">
      {data.map((value) => (
        <ListboxOption key={value.id} value={value} className={`data-[focus]:bg-slate-200 p-2 ${optionsStyle}`}>
          {value.name}
        </ListboxOption>
      ))}
    </ListboxOptions>
  </Listbox>
  );
};
export default Select;