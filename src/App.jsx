import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [budget, setBudget] = useState(0);

  return <Header budget={budget} setBudget={setBudget} />;
}

export default App;
