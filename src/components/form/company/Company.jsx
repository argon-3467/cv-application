import { useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanyInput from './CompanyInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Work({ data, person, updatePerson }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section className="work">
      <button className="expandable" onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faBuilding} />
        <h1>Work</h1>
        {isEditing ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      <div className={isEditing ? null : 'hidden'}>
        <div className="work-conatiner">
          {person.work.experiences.map((company) => (
            <CompanyCard
              updatePerson={updatePerson}
              key={company.id}
              company={company}
            />
          ))}
        </div>

        <CompanyInput
          emptyCompany={data.emptyPerson.work.newCompany}
          newCompany={person.work.newCompany}
          updatePerson={updatePerson}
        />
        <div className="buttons">
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.work = {
                  experiences: [],
                  newCompany: { ...data.emptyPerson.work.newCompany },
                };
              })
            }
          >
            Clear All
          </button>
          <button
            onClick={() =>
              updatePerson((draft) => {
                draft.work = {
                  experiences: [...data.dummyPerson.work.experiences],
                  newCompany: { ...data.dummyPerson.work.newCompany },
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
