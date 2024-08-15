/* eslint-disable react/prop-types */
import Card from "./Card";

const Region = ({ data }) => {
  const president = data.president;
  const vice = data.vice_president;
  return (
    <Card title={"Region"}>
      <div className="flex justify-between">
        <div>
          <p>President</p>
          <ul>
            <li>
              <p className="font-semibold">{president.candidates[0].name}</p>
              <p>
                {president.results.regions[0].region_name}:
                {president.results.regions[0].results.cand001}total votes
              </p>
              <p>
                {president.results.regions[1].region_name}:
                {president.results.regions[1].results.cand001}total votes
              </p>
            </li>
            <li>
              <p className="font-semibold">{president.candidates[1].name}</p>
              <p>
                {president.results.regions[0].region_name}:
                {president.results.regions[0].results.cand002}total votes
              </p>
              <p>
                {president.results.regions[1].region_name}:
                {president.results.regions[1].results.cand002}total votes
              </p>
            </li>
          </ul>
        </div>

        <div>
          <p> Vice - President</p>
          <ul>
            <li>
              <p className="font-semibold">{vice.candidates[0].name}</p>
              <p>
                {president.results.regions[0].region_name}:
                {president.results.regions[0].results.cand003}total votes
              </p>
              <p>
                {president.results.regions[1].region_name}:
                {president.results.regions[1].results.cand003}total votes
              </p>
            </li>
            <li>
              <p className="font-semibold">{vice.candidates[1].name}</p>
              <p>
                {vice.results.regions[0].region_name}:
                {vice.results.regions[0].results.cand004}total votes
              </p>
              <p>
                {vice.results.regions[1].region_name}:
                {vice.results.regions[1].results.cand004}total votes
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Region;
