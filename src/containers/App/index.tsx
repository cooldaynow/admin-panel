import React, { ReactElement, useState } from "react";
import styles from "./index.css";
import { Button, DatePicker, Modal } from "antd";

const App = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);
  return (
    <div className={`${styles.block}`}>
      <h1 className={styles.transition}>Hello World!</h1>
      <Button size={"large"} type={"primary"} onClick={showModal}>
        Open Modal
      </Button>
      <DatePicker />
      <Modal
        title="Hello Modal"
        visible={isVisible}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <p>Hello World...</p>
        <p>Modal => antd</p>
      </Modal>
    </div>
  );
};

export default App;
