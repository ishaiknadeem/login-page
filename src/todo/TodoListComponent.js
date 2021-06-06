import React from 'react';
import {
    Button,
    DataTable,
  } from "carbon-components-react";
const {
 
  TableCell,
 
} = DataTable;

function TodoListComponent(props) {
    return (
        <>
        

            {
                props.todos.map((todo) => {
                    return (
                        <TableCell  key={todo.id} className={` flex justify-between items-center bg-grey rounded shadow-lg p-4 flex-wrap border-1-4 mb-2 `}
                        >
                        <span onClick={
                            (e) => {props.markDone(todo)} 
                        }

                        >{todo.val}</span>
                            <div>
                                   
                                    <Button onClick={
                                        (e) => {props.deleteTodo(todo)
                                    }}
                                        className=''
                                    >
                                    Delete Record
                                    </Button>
                                  
                            </div>
                        </TableCell>
                );
                     })
            }


        </>
    );
}

export default TodoListComponent;
 