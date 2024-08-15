/* eslint-disable react/prop-types */

import Card from "./Card";

const Municipality = ({ data }) => {
  const president = data.president;
  const vice = data.vice_president;

  return (
    <Card title="Municipality">
      <table className="table">
        <thead>
          <tr className="text-lg text-black">
            <th>Candidate</th>
            <th>Total Votes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{president.candidates[0].name}</td>
            <td>
              {president.results.provinces[0].cities[0].city_name} :
              {president.results.provinces[0].cities[0].results.cand001}
              {president.results.provinces[0].cities[1].city_name} :
              {president.results.provinces[0].cities[1].results.cand001}
            </td>
          </tr>
          <tr>
            <td>{president.candidates[1].name}</td>
            <td>
              {president.results.provinces[0].cities[0].city_name} :
              {president.results.provinces[0].cities[0].results.cand002}
              {president.results.provinces[0].cities[1].city_name} :
              {president.results.provinces[0].cities[1].results.cand002}
            </td>
          </tr>
          <tr>
            <td>{vice.candidates[0].name}</td>
            <td>
              {vice.results.provinces[0].cities[0].city_name} :
              {vice.results.provinces[0].cities[0].results.cand003}
              {vice.results.provinces[0].cities[1].city_name} :
              {vice.results.provinces[0].cities[1].results.cand003}
            </td>
          </tr>
          <tr>
            <td>{vice.candidates[1].name}</td>
            <td>
              {vice.results.provinces[0].cities[0].city_name} :
              {vice.results.provinces[0].cities[0].results.cand004}
              {vice.results.provinces[0].cities[1].city_name} :
              {vice.results.provinces[0].cities[1].results.cand004}
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default Municipality;
