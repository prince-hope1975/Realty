import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/dropdown.module.scss";
import { Checkbox } from "@mui/material";
import { BsChevronCompactDown } from "react-icons/bs";

const dropDown = ({
  data,
}: {
  data: {
    name: string;
    filters: string[];
  };
}) => {
  const [state, setState] = React.useState(true);

  return (
    <motion.div className={styles.dropdown}>
      <div onClick={() => setState(!state)}>
        {data.name}{" "}
        <motion.span
          animate={{ rotate: !state ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <BsChevronCompactDown />
        </motion.span>
      </div>
      <motion.ul
        animate={{
          height: [
            state ? 42 * data.filters.length : 0,
            state ? 0 : 42 * data.filters.length,
          ],
          opacity: [!state ? 0 : 1, !state ? 1 : 0],
        }}
      >
        {data.filters.map((filter) => {
          return (
            <li>
              <Checkbox /> {filter}
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default dropDown;
