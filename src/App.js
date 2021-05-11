import React from 'react';
import { useState } from 'react';
import List from './Components/List';
import data from './Components/data';
function App() {
  // eslint-disable-next-line
  const [people,setPeople] = useState(data);
  return (
   <main>
     <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
     </section>
   </main>
  );
}

export default App;
