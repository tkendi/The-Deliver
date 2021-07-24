import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import styled from "styled-components";

import { MenuToggle } from "./_fragments/MenuToggle";
import { useDimensions } from "./_fragments/use-dismensions";
import { Navigation } from "./_fragments/Navigation";

const Home = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Wrap>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <Bakcground variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </Wrap>
  );
};

export default Home;

//components re-setting
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background: linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%);
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    outline: none;
    border: none;
    /* -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; */
    cursor: pointer;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    right: 0px;
    left: 7px;
    top: 100px;
    width: 230px;
  }

  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Bakcground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 350px;
`;
