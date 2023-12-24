import Label from '../utils/Label';
import { v4 as uuidv4 } from 'uuid';

export default function CompanyInput({
  emptyCompany,
  newCompany,
  updatePerson,
}) {
  function handleChange(e) {
    updatePerson((draft) => {
      draft.work.newCompany[e.target.name] = e.target.value;
    });
  }

  function handleAdd() {
    updatePerson((draft) => {
      const newId = uuidv4();
      draft.work.experiences.push({ ...draft.work.newCompany, id: newId });
      draft.work.newCompany = { ...emptyCompany };
    });
  }

  return (
    <div className="inputs">
      <Label
        text="Company Name"
        name="companyName"
        type="text"
        data={newCompany}
        onChange={handleChange}
      />
      <Label
        text="Position"
        name="position"
        type="text"
        data={newCompany}
        onChange={handleChange}
      />
      <Label
        text="Start Date"
        name="startDate"
        type="date"
        data={newCompany}
        onChange={handleChange}
      />
      <Label
        text="End Date"
        name="endDate"
        type="date"
        data={newCompany}
        onChange={handleChange}
      />
      <label>
        Responsibilites
        <textarea
          name="responsibilities"
          value={newCompany.responsibilities}
          onChange={handleChange}
        />
      </label>

      <div className="buttons">
        <button
          onClick={() =>
            updatePerson((draft) => {
              draft.work.newCompany = { ...emptyCompany };
            })
          }
        >
          Clear
        </button>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
