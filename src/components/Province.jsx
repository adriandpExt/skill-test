/* eslint-disable react/prop-types */

import Card from "./Card";

const Province = ({ data }) => {
  const candidates = {
    cand001: "Maria Santos",
    cand002: "Juan Dela Cruz",
    cand003: "Luis Reyes",
    cand004: "Ana Garcia",
  };

  const calculateProvinceTotals = (results) => {
    return (
      results?.provinces?.map((province) => {
        const totalVotes = province?.cities?.reduce((acc, city) => {
          Object.entries(city?.results).forEach(([candidate, votes]) => {
            if (!acc[candidate]) acc[candidate] = 0;
            acc[candidate] += votes;
          });
          return acc;
        }, {});

        const totalVotesWithNames = Object.keys(totalVotes).reduce(
          (acc, candidateId) => {
            const candidateName = candidates[candidateId] || candidateId;
            acc[candidateName] = totalVotes[candidateId];
            return acc;
          },
          {}
        );

        return {
          province_name: province.province_name,
          total_votes: totalVotesWithNames,
        };
      }) || []
    );
  };

  const presidentProvinceTotals = calculateProvinceTotals(
    data?.president?.results || {}
  );
  const vicePresidentProvinceTotals = calculateProvinceTotals(
    data?.vice_president?.results || {}
  );

  return (
    <Card title="Province">
      <h2 className="font-bold">President</h2>
      <ul>
        {presidentProvinceTotals.length > 0 ? (
          presidentProvinceTotals.map((province) => (
            <li key={province.province_name}>
              <h3>{province.province_name}</h3>
              <ul>
                {Object.entries(province.total_votes).map(
                  ([candidateName, totalVotes]) => (
                    <li className="font-bold" key={candidateName}>
                      {candidateName}: {totalVotes}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>

      <h2 className="font-bold">Vice President</h2>
      <ul>
        {vicePresidentProvinceTotals.length > 0 ? (
          vicePresidentProvinceTotals.map((province) => (
            <li key={province.province_name}>
              <h3>{province.province_name}</h3>
              <ul>
                {Object.entries(province.total_votes).map(
                  ([candidateName, totalVotes]) => (
                    <li className="font-bold" key={candidateName}>
                      {candidateName}: {totalVotes}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </Card>
  );
};

export default Province;
