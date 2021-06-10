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
            <thead>
              <tr>
                <th>
                  <span class="bx--table-header-label">List of Records</span>
                </th>
                </tr>
            </thead>
                {
                    props.todos.map((todo) => {
                        return (
                        <tbody>
                            <tr>
                            {/* <TableBody>
                                <TableRow> */}
                                <td  key={todo.id} className={`flex justify-between items-center  mb-2 `} >
                                        {/* <TableCell  key={todo.id} className={`flex justify-between items-center  mb-2 `} > */}
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
                                        {/* </TableCell> */}
                                            
                                </td>
                                {/* </TableRow> */}
                                {/* </TableBody> */}
                            </tr>
                        </tbody>
                        );
                    })

                }


            </Table>  
            
            
        );
}

export default TodoListComponent;
 