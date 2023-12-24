import Label from '../utils/Label';
import { v4 as uuidv4 } from 'uuid';
export default function SchoolInput({ emptySchool, newSchool, updatePerson }) {
  function handleChange(e) {
    updatePerson((draft) => {
      draft.education.newSchool[e.target.name] = e.target.value;
    });
  }

  function handleAdd() {
    updatePerson((draft) => {
      const newId = uuidv4();
      draft.education.schools.push({ ...draft.education.newSchool, id: newId });
      draft.education.newSchool = { ...emptySchool };
    });
  }

  return (
    <div className="inputs">
      <Label
        text="Institute Name"
        name="schoolName"
        type="text"
        data={newSchool}
        onChange={handleChange}
      />
      <Label
        text="Stream"
        name="stream"
        type="text"
        data={newSchool}
        onChange={handleChange}
      />
      <Label
        text="Start Year"
        name="startYear"
        type="year"
        data={newSchool}
        onChange={handleChange}
      />
      <Label
        text="End Year"
        name="endYear"
        type="year"
        data={newSchool}
        onChange={handleChange}
      />
      <Label
        text="Grade"
        name="grade"
        type="text"
        data={newSchool}
        onChange={handleChange}
      />
      <Label
        text="Max Grade"
        name="maxGrade"
        type="text"
        data={newSchool}
        onChange={handleChange}
      />
      <div className="buttons">
        <button
          onClick={() =>
            updatePerson((draft) => {
              draft.education.newSchool = { ...emptySchool };
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
