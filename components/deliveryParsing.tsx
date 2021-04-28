import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { observer } from "mobx-react";

//store
import DeliverStore from "../stores";

const deliveryParsing = observer(() => {
  console.log(DeliverStore.parsingDeliverData);
  return (
    <>
      <Wrap>
        <Container>
          <Item>
            <Typography variant="h6" component="h3">
              상품단계
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" component="h3">
              처리일시
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" component="h3">
              상품상태
            </Typography>
          </Item>
          <Item>
            <Typography variant="h6" component="h3">
              상품위치
            </Typography>
          </Item>
        </Container>
        <BodyWrap>
          {DeliverStore.parsingDeliverDescription?.map(
            (cur: any, index: number) => {
              return (
                <>
                  <BodyContainer>
                    <BodyItem>
                      <Typography style={{ textAlign: "center" }}>
                        {cur.split("(")[0]}
                      </Typography>
                    </BodyItem>
                    <BodyItem>
                      <Typography>
                        {
                          DeliverStore.parsingDeliverData?.time[index]?.split(
                            "T"
                          )[0]  
                        }
                      </Typography>
                    </BodyItem>
                    <BodyItem>
                      <Typography>{DeliverStore.state}</Typography>
                    </BodyItem>
                    <BodyItem>
                      <Typography>
                        {DeliverStore.parsingDeliverData?.location[index]}
                      </Typography>
                    </BodyItem>
                  </BodyContainer>
                </>
              );
            }
          )}
        </BodyWrap>
      </Wrap>
    </>
  );
});

export default deliveryParsing;

const Wrap = styled.div`
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: calc(100% / 4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BodyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0px;
  border-bottom: 1px solid #9b9090;
`;

const BodyItem = styled.div`
  /* margin: 0px 10px; */
  width: calc(100% / 4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
