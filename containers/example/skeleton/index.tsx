import React from "react";
import styled from "styled-components";

const Skeleton = () => {
  return (
    <>
      <SkeletonItem>
        <div>
          <SkeletonImg />
        </div>
        <SkeletonInfo>
          <SkeletonName />
          <SkeletonEmail />
        </SkeletonInfo>
      </SkeletonItem>

      <SkeletonItem>
        <div>
          <SkeletonVertical />
        </div>
      </SkeletonItem>
    </>
  );
};

export default Skeleton;

const SkeletonItem = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const SkeletonImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: loading 3s infinite linear;

    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      50%,
      100% {
        transform: translateX(300px);
      }
    }
  }
`;

const SkeletonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const SkeletonName = styled.p`
  width: 280px;
  height: 18px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: loading 3s infinite linear;

    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      50%,
      100% {
        transform: translateX(300px);
      }
    }
  }
`;

const SkeletonEmail = styled.p`
  width: 250px;
  height: 18px;
  background: #f2f2f2;
  margin-top: 3px;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: loading 3s infinite linear;

    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      50%,
      100% {
        transform: translateX(300px);
      }
    }
  }
`;

const SkeletonVertical = styled.div`
  width: 30px;
  height: 300px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(190, 190, 190, 0.2) 25%,
      rgba(129, 129, 129, 0.24) 37%,
      rgba(190, 190, 190, 0.2) 63%
    );
    background-size: 400% 100%;
    animation: loading 3s infinite linear;

    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      50%,
      100% {
        transform: translateX(300px);
      }
    }
  }
`;
