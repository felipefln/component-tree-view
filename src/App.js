import React, { useState, useEffect, memo } from 'react';
import mockData from './services/api';
import ListItem from './components/TreeView';
import setListed from './helpers/setListed';

import './styles/global.css';

function App() {
  const [listedEdit, setListedEdit] = useState([]);
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('dados');

    if (data) {
      setListedEdit(JSON.parse(data));
    } else {
      setListedEdit(setListed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dados', JSON.stringify(listedEdit));
  }, [listedEdit]);

  useEffect(() => {
    setPeoples(mockData);
  }, []);

  return (
    <>
      {peoples &&
        Object.values(peoples).map((i) => {
          return (
            <ListItem listEdit={listedEdit} setListedEdit={setListedEdit} item={i} key={i.id} />
          );
        })}
    </>
  );
}

export default memo(App);
