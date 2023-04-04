import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import addMemberToTeamLinkAPI from "../../api/addMemberToTeamLinkAPI";

const JoinToTeamWithLink = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  const { link } = useParams();

  useEffect(() => {
    if (token != "") {
      addMemberToTeamLinkAPI({
        token: token,
        link: link,
      }).then((response) => {
        console.log(response);
      });
    }
  }, [token]);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default JoinToTeamWithLink;
