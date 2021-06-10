import React from 'react';
import {
    TableRow,
    TableBody,
    TableCell,
    Table,
    Button,
  } from "carbon-components-react";


function TodoListComponent(props) {
    return (
            <Table>  
                {
                    props.todos.map((todo) => {
                        return (

                            <TableBody>
                                <TableRow>
                                        <TableCell  key={todo.id} className={`flex justify-between items-center  mb-2 `} >
                                            <span onClick={
                                                (e) => {props.markDone(todo)} 
                                                }
                                                >{todo.val}
                                            </span>
                                            
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
                                </TableRow>

                            </TableBody>


                        );
                    })

                }


            </Table>  
            
        );
}

export default TodoListComponent;
 