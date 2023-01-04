import { useNavigate } from 'react-router-dom';

import FormInput from '../components/form/FormInput';
import ButtonPrimary from '../components/buttons/ButtonPrimary';

import './SignIn.css';


const SignIn = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <div className="signin">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2 className="signin-form__heading">Sign In as Admin</h2>
        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
        />
        <FormInput
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
        />
        <ButtonPrimary type="submit">Sign In</ButtonPrimary>
      </form>
    </div>
  );
};


export default SignIn;
