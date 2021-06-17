import React from 'react';
import Review from './Review';
import { AiFillGithub } from 'react-icons/ai'
function App() {
  return <main>
    <section className="container">
      <div className="title">
        <h2>reviews project setup</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
    <AiFillGithub className="icon" />
    </main>
}

export default App;
