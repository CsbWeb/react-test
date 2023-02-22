import React, { useState } from "react";
import List from './components/List';
import Form from './components/Form';
import axios from 'axios';
import Modal from './components/UI/Modal/Modal';
import "./style.css";

function App() {
	const [list, setList] = useState([]);

  function getForm(values) {
    setList([...list, values]);
  }

  function removeItem(item) {
    setList(list.filter(l => l.id !== item.id));
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setList(response.data);
  } 

  return (
    <div>
     <button onClick={fetchPosts}>Get Data</button>
     <Modal func={<Form send={getForm} />} />
     <h1 style={{textAlign: "center"}}>Первый список</h1>
    	{list.length !== 0 
      	? <List list={list} postRem={removeItem} /> 
    		: <h2 style={{textAlign: "center"}}>Список пуст!</h2>}
    </div>
  );
}

export default App;