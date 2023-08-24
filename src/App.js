import { useState } from 'react';
import './App.css';
import Text from './Components/Text';

function App() {

  const [text, setText] = useState([])

  function getText (data){
    console.log(data);
    setText((prev)=> [...prev,data])

  }
  return (
    <div className="App">
        <Text onGetText={getText}/>
        {
          text.map((el)=>{
            return(
              <div>
                <h1>{el.age}</h1>

              </div>
            )
          })
        }
    </div>
  );
}

export default App;
