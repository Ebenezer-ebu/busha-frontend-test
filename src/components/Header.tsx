import styled from "styled-components";
import logo from "../images/Busha_Logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="busha-logo" />
      </div>
      <HeaderName>
        <span className="tag">O</span>
        <span className="user">Oluwatobi Akindunjoye</span>
      </HeaderName>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 150px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const HeaderName = styled.div`
  .tag {
    border-radius: 100%;
    padding: 2px 5px;
    color: #3e4c59;
    background: rgba(154, 165, 177, 0.3);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
  }
  .user {
    padding: 2px 5px;
    font-size: 14px;
  }
`;

export default Header;

