import { motion } from "framer-motion";
import styled from "styled-components";

const MenuItem = ({ i }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  const style = { border: `1px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
    >
      <Icon style={style} />
      <Text style={style} />
    </motion.li>
  );
};

export default MenuItem;

// .icon_placeholder {
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     margin-right: 30px;
// }

// .text_placeholder {
//     width: 200px;
//     height: 20px;
//     border-radius: 5px;
//     flex: 1;
// }

const Icon = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 30px;
`;

const Text = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  flex: 1;
`;
