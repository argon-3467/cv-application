import Label from '../utils/Label';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectInput({
  emptyProject,
  newProject,
  updatePerson,
}) {
  function handleChange(e) {
    updatePerson((draft) => {
      draft.projects.newProject[e.target.name] = e.target.value;
    });
  }

  function handleAdd() {
    updatePerson((draft) => {
      const newId = uuidv4();
      draft.projects.projectList.push({
        ...draft.projects.newProject,
        id: newId,
      });
      draft.projects.newProject = { ...emptyProject };
    });
  }

  return (
    <div className="inputs">
      <Label
        text="Project Name"
        name="projectName"
        type="text"
        data={newProject}
        onChange={handleChange}
      />
      <Label
        text="Technologies Used"
        name="technologiesUsed"
        type="text"
        data={newProject}
        onChange={handleChange}
      />
      <Label
        text="Role"
        name="role"
        type="text"
        data={newProject}
        onChange={handleChange}
      />
      <Label
        text="Start Date"
        name="startDate"
        type="date"
        data={newProject}
        onChange={handleChange}
      />
      <Label
        text="End Date"
        name="endDate"
        type="date"
        data={newProject}
        onChange={handleChange}
      />
      <label>
        Description
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleChange}
        />
      </label>

      <div className="buttons">
        <button
          onClick={() =>
            updatePerson((draft) => {
              draft.projects.newProject = { ...emptyProject };
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
