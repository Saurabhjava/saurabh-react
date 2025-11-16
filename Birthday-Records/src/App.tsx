import React, { useState } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";
import "h8k-components";

const title: string = "Birthday Records";

function App(): JSX.Element {
  const [parameter, setParameter] = useState<string>("");

  const handleSort = (option: string) => {
    setParameter(option);
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Radio sortBy={handleSort} selected={parameter} />
      <Table parameter={parameter} />
    </div>
  );
}

export default App;
