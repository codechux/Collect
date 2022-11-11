import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "./Button";

const Error = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  background: white;
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  border-radius: 10px;
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;
const Header = styled.header`
  background: #4f005f;
  padding: 1rem;
  overflow: hidden;
`;

const Title = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <Error onClick={props.onConfirm}></Error>;
  };

  const Mod = (props) => {
    return (
      <Modal>
        <Header>
          <Title>{props.title}</Title>
        </Header>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </Footer>
      </Modal>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Mod
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("mod")
      )}
    </>
  );
};

export default ErrorModal;
