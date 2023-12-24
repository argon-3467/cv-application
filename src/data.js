let data = {
  dummyPerson: {
    info: {
      firstName: 'John',
      lastName: 'Doe',
      profession: 'Software Developer',
      phone: '+1234567890',
      email: 'john.doe@example.com',
      github: 'https://github.com/johndoe',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      address: '123 Main St, Cityville',
    },
    education: {
      schools: [
        {
          id: 'be98dbf7-ad42-4035-ac03-44516ea8bdf1',
          schoolName: 'University of Techville',
          stream: 'Computer Science',
          startYear: '2016',
          endYear: '2020',
          grade: '3.8',
          maxGrade: '4.0',
          addToPreview: true,
        },
        {
          id: 'be49458c-b985-4e2f-a962-4e0378aa6f9c',
          schoolName: 'City High School',
          stream: 'High School',
          startYear: '2012',
          endYear: '2016',
          grade: '90',
          maxGrade: '100',
          addToPreview: true,
        },
      ],
      newSchool: {
        id: null,
        schoolName: 'Tech Academy',
        stream: 'Online Courses',
        startYear: '2021',
        endYear: '2022',
        grade: 'N/A',
        maxGrade: 'N/A',
        addToPreview: true,
      },
    },
    work: {
      experiences: [
        {
          id: '1',
          companyName: 'InnovateTech',
          position: 'Junior Developer',
          startDate: '2020-06-01',
          endDate: '2021-12-31',
          responsibilities: 'Assisted in developing web applications.',
          addToPreview: true,
        },
        {
          id: '2',
          companyName: 'SoftSolutions',
          position: 'Software Engineer',
          startDate: '2022-01-15',
          endDate: null,
          responsibilities:
            'Leading development projects and collaborating with teams.',
          addToPreview: true,
        },
      ],
      newCompany: {
        id: null,
        companyName: 'NewCompany',
        position: 'New Position',
        startDate: '2023-01-01',
        endDate: '2023-12-23',
        responsibilities:
          'Description of responsibilities in the new position.',
        addToPreview: true,
      },
    },
    projects: {
      projectList: [
        {
          id: '1',
          projectName: 'E-commerce Website',
          description:
            'Developed a fully functional e-commerce website using React and Node.js.',
          startDate: '2021-03-01',
          endDate: '2021-05-30',
          technologiesUsed: 'React,Node.js',
          role: 'Frontend Developer',
          addToPreview: true,
        },
        {
          id: '2',
          projectName: 'Task Management App',
          description:
            'Built a task management app with real-time collaboration features using Vue.js and Firebase.',
          startDate: '2022-02-15',
          endDate: '2022-05-15',
          technologiesUsed: 'Vue.js,Firebase',
          role: 'Full Stack Developer',
          addToPreview: true,
        },
      ],
      newProject: {
        id: null,
        projectName: 'New Project',
        description: 'Description of the new project.',
        startDate: '2023-01-01',
        endDate: '2023-12-23',
        technologiesUsed: 'technologies used (comma seperated)',
        role: 'New Role',
        addToPreview: true,
      },
    },
    courses: {
      courseList: [
        {
          id: '1',
          courseName: 'Advanced Web Development',
          institution: 'Tech Institute',
          completionDate: '2020-12-15',
        },
        {
          id: '2',
          courseName: 'Data Science Fundamentals',
          institution: 'Data Academy',
          completionDate: '2021-06-30',
        },
      ],
      newCourse: {
        id: null,
        courseName: 'New Course',
        institution: 'New Institution',
        completionDate: '2023-01-01',
      },
    },
    coding: {
      platforms: [
        {
          id: '0',
          name: 'LeetCode',
          maxRating: 1850,
          currRating: 1800,
          title: 'Senior Coder',
          rank: 'Top 5%',
          problemsSolved: 120,
        },
        {
          id: '1',
          name: 'HackerRank',
          maxRating: 1500,
          currRating: 1450,
          title: 'Coder',
          rank: 'Top 10%',
          problemsSolved: 80,
        },
      ],
      newPlatform: {
        id: null,
        name: 'NewPlatform',
        maxRating: null,
        currRating: null,
        title: null,
        rank: null,
        problemsSolved: null,
      },
    },
    technologySkills: {
      programmingLanguages: [
        {
          id: '0',
          name: 'JavaScript',
        },
        {
          id: '1',
          name: 'Python',
        },
      ],
      libraries: [
        {
          id: '2',
          name: 'React',
        },
        {
          id: '3',
          name: 'Django',
        },
      ],
      newSkill: {
        id: null,
        category: 'tools',
        name: 'Git',
      },
    },
  },
  emptyPerson: {
    info: {
      firstName: '',
      lastName: '',
      profession: '',
      phone: '',
      email: '',
      github: '',
      linkedin: '',
      address: '',
    },
    education: {
      schools: [],
      newSchool: {
        id: null,
        schoolName: '',
        stream: '',
        startYear: '',
        endYear: '',
        grade: '',
        maxGrade: '',
        addToPreview: true,
      },
    },
    work: {
      experiences: [],
      newCompany: {
        id: null,
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        addToPreview: true,
      },
    },
    projects: {
      projectList: [],
      newProject: {
        id: null,
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
        technologiesUsed: '',
        role: '',
        addToPreview: true,
      },
    },
    courses: {
      courseList: [],
      newCourse: {
        id: null,
        courseName: '',
        institution: '',
        completionDate: null,
      },
    },
    coding: {
      platforms: [],
      newPlatform: {
        id: null,
        name: '',
        maxRating: null,
        currRating: null,
        title: null,
        rank: null,
        problemsSolved: null,
      },
    },
    technologySkills: {
      programmingLanguages: [],
      libraries: [],
      newSkill: {
        id: null,
        category: '',
        name: '',
      },
    },
  },
};

export default data;
