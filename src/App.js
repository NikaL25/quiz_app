import './index.css';
import React from 'react';
import { useState } from 'react';

const questions = [
  {
    title: 'What is React?',
    variants: ['A library', 'A framework', 'An application'],
    correct: 0,
  },
  {
    title: 'What is a component in React? ',
    variants: ['An application', ' A part of an application or page', "Something I don't know about"],
    correct: 1,
  },
  {
    title: 'What does JSX stand for in React?',
    variants: [
      "It's simple HTML",
      "It's a function",
      "It's the same as HTML but with the ability to execute JS code",
    ],
    correct: 2,
  },
  {
    title: "What is the purpose of React's virtual DOM?",
    variants: ["To render components on the server", "To optimize rendering performance", "To create interactive animations"],
    correct: 1,
  },
  {
    title: 'In React, what is state used for?',
    variants: ["To store configuration settings", "To manage data that can change over time", "To define the initial structure of a component"],
    correct: 1,
  },
  {
    title: 'What is the significance of the "props" keyword in React?',
    variants: [
      'It defines the shape of a component',
      'It refers to the internal state of a component',
      'It stands for "properties" and represents data passed to a component',
    ],
    correct: 2,
  },
  {
    title: 'What method is called when a component is first created in React?',
    variants: ['componentDidMount', 'componentWillMount', 'constructor'],
    correct: 2,
  },
  {
    title: 'What is the purpose of React Router in a React application?',
    variants: ['To define the routes for different API endpoints', 'To manage state in a Redux store', 'To handle navigation and routing within a single-page application'],
    correct: 2,
  },
  {
    title: 'What is the key benefit of using Redux in a React application?',
    variants: [
      'Simplifying the component hierarchy',
      'Managing and centralizing application state',
      'Enhancing the performance of rendering',
    ],
    correct: 1,
  },
  {
    title: 'What is the purpose of the React DevTools extension in a web browser?',
    variants: [
      'It helps optimize server-side rendering',
      'It enables debugging and inspecting React components in the browser',
      'It enhances the security of React applications',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='pic' />
      <h2>You guess {correct} answers from {questions.length}</h2>
      <a href='/'>
        <button>Try Again</button>
      </a>
      
    </div>
  ); 
}

function Game({step , question, onClickVarinant}) {
  const percentage = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {question.variants.map((text , index) => (
        <li onClick={()=> onClickVarinant(index)}  key={text}>{text}</li>
       ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]


  const onClickVarinant = (index)=>{
    console.log(step,index)
    setStep(step + 1)
    
    if(index === question.correct)
    setCorrect(correct + 1)
  }
  return (
    <div className="App">
     
     { step !== questions.length ? (
       <Game step={step} question={question} onClickVarinant={onClickVarinant} />
     ) : (
        <Result correct={correct} /> 
     )}
      
    </div>
  );
}

export default App;
