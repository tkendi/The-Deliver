import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

//store
import DeliverStore from "../stores";

const NumInput = observer(() => {
  const [text, setText] = React.useState<string>("");
  console.log(text);
  return (
    <>
      <Wrap>
        <Input
          placeholder="송장번호를 입력해주세요"
          type="string"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            DeliverStore.deliver.trackingName = e.target.value;
          }}
        />
      </Wrap>
    </>
  );
});

export default NumInput;

const Wrap = styled.div`
  margin-right: 30px;
`;

const Input = styled.input`
  background: none;
  border: none;
  :focus {
    outline: none;
  }
  border-bottom: 1px solid #f0f0f0;
`;
