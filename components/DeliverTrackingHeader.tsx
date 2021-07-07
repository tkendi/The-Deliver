import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import { observer } from "mobx-react";

//components
import NumInput from "./NumInput";

//api
import { deliveryInfo } from "../api/deliver";

//store
import DeliverStore from "../stores/DeliveryTracking";

const DeliverTrackingHeader = observer(() => {
  const [info, setInfo] = useState<any>({});
  const [trackingNum, setTrackingNum] = useState("");
  const [deliverName, setDeliverName] = useState<[{ value: ""; label: "" }]>([
    { value: "", label: "" },
  ]);
  const [sendInfo, setSendInfo] = useState<any>({
    deliverName: "",
    code: "",
  });

  useEffect(() => {
    deliveryInfo().then((res) => {
      setInfo({ deliverName: res?.name, code: res?.code });
      const arr: any = [];
      res?.name.map((cur: any, index) => {
        arr.push({ value: index, label: cur });
        setDeliverName(arr);
      });
    });
  }, []);

  useEffect(() => {
    if (sendInfo.deliverName && sendInfo.code && trackingNum) {
      console.log(sendInfo);
      DeliverStore.init(sendInfo.code, trackingNum);
    }
  }, [sendInfo, trackingNum]);

  const onSelectDelivery = (e: { value: number; label: string }) => {
    setSendInfo({ deliverName: e.label, code: info.code[e.value] });
  };

  const getTrackingNumber = (trackingNum: string) => {
    setTrackingNum(trackingNum);
  };

  const customStyles = {
    menu: (provided: any) => ({
      ...provided,
    }),

    control: (_: any, { selectProps: { width } }: any) => ({
      width: width,
      display: "flex",
      border: `2px solid #d6d6d6`,
      opacity: 0.75,
      borderRadius: 5,
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <Wrap>
        <SelectPosition>
          <NumInput getTrackingNumber={getTrackingNumber} />
          <BlockPos>
            <SelectWrap>
              <CustomSelect
                onChange={onSelectDelivery}
                styles={customStyles}
                menuColor="red"
                width={`300px`}
                options={deliverName}
              />
            </SelectWrap>
          </BlockPos>
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
  margin-bottom: 50px;
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

const BlockPos = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
`;

const CustomSelect = styled(Select)<{ open: boolean }>``;

const SelectWrap = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
