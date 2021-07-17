import React from "react";
import styled from "styled-components";

//store
import { useEffect } from "react";

interface Props {
  getTrackingNumber: (trackingNum: string) => void;
}

const NumInput = ({ getTrackingNumber }: Props) => {
  const [text, setText] = React.useState<string>("");

  useEffect(() => {
    getTrackingNumber(text);
  }, [text]);

  return (
    <>
      <Wrap>
        <Input
          placeholder="송장번호를 입력해주세요"
          type="string"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Wrap>
    </>
  );
};

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
