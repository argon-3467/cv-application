import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectInput from './ProjectInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faProjectDiagram,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Project({ data, person, updatePerson }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className="projects">
      <button className="expandable" onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faProjectDiagram} />
        <h1>Projects</h1>
        {isEditing ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      <div className={isEditing ? null : 'hidden'}>
        <div className="projects-conatiner">
          {person.projects.projectList.map((project) => (
            <ProjectCard
              updatePerson={updatePerson}
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <ProjectInput
          emptyProject={data.emptyPerson.projects.newProject}
          newProject={person.projects.newProject}
          updatePerson={updatePerson}
        />
        <div className="buttons">
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.projects = {
                  projectList: [],
                  newProject: { ...data.emptyPerson.projects.newProject },
                };
              })
            }
          >
            Clear All
          </button>
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.projects = {
                  projectList: [...data.dummyPerson.projects.projectList],
                  newProject: { ...data.dummyPerson.projects.newProject },
                };
              })
            }
          >
            Dummy
          </button>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    </section>
  );
}
