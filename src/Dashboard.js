import React from 'react';
import InpuComponent from './todo/InpuComponent';
import {useState} from 'react';
import uuid from 'react-uuid';
import TodoListComponent from './todo/TodoListComponent';
import { DataTable } from "carbon-components-react";
const {
  TableContainer
} = DataTable;


//local storage
function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) ||
     defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}


function Dashboard() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useLocalStorageState('todos', []);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm) => {
    // console.log(searchTerm)
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newTodoList = todos.filter((todo) => {
        return  Object.values(todo)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTodoList);
    } else {
      setSearchResults(todos);
    }
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    if (inputValue==='') return;
    setTodos([...todos, { id: uuid(), val: inputValue, done: false} ])
    setInputValue(' ')
  }

  const handleChange = (e) =>{
    setInputValue(e.target.value);
}

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  return (

      <div className="p-12 h-full text-sm">

        <InpuComponent
        value= {inputValue}
        handleChange= {handleChange}
        handleSubmit= {handleSubmit}
        term={searchTerm}
        searchKeyword={searchHandler}
          
        />
       <TableContainer className="p-7 "
        title="List of Records ">
         <TodoListComponent
         todos={searchTerm.length < 1 ? todos : searchResults}
         deleteTodo={deleteTodo}
         />
      </TableContainer>

       
        
    </div>


  );
}

export default Dashboard;
