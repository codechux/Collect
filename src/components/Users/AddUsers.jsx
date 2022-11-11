import Card from "../UI/Card";
import styled from "styled-components";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const FormControl = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

const Addusers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errMsg, setErrMsg] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setErrMsg({
        title: "invalid username and age",
        message: "Don't submit an empty space",
      });
      return;
    }
    if (+age < 1) {
      setErrMsg({
        title: "invalid age",
        message: "Age must be greater than 1 (no new borns allowed)",
      });
      return;
    }
    props.onAdd(username, age);
    setAge("");
    setUsername("");
  };

  const errorHandler = () => {
    setErrMsg(null);
  };
  return (
    <>
      {errMsg && (
        <ErrorModal
          title={errMsg.title}
          message={errMsg.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <FormControl>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={usernameHandler}
            />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" value={age} onChange={ageHandler} />
            <Button>Add User</Button>
          </form>
        </FormControl>
      </Card>
    </>
  );
};

export default Addusers;
