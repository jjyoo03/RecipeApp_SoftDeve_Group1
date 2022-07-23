import './App.css';
import React,{useState} from 'react';

import Navbar2 from './components/navbar/index';
import IngredientList from './components/IngredientList/IngredientList';
import NewIngredient from './components/NewIngredient/NewIngredient';

function App() {
  
  
  const [ingredientArray, setNewIngredients] = useState([
    // {id:"ing1",text:"carrot"},
    // {id:"ing2",text:"onion"},
    // {id:"ing3",text:"milk"},
    // {id:"ing4",text:"beet"},
  ]);

  const addNewIngredientHandler = (newIngredient) => {
    //setNewIngredients(ingredientArray.concat(newIngredient));
    setNewIngredients(prevIngredientArray =>prevIngredientArray.concat(newIngredient));
  };

  

  return (
    <div className="App">
      <Navbar2/>
      <div>
        <img src="background.jpeg" className='background' alt=''/>
      </div>
      <div className='title'>
        Zoodle
      </div> 
      <div className='quote'>
        "Cutting food waste is a delicious way of saving money, 
        helping to feed the world and protect the planet." -Tristram Stuart-
      </div>
      <div>
        <NewIngredient onAddIngredient={addNewIngredientHandler} />
        <IngredientList ingredients={ingredientArray}/>
      </div>
      
      
    </div>
  );
}

export default App;
