import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const deliveryParsing = () => {
  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.name !== this.props.name) {
  //     const deliverCode = await deliveryInfo();
  //     console.log(deliverCode.code);
  //     deliverCode.code.map((code, index) => {
  //       if (this.props.name === index) {
  //         this.setState({
  //           url: deliverCode.code[index],
  //         });
  //       }
  //     });
  //     console.log(this.state.url);
  //   }
  //   if (prevProps.number !== this.props.number) {
  //     console.log(this.props.number);
  //     const parsing = await deliverDataParsing(
  //       this.state.url,
  //       this.props.number
  //     );
  //     this.setState({
  //       time: parsing.time,
  //       description: parsing.description,
  //       location: parsing.location,
  //       state: parsing.state,
  //     });
  //   }
  // }

  return (
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

      <div>
        {/* {time.map((time, i) => (
              <TableRow key={i}>
                <div component="th" scopre="row" className={styles.row}>
                  <Typography variant="body1">{this.state.state}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{time}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{description[i]}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{location[i]}</Typography>
                </TableCell>
              </TableRow>
            ))} */}
      </div>
    </Wrap>
  );
};

export default deliveryParsing;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Item = styled.div``;
