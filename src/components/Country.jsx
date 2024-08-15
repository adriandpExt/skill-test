/* eslint-disable react/prop-types */
import Card from "./Card";

const Country = ({ data }) => {
  const president = data?.president;
  const vice = data?.vice_president;

  return (
    <Card title={"Country"}>
      <div className="flex justify-between">
        <div>
          <p>President</p>
          <ul>
            <li>
              <p>
                {president.candidates[0].name}:
                {president.results?.country.results.cand001} total votes
              </p>
            </li>
            <li>
              <p>
                {president.candidates[1].name}:
                {president.results?.country.results.cand002} total votes
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p> Vice - President</p>
          <ul>
            <li>
              <p>
                {vice.candidates[0].name}:
                {vice.results?.country.results.cand003} votes
              </p>
            </li>
            <li>
              <p>
                {vice.candidates[1].name}:
                {vice.results?.country.results.cand004} votes
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Country;
