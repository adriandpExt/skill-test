/* eslint-disable react/prop-types */
import Card from "./Card";

const GroupIsland = ({ data }) => {
  return (
    <Card title="Group of Island">
      <div className="flex justify-between">
        <div>
          <p>President</p>

          <div className="flex justify-between gap-5">
            <div>
              <p>{data?.president?.candidates[0]?.name}</p>
              <p>{data?.president?.results?.groups[0]?.group_name}</p>
              <p>{data?.president?.results?.groups[0]?.results?.cand001} </p>

              <p>{data?.president?.results?.groups[1]?.group_name}</p>
              <p>{data?.president?.results?.groups[1]?.results?.cand001} </p>

              <p>{data?.president?.results?.groups[2]?.group_name}</p>
              <p>{data?.president?.results?.groups[2]?.results?.cand001} </p>
            </div>

            <div>
              <p>{data?.president?.candidates[1]?.name}</p>
              <p>{data?.president?.results?.groups[0]?.group_name}</p>
              <p>{data?.president?.results?.groups[0]?.results?.cand002} </p>

              <p>{data?.president?.results?.groups[1]?.group_name}</p>
              <p>{data?.president?.results?.groups[1]?.results?.cand002} </p>

              <p>{data?.president?.results?.groups[2]?.group_name}</p>
              <p>{data?.president?.results?.groups[2]?.results?.cand002} </p>
            </div>
          </div>
        </div>

        <div>
          <div> Vice President</div>

          <div className="flex justify-between gap-5">
            <div>
              <p>{data?.vice_president?.candidates[0]?.name}</p>
              <p>{data?.vice_president?.results?.groups[0]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[0]?.results?.cand003}{" "}
              </p>

              <p>{data?.vice_president?.results?.groups[1]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[1]?.results?.cand003}{" "}
              </p>

              <p>{data?.vice_president?.results?.groups[2]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[2]?.results?.cand003}{" "}
              </p>
            </div>

            <div>
              <p>{data?.vice_president?.candidates[1]?.name}</p>
              <p>{data?.vice_president?.results?.groups[0]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[0]?.results?.cand004}{" "}
              </p>

              <p>{data?.vice_president?.results?.groups[1]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[1]?.results?.cand004}{" "}
              </p>

              <p>{data?.vice_president?.results?.groups[2]?.group_name}</p>
              <p>
                {data?.vice_president?.results?.groups[2]?.results?.cand004}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GroupIsland;
