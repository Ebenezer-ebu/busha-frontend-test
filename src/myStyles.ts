import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 45px 150px 45px 50px;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(211, 213, 216, 0.5);
    font-weight: bold;
  }

  button {
    margin: 13px 2px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    background: #ffffff;
    cursor: pointer;
  }
  .card-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 50px;
    width: 100%;
    margin: 20px auto;
    justify-content: center;
  }
  .load {
    margin: 7rem auto;
  }
  @media screen and (max-width: 1020px) {
    padding: 0px;
    .card-container {
      grid-template-columns: auto auto;
    }
  }
  @media screen and (max-width: 450px) {
    padding: 1rem;
    .names {
      display: none;
    }
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 5px;
  background: #111111;
  box-shadow: 0px 10px 20px rgba(138, 138, 138, 0.5);
  border-radius: 10px;
  width: 250px;
  margin: 5px;
  padding: 15px;
  p {
    display: flex;
    align-items: center;
    color: #9aa5b1;
    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
  }
  .balance {
    display: flex;
    color: #ffffff;
    font-weight: bold;
    margin: -1rem 0;
    p {
      padding: 3px;
    }
  }
  .image {
    display: flex;
    justify-content: flex-end;
  }
`;

export const FormContainer = styled.div`
  padding: 30px 40px;
  p {
    padding: 10px 0;
  }
  .form-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    .add {
      font-size: 24px;
    }
  }
  .close {
    cursor: pointer;
    border: none;
    background: #ffffff;
    font-weight: bold;
  }
  .msg {
    font-size: 18px;
    color: #3e4c59;
  }
  select {
    width: 100%;
    height: 45px;
    margin: 10px 0px 25px 0px;
    border: 1px solid #cbd2d9;
    padding: 10px;
    border-radius: 5px;
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .load {
    margin: 17rem 10rem;
  }
  .failed {
    margin: 40px 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff4f4;
    border: 1px solid #e0b3b2;
    border-radius: 8px;
    height: 50px;
    color: #d72c0d;
    font-weight: bold;
    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    .network {
      display: flex;
      align-items: center;
    }
    button {
      border: none;
      color: #d72c0d;
      background: transparent;
      font-weight: bold;
    }
  }
`;

export const Button = styled.button`
  background: #000000;
  border-radius: 40px;
  color: #ffffff;
  width: 222px;
  height: 54px;
  border: none;
  cursor: pointer;
`;

export const TryAgain = styled.div`
  display: flex;
  flex-direction: column;
  justify -content: center;
  align-items: center;
  padding: 100px;
  img {
      width: 100px;
      height: 100px;
  }
  p {
      margin: 40px 0;
  }
  button {
    background: #000000;
  }
`;
