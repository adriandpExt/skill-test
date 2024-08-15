import Card from "./Card";

/* eslint-disable react/prop-types */
const Candidate = ({ data }) => {
  const calculateTotalVotes = (candidateId, results) => {
    let totalVotes = 0;

    results.provinces.forEach((province) => {
      province.cities.forEach((city) => {
        totalVotes += city.results[candidateId] || 0;
      });
    });

    results.regions.forEach((region) => {
      totalVotes += region.results[candidateId] || 0;
    });

    results.groups.forEach((group) => {
      totalVotes += group.results[candidateId] || 0;
    });

    totalVotes += results.country.results[candidateId] || 0;

    return totalVotes;
  };

  const renderPres = () => {
    return data.president.candidates.map((pres) => (
      <tr key={pres.id}>
        <td>{pres.name}</td>
        <td>{calculateTotalVotes(pres.id, data.president.results)}</td>
      </tr>
    ));
  };

  const renderVice = () => {
    return data.vice_president.candidates.map((vice) => (
      <tr key={vice.id}>
        <td>{vice.name}</td>
        <td>{calculateTotalVotes(vice.id, data.vice_president.results)}</td>
      </tr>
    ));
  };

  return (
    <Card title="President and Vice President">
      <table className="table">
        <thead>
          <tr className="text-lg text-black">
            <th>President</th>
            <th>Total Votes</th>
          </tr>
        </thead>

        <tbody>{renderPres()}</tbody>

        <thead>
          <tr className="text-lg text-black">
            <th>Vice-President</th>
            <th> Total Votes</th>
          </tr>
        </thead>

        <tbody>{renderVice()}</tbody>
      </table>
    </Card>
  );
};

export default Candidate;
