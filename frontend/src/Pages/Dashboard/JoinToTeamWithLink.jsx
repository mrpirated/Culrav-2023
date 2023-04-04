import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import addMemberToTeamLinkAPI from "../../api/addMemberToTeamLinkAPI";
import { toast } from "react-hot-toast";
import { setLoading } from "../../store/auth";

const JoinToTeamWithLink = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  const { link } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token != "") {
      dispatch(setLoading({ loading: true }));
      addMemberToTeamLinkAPI({
        token: token,
        link: link,
      }).then((response) => {
        dispatch(setLoading({ loading: false }));
        if (response.success) {
          toast.success(response.message);
          navigate("/dashboard");
        } else {
          toast.error(response.message);
          navigate("/");
        }
      });
    }
  }, [token]);

  return (
    <>
      <div></div>
    </>
  );
};

export default JoinToTeamWithLink;
