import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Landing = () => {
  const [allTeams, setAllTeams] = useState([]);

  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

  //GET ALL THE TEAMS
  useEffect(() => {
    axios
      .get("http://localhost:8000/teams")
      .then((response) => {
        // console.log("all teams from axios: ", response.data);
        setAllTeams(response.data);
      })
      .catch((error) => {
        console.log("Error gettin all teams from useEffect axios");
      });
  }, []);

  const createGroup = (group) => {
    const teamsInGroup = [];
    for (let i = 0; i < allTeams.length; i++) {
      if (allTeams[i].teamCode[0] === group) {
        teamsInGroup.push(allTeams[i]);
      }
    }
    return teamsInGroup;
  };

  return (
    <div>
      <h3>Landing</h3>
      <button>
        <a href="/addteams">Manage Teams</a>
      </button>
      <h2>Groups</h2>
      <AllGroupsStyle>
        {groups.map((group, index) => {
          return (
            <GroupStyle key={index}>
              <GroupHeadStyle>Group {group}</GroupHeadStyle>
              {createGroup(group).map((team, index) => {
                return <h4 key={index}>{team.name}</h4>;
              })}
            </GroupStyle>
          );
        })}
      </AllGroupsStyle>
    </div>
  );
};

export default Landing;

//STYLED COMPONENTS

const AllGroupsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

const GroupStyle = styled.div`
  width: 150px;
  background-color: blue;
  color: white;
  padding: 1px 6px;
  border: solid 2px black;
  border-radius: 7px;
`;

const GroupHeadStyle = styled.div`
  background-color: red;
  text-align: center;
  font-size: large;
  font-weight: bold;
`;
