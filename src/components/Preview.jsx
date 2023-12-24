import html2pdf from 'html2pdf.js';
import { useState } from 'react';
import WebFont from 'webfontloader';
import '/src/styles/Preview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Preview({ person }) {
  function downloadAsPDF(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
      html2pdf(element, {
        filename: 'cv-preview.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        margin: 5,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      });
    }
  }

  const [selectedFont, setSelectedFont] = useState('Open Sans');
  WebFont.load({
    google: {
      families: [selectedFont],
    },
  });
  let filteredSchools = person.education.schools.filter(
    (school) => school.addToPreview
  );

  let filteredExperiences = person.work.experiences.filter(
    (x) => x.addToPreview
  );

  let filteredProjects = person.projects.projectList.filter(
    (x) => x.addToPreview
  );

  let divStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  let hrStyles = {
    border: 'none',
    height: '2px',
    backgroundColor: 'black',
  };

  return (
    <>
      <div className="preview">
        <div
          id="cv-print"
          className="cv"
          style={{ fontFamily: `${selectedFont}, Arial, sans-serif` }}
        >
          <h1>
            {person.info.firstName} {person.info.lastName}
          </h1>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            className="info"
          >
            <div
              style={{
                alignItems: 'center',
                display: 'grid',
                gap: '8px',
              }}
            >
              {person.info.profession && <p>{person.info.profession}</p>}
              {person.info.address && (
                <p>
                  <FontAwesomeIcon icon={faHome} /> {person.info.address}
                </p>
              )}
            </div>
            <div
              className="contact"
              style={{
                display: 'grid',
                gap: '8px',
                gridTemplateColumns: 'auto 1fr',
                justifyItems: 'flex-end',
                alignItems: 'center',
              }}
            >
              {person.info.email && (
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />{' '}
                  <a href={'mailto:' + person.info.email}>
                    {person.info.email}
                  </a>
                </p>
              )}
              {person.info.github && (
                <p>
                  <FontAwesomeIcon icon={faGithub} />{' '}
                  <a href={person.info.github}>
                    {' '}
                    {person.info.github.split('/').slice(-1)[0]}
                  </a>
                </p>
              )}
              {person.info.phone && (
                <p>
                  {' '}
                  <FontAwesomeIcon icon={faPhone} /> {person.info.phone}
                </p>
              )}
              {person.info.linkedin && (
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />{' '}
                  <a href={person.info.linkedin}>
                    {' '}
                    {person.info.linkedin.split('/').slice(-1)[0]}hr
                  </a>
                </p>
              )}
            </div>
          </section>
          {filteredSchools.length != 0 ? (
            <>
              <hr style={hrStyles} />
              <section className="education">
                <h2>Education</h2>
                {filteredSchools.map((school) => (
                  <div className="school" key={school.id}>
                    <div style={divStyles}>
                      <h3>{school.schoolName}</h3>
                      {school.startYear && (
                        <p>
                          {school.startYear}-{school.endYear || 'present'}
                        </p>
                      )}
                    </div>
                    <p>{school.stream}</p>
                    {school.grade && school.maxGrade && (
                      <p>
                        Grade: {school.grade}/{school.maxGrade}
                      </p>
                    )}
                  </div>
                ))}
              </section>
            </>
          ) : null}
          {filteredExperiences.length != 0 ? (
            <>
              <hr style={hrStyles} />
              <section className="work">
                <h2>Work Experience</h2>
                {filteredExperiences.map((experience) => (
                  <div className="company" key={experience.id}>
                    <div style={divStyles}>
                      <h3>{experience.companyName}</h3>
                      <p>
                        {experience.startDate?.split('-')[0]} -{' '}
                        {experience.endDate?.split('-')[0] || 'Present'}
                      </p>
                    </div>
                    <p>{experience.position}</p>
                    <p>{experience.responsibilities}</p>
                  </div>
                ))}
              </section>
            </>
          ) : null}
          {filteredProjects.length != 0 ? (
            <>
              <hr style={hrStyles} />
              <section className="projects">
                <h2>Projects</h2>
                {filteredProjects.map((project) => (
                  <div className="project" key={project.id}>
                    <div style={divStyles}>
                      <h3>{project.projectName}</h3>
                      <p>
                        {project.startDate?.split('-')[0]} -{' '}
                        {project.endDate?.split('-')[0] || 'Present'}
                      </p>
                    </div>
                    <p>{project.description}</p>
                    {project.technologiesUsed && (
                      <p>Technologies Used: {project.technologiesUsed}</p>
                    )}
                    {project.role && <p>Role: {project.role}</p>}
                  </div>
                ))}
              </section>
            </>
          ) : null}
        </div>
        <button onClick={() => downloadAsPDF('cv-print')}>Download Pdf</button>
        <label htmlFor="fontSelector">Select Font:</label>
        <select
          id="fontSelector"
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          <option value="Open Sans">Open Sans</option>
          <option value="Calibri">Calibri</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Garamond">Garamond</option>
          <option value="Verdana">Verdana</option>
          <option value="Cambria">Cambria</option>
        </select>
      </div>
    </>
  );
}
