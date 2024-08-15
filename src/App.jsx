import { useState } from "react";
import electionResult from "./election.json";

import Candidate from "./components/Candidate";
import Municipality from "./components/Municipality";
import Province from "./components/Province";
import GroupIsland from "./components/GroupIsland";
import Country from "./components/Country";
import Region from "./components/Region";
import ReverseString from "./components/ReverseString";

const menu = [
  "Municipality",
  "Province",
  "GroupIsland",
  "Country",
  "Region",
  "Reverse",
];

function App() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const getButtonClass = (item) => {
    return `btn ${activeComponent === item ? "active" : ""}`;
  };

  return (
    <main className=" p-10 bg-[#E7E8D8]">
      <Candidate data={electionResult} />

      <p className="font-bold text-lg">Show Election Result</p>
      {menu.map((item) => (
        <button
          key={item}
          className={getButtonClass(item)}
          onClick={() => handleButtonClick(item)}
        >
          {item}
        </button>
      ))}

      {activeComponent === "Candidate" && <Candidate data={electionResult} />}
      {activeComponent === "Municipality" && (
        <Municipality data={electionResult} />
      )}
      {activeComponent === "Province" && <Province data={electionResult} />}
      {activeComponent === "GroupIsland" && (
        <GroupIsland data={electionResult} />
      )}
      {activeComponent === "Country" && <Country data={electionResult} />}
      {activeComponent === "Region" && <Region data={electionResult} />}
      {activeComponent === "Reverse" && <ReverseString />}
    </main>
  );
}

export default App;
