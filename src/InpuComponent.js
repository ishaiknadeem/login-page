import React, { useRef } from "react";
import {
    TextInput,
    Button,
  } from "carbon-components-react";

  const TextInputProps = {
    className: 'some-class',
    id: 'test2',
    labelText: 'Enter Your Record',
    placeholder: 'Add task',
  };

// We can also use even.target.value instead of useRef 
// I know it's a simple assignment but I'm trying all these to breshup my skills.

function InpuComponent(props) {
    const inputEl = useRef("");


    const getSearchTerm = () => {
        // console.log(inputEl.current.value)
        props.searchKeyword(inputEl.current.value);
      };

      
    return ( 
        <>
        <div className="flex justify-between ml-7 mr-7">
            <form className="flex  items-center mb-7 " onSubmit={props.handleSubmit}>
                <div>
                    <TextInput className="ui icon input"
                    type="text"
                    {...TextInputProps}

                    id="todoText"
                    placeholder=" Add Records" 
                    className=" bg-white py-1 px-2justify-end	" 
                    value={props.value} 
                    onChange={props.handleChange}></TextInput>
                </div>

                <Button className=" mt-4 "
                 kind = "tertiary"
                 type="submit"
                 >
                Add record
              </Button>
            </form>


            <div className=" mt-10">
            <div className="ui icon input">
            <TextInput
                ref={inputEl}
                type="text"
                placeholder="Search Records"
                className="prompt"
                value={props.term}
                onChange={getSearchTerm}>
                </TextInput>
            <i className="search icon"></i>
            </div>
            </div>
            
      </div>
      </>

    );
}

export default InpuComponent;
