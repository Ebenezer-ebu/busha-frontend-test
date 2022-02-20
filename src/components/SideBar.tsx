import { useState } from "react";
import styled from "styled-components";
import { sidebarData } from "../lib/sidebarData";

const SideBar = () => {
  const [active, setActive] = useState("Wallets");
  return (
    <SidebarContainer>
      <ul className="sidebar_list">
        {sidebarData.map((val, index) => (
          <li
            id={active === val.title ? "active" : ""}
            key={index}
            className="row"
            onClick={() => setActive(val.title)}
          >
            {val.title}
          </li>
        ))}
      </ul>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 500px;
  padding-top: 50px;
  .sidebar_list {
    height: auto;
    padding: 0;
    width: 100%;
    .row {
      display: flex;
      height: 44px;
      list-style-type: none;
      align-items: center;
      margin-left: 130px;
      padding-left: 17px;
    }
    .row:hover {
      cursor: pointer;
      background: #f5f7fa;
      transform: scale(0.95);
    }
    #active {
      background: #f5f7fa;
    }
  }
`;

export default SideBar;
