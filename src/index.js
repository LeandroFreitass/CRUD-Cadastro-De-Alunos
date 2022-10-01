import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CrudAlunos from './Alunos/CrudAlunos'
import CrudCurso from './Curso/CrudCurso'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CrudAlunos />
  </React.StrictMode>
);


