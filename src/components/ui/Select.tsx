import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const stores = [
  { id: 1, name: 'Lebanon Store' },
  { id: 2, name: 'Europe Store' },
  { id: 3, name: 'International Store' },
]
interface IProps {
}
const Select= ({}: IProps) => {
    const [selectedPerson, setSelectedPerson] = useState(stores[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    <ListboxButton>{selectedPerson.name} <FontAwesomeIcon icon={faCaretDown} aria-hidden="true" />
    </ListboxButton>
    <ListboxOptions anchor="bottom" className="bg-white rounded-sm">
      {stores.map((store) => (
        <ListboxOption key={store.id} value={store} className="data-[focus]:bg-slate-200 p-2">
          {store.name}
        </ListboxOption>
      ))}
    </ListboxOptions>
  </Listbox>
  );
};
export default Select;