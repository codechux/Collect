import Card from "../UI/Card";
import styled from "styled-components";

const Ul = styled.div`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

const UsersList = (props) => {
  return (
    <Card>
      <Ul>
        <ul>
          {props.users.map((user) => (
            <li key={Math.random()}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Ul>
    </Card>
  );
};

export default UsersList;
