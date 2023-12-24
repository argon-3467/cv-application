import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEye,
  faEyeSlash,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ProjectCard({ project, updatePerson }) {
  const [showDesSet, setShowDesSet] = useState(new Set());

  function handleEyeClick() {
    updatePerson((draft) => {
      draft.projects.projectList = draft.projects.projectList.map((p) => {
        if (p.id == project.id) {
          p.addToPreview = !p.addToPreview;
        }
        return p;
      });
    });
  }

  function handleInfoClick(id) {
    if (showDesSet.has(id)) {
      showDesSet.delete(id);
      setShowDesSet(new Set(showDesSet));
    } else {
      showDesSet.add(id);
      setShowDesSet(new Set(showDesSet));
    }
  }

  function handleDelete() {
    updatePerson((draft) => {
      draft.projects.projectList = draft.projects.projectList.filter(
        (p) => p.id !== project.id
      );
    });
  }

  return (
    <div className="project">
      <h3>{project.projectName}</h3>
      <p>Role: {project.role}</p>
      <p>
        {project.startDate} - {project.endDate}
      </p>
      {showDesSet.has(project.id) ? (
        <>
          <p>Technologies used: {project.technologiesUsed}</p>
          <p>Description: {project.description}</p>
        </>
      ) : null}
      <div className="buttons">
        <button onClick={() => handleInfoClick(project.id)}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
        <button onClick={handleEyeClick}>
          <FontAwesomeIcon icon={project.addToPreview ? faEye : faEyeSlash} />
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
