import React, {Component, useState} from "react";
import '../styles/App.css';

function App()  {
   
        const [input1, setInput1] = useState('');
        const [input2, setInput2] = useState('');
        const [relationshipStatus, setRelationshipStatus] = useState('');
        
        const calculateRelationship = () => {
          if (!input1.trim() || !input2.trim()) {
            setRelationshipStatus('Please Enter valid input');
            return;
          }
      
          const commonLetters = Array.from(new Set(input1)).filter(char => input2.includes(char));
      
          const remainingString1 = input1.split('').filter(char => !commonLetters.includes(char)).join('');
          const remainingString2 = input2.split('').filter(char => !commonLetters.includes(char)).join('');
      
          const lengthSum = (remainingString1.length + remainingString2.length) % 6;
      
          switch (lengthSum) {
            case 1:
              setRelationshipStatus('Friends');
              break;
            case 2:
              setRelationshipStatus('Love');
              break;
            case 3:
              setRelationshipStatus('Affection');
              break;
            case 4:
              setRelationshipStatus('Marriage');
              break;
            case 5:
              setRelationshipStatus('Enemy');
              break;
            case 0:
              setRelationshipStatus('Siblings');
              break;
            default:
              setRelationshipStatus('Invalid');
          }
        };
      
        const clearInputs = () => {
          setInput1('');
          setInput2('');
          setRelationshipStatus('');
        };
      

        return(
          <>
            <div id="main">
              <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        data-testid="input1"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        data-testid="input2"
      />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button
        onClick={clearInputs}
        data-testid="clear"
      >
        Clear
      </button>
      <h3 data-testid="answer">{relationshipStatus}</h3>
            </div>
          </>
        )
    
}


export default App;
