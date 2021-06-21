import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

import PieceOfArt from './PieceOfArt'

// goals
// Query the rijks museum API
  // get back some art and store the results in state
  // display those results on the page

function App() {
  // create state for data
  const [art, setArt] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // side effect to query API
  // only run when the App compnent mounts
  useEffect(() => {
    // get some damn art from the API
    axios({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: '6LBqEeR3',
        format: 'json',
        imgonly: true
      }
    }).then((response) => {
      // update 'art' state with response from API
      setArt(response.data.artObjects);
      setIsLoading(false);
    })
  }, [])
  // needs empty array dependancy to tell useEffect to only fire once!
  // only hits when component mounts (first render)

  return (
    <div className="App">
      <h1>Museum Art</h1>

      {
        isLoading ? <p>loading...</p> : art.map((artWork) => {
          return (
            <PieceOfArt
            // THESE ARE PROPS !
              imgPath={artWork.webImage.url}
              title={artWork.title}
              key={artWork.id}
              longTitle={artWork.longTitle}
            />
          ) 
        })
      }
    </div>
  );
}

export default App;
