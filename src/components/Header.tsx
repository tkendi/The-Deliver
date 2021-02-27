import React from "react";
import styled from "styled-components";
import { deliverDataParsing, deliveryInfo } from "../lib/api";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import NumInput from "./NumInput";
import { observer } from "mobx-react";

//store
import DeliverStore from "../stores";

const Header = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [info, setInfo] = React.useState<any>({});
  const [sendInfo, setSendInfo] = React.useState<any>({
    deliverName: "",
    code: "",
  });
  React.useEffect(() => {
    deliveryInfo().then((res) => {
      setInfo({ deliverName: res?.name, code: res?.code });
    });
  }, []);
  return (
    <>
      <Wrap>
        <Title>택배조회 서비스</Title>
        <SelectPosition>
          <NumInput />
          <Select>
            {open ? (
              <>
                <div>
                  <SelectTextWrap>
                    {info.deliverName?.map((cur: any, index: number) => {
                      return (
                        <>
                          <SelectTextContainer
                            key={index}
                            onClick={() => {
                              setSendInfo({
                                deliverName: cur,
                                code: info.code[index],
                              });
                              DeliverStore.deliver.code = info.code[index];
                              DeliverStore.deliver.deliverName = cur;
                            }}
                          >
                            <p>{cur}</p>
                          </SelectTextContainer>
                        </>
                      );
                    })}
                  </SelectTextWrap>
                </div>
                <Text style={{ width: "80%", paddingLeft: 15 }}>
                  {sendInfo.deliverName}
                </Text>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ArrowDropUpIcon onClick={() => setOpen(!open)} />
                </div>
              </>
            ) : (
              <>
                <Text style={{ width: "80%", paddingLeft: 15 }}>
                  {sendInfo.deliverName}
                </Text>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ArrowDropDownIcon onClick={() => setOpen(!open)} />
                </div>
              </>
            )}
          </Select>
          <Button
            onClick={() => {
              DeliverStore.init();
            }}
          >
            <p style={{ color: "#fff", fontSize: 16 }}>조회</p>
          </Button>
        </SelectPosition>
      </Wrap>
    </>
  );
});

export default Header;

const Wrap = styled.div`
  display: flex;
  width: calc(100% - 16px);
  height: 200px;
  background-color: #9a37de;
  align-items: flex-end;
  padding: 0px 16px;
`;

const Title = styled.h1`
  color: #fff;
  width: 50%;
  margin: 0px;
  padding-bottom: 10px;
`;

const SelectPosition = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
  > div {
    opacity: 1;
  }
`;

const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: #e13ffa;
  height: 43px;
  margin-bottom: 10px;
  opacity: 0.45;
  position: relative;
`;

const SelectTextWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: calc(100% - 20%);
  height: 300px;
  padding: 10px;
  position: absolute;
  top: 42px;
  background: #fff;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
`;

const SelectTextContainer = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid #f0f0f0;
  padding: 3px 0px;
`;

const Text = styled.p``;

const Button = styled.button`
  background: none;
  border: none;
  width: 50px;
  padding: 0px;
  margin-left: 10px;
  outline: #949494;
`;
