import './App.css';
import React, {useState} from 'react';
import Data from './Data';
import OneQuestion from './Questions';

function App() {
  const [questions, setQuestions] = useState(Data)

  return (
    <main>
      <div className='container'>
        <h3>Questions</h3>

        <section className='info'>
          {questions.map((question) => {
            return (
              <OneQuestion key={question.id} {...question}></OneQuestion>
            );
          })}
        </section>
      </div>
    </main>

   
  );
}

export default App
