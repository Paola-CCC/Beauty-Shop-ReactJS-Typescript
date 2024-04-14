import React from "react";
import "./InputSelect.scss";


type Options =  {
  value: string | number,
  label: string,
} 

interface InputSelectProps {
  label?: string;
  name?:string ;
  value?: string | number
  options?: Options[] | undefined,
  onChange?: (updatedOptions: any) => void;
}


const InputSelect = ({ label, name, options, value, onChange }: InputSelectProps) => {

  return (
    <div className="input-select-container">
      {label && (
        <label>{label}</label>
      )}
      <select value={value} name={name} onChange={onChange}>
        {options?.map((option : any, index : number) => (
          <option key={index} value={option.value} defaultValue={option.value === "" ? option.value : undefined} >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
