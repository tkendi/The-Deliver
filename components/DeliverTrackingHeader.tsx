import React from "react";
import styled, { css } from "styled-components";
import Select from "react-select";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { observer } from "mobx-react";

//components
import NumInput from "./NumInput";

//api
import { deliveryInfo } from "../api/deliver";

//store
import DeliverStore from "../stores/DeliveryTracking";

const DeliverTrackingHeader = observer(() => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [info, setInfo] = React.useState<any>({});
  const [deliverName, setDeliverName] = React.useState<
    [{ value: ""; label: "" }]
  >([{ value: "", label: "" }]);
  const [sendInfo, setSendInfo] = React.useState<any>({
    deliverName: "택배사를 선택해 주세요",
    code: "",
  });

  React.useEffect(() => {
    deliveryInfo().then((res) => {
      setInfo({ deliverName: res?.name, code: res?.code });
      const arr: any = [];
      res?.name.map((cur: any, index) => {
        arr.push({ value: index, label: cur });
        setDeliverName(arr);
      });
    });
  }, []);

  React.useEffect(() => {
    console.log(sendInfo);
  }, [sendInfo]);

  React.useEffect(() => {
    DeliverStore.init();
  }, [JSON.stringify(DeliverStore.deliver)]);

  const onSelectDelivery = (e: { value: number; label: string }) => {
    setSendInfo({ deliverName: e.label, code: info.code[e.value] });
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
        {/* <Title>택배조회 서비스</Title> */}
        <SelectPosition>
          <NumInput />
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
