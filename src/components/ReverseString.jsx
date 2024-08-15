import { useState } from "react";

const ReverseString = () => {
  const [data, setData] = useState({
    candidates: [
      { name: "BONGBONG MARCOS", votes: 18975119 },
      { name: "LENI ROBREDO", votes: 8979607 },
    ],
    transformedData: [],
  });

  const reverseStringFromCenter = (str) => {
    const length = str.length;
    const center = Math.floor(length / 2);

    const leftPart = str.slice(0, center);
    const rightPart = str.slice(center);

    const reversedLeft = leftPart.split("").reverse().join("");
    const reversedRight = rightPart.split("").reverse().join("");

    return reversedLeft + reversedRight;
  };

  const reverseNumber = (num) => {
    return parseInt(num.toString().split("").reverse().join(""), 10);
  };


  const transformData = () => {
    const transformed = data.candidates.map((candidate) => ({
      name: reverseStringFromCenter(candidate.name),
      votes: reverseNumber(candidate.votes),
    }));

    setData({
      ...data,
      transformedData: transformed,
    });
  };

  return (
    <div>
      <h1>Original Data</h1>
      <ul>
        {data.candidates.map((candidate, index) => (
          <li key={index}>
            {candidate.name} = {candidate.votes.toLocaleString()}
          </li>
        ))}
      </ul>

      <button onClick={transformData} className="btn">
        Transform Data
      </button>

      {data.transformedData.length > 0 && (
        <div>
          <h1>Transformed Data</h1>
          <ul>
            {data.transformedData.map((candidate, index) => (
              <li key={index}>
                {candidate.name} = {candidate.votes.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReverseString;
