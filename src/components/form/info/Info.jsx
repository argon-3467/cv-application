import { useState } from 'react';
import Label from '../utils/Label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faUser,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export default function Info({ data, person, updatePerson }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    updatePerson((draft) => {
      draft.info[e.target.name] = e.target.value;
    });
  }
  return (
    <section className="info">
      <button className="expandable" onClick={() => setIsEditing(!isEditing)}>
        <FontAwesomeIcon icon={faUser} />
        <h1>Personal Details</h1>
        {isEditing ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
      <div className={isEditing ? null : 'hidden'}>
        <div className="inputs">
          <Label
            text="First Name"
            name="firstName"
            type="text"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Last Name"
            name="lastName"
            type="text"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Profession"
            name="profession"
            type="text"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Phone"
            name="phone"
            type="tel"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Email"
            name="email"
            type="email"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="GitHub"
            name="github"
            type="url"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Linkedin"
            name="linkedin"
            type="url"
            data={person.info}
            onChange={handleChange}
          />
          <Label
            text="Address"
            name="address"
            type="text"
            data={person.info}
            onChange={handleChange}
          />
          <div className="buttons">
            <button
              onClick={() =>
                updatePerson((draft) => {
                  draft.info = { ...data.emptyPerson.info };
                })
              }
            >
              Clear
            </button>
            <button
              onClick={() =>
                updatePerson((draft) => {
                  draft.info = { ...data.dummyPerson.info };
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
      </div>
    </section>
  );
}
