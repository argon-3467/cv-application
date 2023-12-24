import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEye,
  faEyeSlash,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function CompanyCard({ company, updatePerson }) {
  const [showRespSet, setShowRespSet] = useState(new Set());

  function handleEyeClick() {
    updatePerson((draft) => {
      draft.work.experiences = draft.work.experiences.map((x) => {
        if (x.id == company.id) {
          x.addToPreview = !x.addToPreview;
        }
        return x;
      });
    });
  }

  function handleInfoClick(id) {
    if (showRespSet.has(id)) {
      showRespSet.delete(id);
      setShowRespSet(new Set(showRespSet));
    } else {
      showRespSet.add(id);
      setShowRespSet(new Set(showRespSet));
    }
  }

  function handleDelete() {
    updatePerson((draft) => {
      draft.work.experiences = draft.work.experiences.filter(
        (x) => x.id !== company.id
      );
    });
  }

  return (
    <div className="company">
      <h3>{company.companyName}</h3>
      <p>{company.position}</p>
      <p>
        {company.startDate} - {company.endDate}
      </p>
      {showRespSet.has(company.id) ? (
        <p>Responsibilites: {company.responsibilities}</p>
      ) : null}
      <div className="buttons">
        <button onClick={() => handleInfoClick(company.id)}>
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
        <button onClick={handleEyeClick}>
          <FontAwesomeIcon icon={company.addToPreview ? faEye : faEyeSlash} />
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
