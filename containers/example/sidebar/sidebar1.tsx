import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrap>
      <LogoDetail>
        <i className="bx bxl-c-plus-plus icon"></i>
        <LogoName>sidebar</LogoName>
        <i className="bx bx-menu" id="btn"></i>
      </LogoDetail>
      <NavList>
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <ToolTip>Search</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <LinkName>Dashboard</LinkName>
          </a>
          <ToolTip>Dashboard</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <LinkName>User</LinkName>
          </a>
          <ToolTip>User</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat"></i>
            <LinkName>Messages</LinkName>
          </a>
          <ToolTip>Messages</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <LinkName>Analytics</LinkName>
          </a>
          <ToolTip>Analytics</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <LinkName>File Manager</LinkName>
          </a>
          <ToolTip>Files</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cart-alt"></i>
            <LinkName>Order</LinkName>
          </a>
          <ToolTip>Order</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-heart"></i>
            <LinkName>Saved</LinkName>
          </a>
          <ToolTip>Saved</ToolTip>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <LinkName>Setting</LinkName>
          </a>
          <ToolTip>Setting</ToolTip>
        </li>
        <Profile>
          {/* <!-- show in the setting --> */}
          <ProfileDetail>
            {/* <!--<img src="profile.jpg" alt="profileImg">--> */}
            <NameJob>
              <Name>Prem Shahi</Name>
              <Job>Web designer</Job>
            </NameJob>
          </ProfileDetail>
          <i className="bx bx-log-out" id="log_out"></i>
          <ToolTip>Setting</ToolTip>
        </Profile>
      </NavList>
    </Wrap>
  );
};

export default SideBar;

const Wrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 78px;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
  overflow: scroll;
`;

const LogoDetail = styled.div`
`;

const LogoName = styled.div`
`;

const NavList = styled.ul`
  margin-top: 20px;
  height: 100%;

  > li {
    position: relative;
    margin: 8px 0;
    list-style: none;
    > input {
      display: none;
      font-size: 15px;
      color: #fff;
      font-weight: 400;
      outline: none;
      height: 50px;
      width: 100%;
      width: 50px;
      border: none;
      border-radius: 12px;
      transition: all 0.5s ease;
      background: #1d1b31;
    }

    > a {
      > i {
        color: #fff;
        height: 60px;
        min-width: 50px;
        font-size: 28px;
        text-align: center;
        line-height: 60px;
      }
    }
  }

  :hover {
    > li {
        >a {
        }
    }
  }

`;

const ToolTip = styled.span`
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 3;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: 0s;
`;

const LinkName = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  :hover {
    transition: all 0.5s ease;
    color: #11101d;
  }
`;

const Profile = styled.li``;

const ProfileDetail = styled.div``;

const NameJob = styled.div``;

const Name = styled.div``;

const Job = styled.div``;
