import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Youtube from './components/Youtube';
import FormikContainer from './components/reusableFormikControls/FormikContainer';

function App() {
  return (
    <div className="App">
      <RegistrationForm/>
      {/* <LoginForm/> */}
      {/* <FormikContainer/> */}
      {/* <Youtube/> */}
    </div>
  );
}

export default App;
