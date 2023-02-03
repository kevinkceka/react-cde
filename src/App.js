import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('react');
      const [news, setNews] = useState([]);

useEffect(() => {
fetch(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        setNews(data.hits);
      })
      .catch(err => {
        console.log(err);
      });
    }, []);
  return (
    
    <ul>
      <div className= "container" >
       {
       news.map( item1 => (<li key={item1.objectID}> {item1.title} </li>))
        } 
        </div>
    </ul>
    
  );
}

export default App;
