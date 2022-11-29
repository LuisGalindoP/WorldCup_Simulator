import React, { useEffect, useState } from "react";
import axios from "axios";

const Groups = (props) => {
  const { allTeams, setAllTeams } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((res) => {
        // console.log(res.data);
        setAllTeams(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // FUNCTION TO CREATE THE GROUPS
  //It returns all the elements necessary to create the a group
  //I requires only the letter of the group to select the teams in that group based on the Teams array imported on top
  const createGroup = (group) => {
    return (
      <div className="w-96 bg-white rounded drop-shadow-md">
        <table className="table-fixed border-separate border-spacing-2 ">
          <thead className="text-slate-500">
            <th className="font-normal w-36 text-left">GROUP {group}</th>
            <th className={thStyling}>P</th>
            <th className={thStyling}>W</th>
            <th className={thStyling}>D</th>
            <th className={thStyling}>L</th>
            <th className={thStyling}>GD</th>
            <th className={thStyling}>PTS</th>
          </thead>
          <tbody>
            {allTeams.length &&
              allTeams.map((team, index) => {
                if (team.teamCode[0] === group) {
                  return (
                    <tr key={index}>
                      <td className="flex gap-2 text-center">
                        <img
                          src={team.flag}
                          alt=""
                          width="30"
                          height="15"
                          className="drop-shadow-md "
                        />
                        <h4>{team.name}</h4>
                      </td>
                      <td className={tdStyling}>0</td>
                      <td className={tdStyling}>0</td>
                      <td className={tdStyling}>0</td>
                      <td className={tdStyling}>0</td>
                      <td className={tdStyling}>0</td>
                      <td className={tdStyling}>0</td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="m-4">
      <h2 className="text-center font-medium m-4 text-white text-xl">GROUPS</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {/* GROUPS ALL CALLED HERE */}
        {createGroup("A")}
        {createGroup("B")}
        {createGroup("C")}
        {createGroup("D")}
        {createGroup("E")}
        {createGroup("F")}
        {createGroup("G")}
        {createGroup("H")}
      </div>
    </div>
  );
};

const tdStyling = "text-sm text-center ";
const thStyling = "font-light w-8 text-sm";

export default Groups;
