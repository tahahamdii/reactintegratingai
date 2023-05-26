import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import "./index.css"
import AlanContainer from './AlanContainer';
import { FormProvider, useForm } from 'react-hook-form';


function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
    <Router>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        
      </Routes>
      <AlanContainer/>
    </Router>
    </FormProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
