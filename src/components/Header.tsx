import React from "react";
import styled from "styled-components";
import { deliverDataParsing, deliveryInfo } from "../lib/api";
import ArrowDropDownIcon from '@material-ui/icons';
import ArrowDropUpIcon from '@material-ui/icons';

const Header = () => {
  React.useEffect(() => {
    deliveryInfo().then((res) => console.log(res));
  }, []);
  return (
    <>
      <Wrap>
        <Title>택배조회 서비스</Title>
        <SelectPosition>
          <Select>
            {/* <ArrowDropDownIcon /> */}
          </Select>
        </SelectPosition>
      </Wrap>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  background-color: #9a37de;
  align-items: flex-end;
`;

const Title = styled.h1`
  color: #fff;
  width: 50%;
  /* border: 1px solid #000; */
  margin: 0px;
  padding-bottom: 10px;
`;

const SelectPosition = styled.div`
  width: 50%;
  /* border: 1px solid #000; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Select = styled.div`
  width: 60%;
  background-color: #E13FFA;
  height: 43px;
  margin-bottom: 10px;
  opacity: 0.45;
`
