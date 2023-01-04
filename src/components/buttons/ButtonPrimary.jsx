import { useClassName } from '../../hooks/styling';

import './ButtonPrimary.css';


const ButtonPrimary = (props) => {
  const className = useClassName('button-primary', props.className);

  return (
    <button
      className={className}
      type={props.type || 'button'}
      onClick={props.onClick}
    >{props.children}</button>
  );
};


export default ButtonPrimary;
