import React from 'react';
import NavBar from './components/NavBar';
import PageContent from './components/PageContent';

function App() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <PageContent />
      </div>
    </div>
  );
}

export default App;
