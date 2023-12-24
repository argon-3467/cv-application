import Info from './form/info/Info';
import Education from './form/education/Education';
import Company from './form/company/Company';
import Project from './form/projects/Project';
import '/src/styles/form.css';
export default function Form({ data, person, updatePerson }) {
  return (
    <div className="form">
      <Info data={data} person={person} updatePerson={updatePerson} />
      <Education data={data} person={person} updatePerson={updatePerson} />
      <Company data={data} person={person} updatePerson={updatePerson} />
      <Project data={data} person={person} updatePerson={updatePerson} />
    </div>
  );
}
