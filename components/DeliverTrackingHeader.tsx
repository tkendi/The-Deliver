import React from "react";
import styled from "styled-components";
import { deliverDataParsing, deliveryInfo } from "../api/deliver";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import NumInput from "./NumInput";
import { observer } from "mobx-react";

//store
import DeliverStore from "../stores";

const DeliverTrackingHeader = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [info, setInfo] = React.useState<any>({});
  const [sendInfo, setSendInfo] = React.useState<any>({
    deliverName: "택배사를 선택해 주세요",
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
        {/* <Title>택배조회 서비스</Title> */}
        <SelectPosition>
          <NumInput />
          {/* <BlockPos> */}
          <Select onClick={() => setOpen(!open)}>
            {open && sendInfo.code.length >= 0 ? (
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
                  {sendInfo.deliverName.length > 7
                    ? sendInfo.deliverName.slice(0, 7) + "..."
                    : sendInfo.deliverName}
                </Text>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ArrowDropUpIcon />
                </div>
              </>
            ) : (
              <>
                <Text style={{ width: "80%", paddingLeft: 15 }}>
                  {sendInfo.deliverName.length > 7
                    ? sendInfo.deliverName.slice(0, 7) + "..."
                    : sendInfo.deliverName}
                </Text>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ArrowDropDownIcon />
                </div>
              </>
            )}
          </Select>
          <Button onClick={() => DeliverStore.init()}>조회</Button>
          {/* </BlockPos> */}
        </SelectPosition>
      </Wrap>
    </>
  );
});

export default DeliverTrackingHeader;

const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 50px;
  margin-bottom: 100px;
  z-index: 999;
`;

const SelectPosition = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
  > div {
    opacity: 1;
  }

  @media screen and (max-width: 680px) {
    display: flex;
    flex-flow: column;
  }
`;

const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 43px;
  margin-bottom: 10px;
  opacity: 0.45;
  position: relative;
  cursor: pointer;
  z-index: 999;
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
  border-top: 1px solid #bebebe;
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
  width: fit-content;
  text-align: center;
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  background: #dfdfdf;
  margin-left: 10px;
`;
