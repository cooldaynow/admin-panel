import React, { ReactElement } from "react";
import styles from "./index.css";

const App = (): ReactElement => {
  return (
    <div className={`${styles.block}`}>
      <h1 className={styles.transition}>Hello World!</h1>
    </div>
  );
};

export default App;
