import { useClassName } from '../../hooks/styling';

import './FormInput.css';


const FormInput = (props) => {
  const className = useClassName('form-input', props.className);

  return (
    <div className={className}>
      <label className="form-input__label" htmlFor={props.id}>{props.label}</label>
      <input
        className="form-input__input"
        id={props.id}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        onInput={props.onInput}
      />
    </div>
  );
};


export default FormInput;
