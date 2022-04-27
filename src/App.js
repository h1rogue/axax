import React from 'react'
import Introduction from './component/Introduction/introduction';
import About from './component/about/about';
import Skills from './component/skills/skills';

export const App = () => {
  return (
    <div>
      <Introduction/>
      <About/>
      <Skills/>
    </div>
  )
};

export default App;
