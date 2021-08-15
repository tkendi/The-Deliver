import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrap>
      <LogoDetail>
        {/* <i className="bx bxl-c-plus-plus icon"></i> */}
        <LogoName>sidebar</LogoName>
        <i className="bx bx-menu" id="btn"></i>
      </LogoDetail>
      <NavList>
        <li>
          <Icon className="bx bx-search"></Icon>
          <Input type="text" placeholder="Search..." />
          <ToolTip>Search</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-grid-alt"></Icon>
            <LinkName>Dashboard</LinkName>
          </a>
          <ToolTip>Dashboard</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-user"></Icon>
            <LinkName>User</LinkName>
          </a>
          <ToolTip>User</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-chat"></Icon>
            <LinkName>Messages</LinkName>
          </a>
          <ToolTip>Messages</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-pie-chart-alt-2"></Icon>
            <LinkName>Analytics</LinkName>
          </a>
          <ToolTip>Analytics</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-folder"></Icon>
            <LinkName>File Manager</LinkName>
          </a>
          <ToolTip>Files</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-cart-alt"></Icon>
            <LinkName>Order</LinkName>
          </a>
          <ToolTip>Order</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-heart"></Icon>
            <LinkName>Saved</LinkName>
          </a>
          <ToolTip>Saved</ToolTip>
        </li>
        <li>
          <a href="#">
            <Icon className="bx bx-cog"></Icon>
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
          <Icon className="bx bx-log-out" id="log_out"></Icon>
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

const LogoDetail = styled.div`
  margin: 0px;

  > i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
  }

  i:hover {
    cursor: pointer;
  }
`;

const LogoName = styled.div`
  display: none;
`;

const NavList = styled.ul`
  width: 100%;
  margin-top: 20px;
  padding: 0px;

  > li {
    width: 60px;
    height: 60px;
    position: relative;
    margin: 0px;
    list-style: none;
    margin: 20px 0px;
  }
`;

const ToolTip = styled.span`
  position: absolute;
  top: -20px;
  left: calc(100% + 15px);
  z-index: 99;
  background: #000;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  color: #000;
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

const Profile = styled.li`
  position: absolute !important;
  bottom: 20px;
`;

const ProfileDetail = styled.div`
  display: none;
`;

const NameJob = styled.div``;

const Name = styled.div``;

const Job = styled.div``;

const Input = styled.input`
  height: 50px;
  display: none;
  font-size: 15px;
  color: #fff;
  font-weight: 400;
  outline: none;
  width: 100%;
  width: 50px;
  border: none;
  border-radius: 12px;
  transition: all 0.5s ease;
  background: #1d1b31;
`;

const Icon = styled.i`
  color: #fff;
  height: 60px;
  min-width: 60px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
  :hover {
    width: 100%;
    transition: all 280ms linear;
    color: #1a1a1a;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    ${ToolTip} {
      display: block;
    }
  }
`;
