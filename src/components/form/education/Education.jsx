import { useState } from 'react';
import SchoolCard from './SchoolCard';
import SchoolInput from './SchoolInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Education({ data, person, updatePerson }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className="education">
      <button className="expandable" onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faGraduationCap} />
        <h1>Education Details</h1>
        {isEditing ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      <div className={isEditing ? null : 'hidden'}>
        <div className="school-conatiner">
          {person.education.schools.map((school) => (
            <SchoolCard
              updatePerson={updatePerson}
              key={school.id}
              school={school}
            />
          ))}
        </div>
        <SchoolInput
          emptySchool={data.emptyPerson.education.newSchool}
          newSchool={person.education.newSchool}
          updatePerson={updatePerson}
        />
        <div className="buttons">
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.education = {
                  schools: [],
                  newSchool: { ...data.emptyPerson.education.newSchool },
                };
              })
            }
          >
            Clear All
          </button>
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.education = {
                  schools: [...data.dummyPerson.education.schools],
                  newSchool: { ...data.dummyPerson.education.newSchool },
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
