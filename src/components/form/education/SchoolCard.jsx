import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SchoolCard({ school, updatePerson }) {
  function handleEyeClick() {
    updatePerson((draft) => {
      draft.education.schools = draft.education.schools.map((s) => {
        if (s.id == school.id) {
          s.addToPreview = !s.addToPreview;
        }
        return s;
      });
    });
  }

  function handleDelete() {
    updatePerson((draft) => {
      draft.education.schools = draft.education.schools.filter(
        (s) => s.id !== school.id
      );
    });
  }

  return (
    <div className="school">
      <h3>{school.schoolName}</h3>
      <p>{school.stream}</p>
      <p>
        {school.grade} / {school.maxGrade}
      </p>
      <div className="buttons">
        <button onClick={handleEyeClick}>
          <FontAwesomeIcon icon={school.addToPreview ? faEye : faEyeSlash} />
        </button>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
