import useInput from "../hooks/UseInput";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstNameIsValid) {
      return;
    }
    console.log(firstName);
    resetFirstNameInput();
    if (!lastNameIsValid) {
      return;
    }
    console.log(lastName);
    resetLastNameInput();
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredEmail);
    resetEmailInput();
  };

  const firstNameInputclasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputclasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputclasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
        <div className='control-group'>
          <div className={firstNameInputclasses}>
          <label htmlFor='name'>First Name</label>
          <input
          type="text"
          id="name"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          value={firstName}
        />
          {firstNameInputHasError && (
          <p className="error-text">Please enter the First Name</p>
        )}
        </div>
        <div className={lastNameInputclasses}>
          <label htmlFor='name'>Last Name</label>
          <input
          type="text"
          id="last"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastName}
        />
          {lastNameInputHasError && (
          <p className="error-text">Please enter the Last Name</p>
        )}
        </div>
      </div>
      <div className={emailInputclasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter the valid E-mail Address</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
