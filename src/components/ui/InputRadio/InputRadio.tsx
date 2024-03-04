import "./InputRadio.scss";

type InputRadioProps = {
  name: any, 
  labelRadioGroup: any, 
  options: any,
  selectedOptions: any 
  handleChange: any
}

const InputRadio = ({name, labelRadioGroup, options,selectedOptions, handleChange} : InputRadioProps) => {

  return (
    <>
      {labelRadioGroup && labelRadioGroup !== undefined  && (
      <label>{labelRadioGroup}</label>
      )}
      <div className="radio-zone">
        {options?.map((option: any) => (
          <label key={option.value} className="">
            <input
              type="radio"
              value={option.value }
              checked={selectedOptions ? true : false}
              onChange={handleChange}
              name={name}
            />
            <span > {option.label} </span>
          </label>
        ))}
      </div>
    </>
  );
};

export default InputRadio;
