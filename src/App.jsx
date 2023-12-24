// import { useState } from 'react';
import { useImmer } from 'use-immer';
import Form from './components/Form';
import Preview from './components/Preview';
import data from './data';
import './styles/index.css';
import './styles/App.css';

export default function App() {
  const [person, updatePerson] = useImmer(data.dummyPerson);
  return (
    <>
      <Form data={data} person={person} updatePerson={updatePerson} />
      <Preview person={person} />
    </>
  );
}
