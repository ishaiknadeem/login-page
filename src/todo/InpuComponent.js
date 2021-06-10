import React, { useRef } from "react";
import {
    Form,
    TextInput,
    Button,
  } from "carbon-components-react";

  const TextInputProps = {
    className: 'some-class',
    id: 'test2',
    labelText: 'Enter Your Record',
    placeholder: 'Add Record',
  };

// We can also use even.target.value instead of useRef 
// I know it's a simple assignment but I'm trying all these to breshup my skills.

function InpuComponent(props) {
    const inputEl = useRef("");


    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
      };

      
    return ( 
        <>
        <div className="flex justify-between ml-7 mr-7">
            <Form className="flex  items-center mb-7 " onSubmit={props.handleSubmit}>
                <div>
                    <TextInput 
                    type="text"
                    {...TextInputProps}
                    id="todoText"
                    value={props.value} 
                    onChange={props.handleChange}></TextInput>
                </div>

                <Button className=" mt-4 "
                  kind = "tertiary"
                  type="submit"
                  >
                  Add record
                </Button>
            </Form>


            <div className=" mt-10">
            <TextInput
                ref={inputEl}
                type="text"
                placeholder="Search Records"
                className="prompt"
                value={props.term}
                onChange={getSearchTerm}>
            </TextInput>
            </div>
            
      </div>
      </>

    );
}

export default InpuComponent;
