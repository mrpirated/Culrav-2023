import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import getRegisterdTeamAPI from "../../api/getRegisteredTeamsAPI";
import { useDispatch, useSelector } from "react-redux";
import getCulravId from "../../controllers/getCulravId";
import getTeamDetailsAPI from "../../api/getTeamDetailsAPI";
import { setLoading } from "../../store/auth";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: grey[200],
  },
});

const StyledTableRow = styled(TableRow)(({ t }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.status.danger,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const {
    row,
    teamMembers,
    open,
    setOpen,
    setSelectedTeam,
    selectedTeam,
    index,
  } = props;

  return (
    <React.Fragment>
      <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              if (selectedTeam === row.team_id) setOpen(!open);
              else setOpen(true);
              setSelectedTeam(row.team_id);
            }}
          >
            {open && selectedTeam === row.team_id ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell>{index + 1}</TableCell>
        <TableCell component="th" scope="row" align="right">
          {row.team_name}
        </TableCell>
        <TableCell align="right">{row.leader_name}</TableCell>
        <TableCell align="right">{row.leader_culrav_id}</TableCell>
        <TableCell align="right">{row.leader_phone}</TableCell>
        <TableCell align="right">{row.team_size}</TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse
            in={open && selectedTeam === row.team_id}
            timeout="auto"
            unmountOnExit
          >
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Team Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr. no.</TableCell>
                    <TableCell>Member Name</TableCell>
                    <TableCell>Culrav Id</TableCell>
                    {row.leader_mnnit_id === null ? (
                      <TableCell>College</TableCell>
                    ) : (
                      <TableCell>MNNIT ID</TableCell>
                    )}
                    <TableCell>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teamMembers.map((e, ind) => (
                    <TableRow key={e.user_culrav_id}>
                      <TableCell component="th" scope="row">
                        {ind + 1}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {e.user_name}
                      </TableCell>
                      <TableCell>{e.user_culrav_id}</TableCell>
                      {row.leader_mnnit_id === null ? (
                        <TableCell>{e.college}</TableCell>
                      ) : (
                        <TableCell>{e.mnnit_id}</TableCell>
                      )}

                      <TableCell>{e.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

const EventTable = (props) => {
  const { selectedEvent } = props;
  const [rows, setRows] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(0);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedEvent) {
      // console.log("useEffect Called");
      const data = {
        token: auth.token,
        event_id: selectedEvent.value,
      };

      const fillRows = [];
      dispatch(setLoading({ loading: true }));
      getRegisterdTeamAPI(data)
        .then((response) => {
          console.log(response);
          response.data.forEach((element) => {
            const object = {
              team_id: element.team_id,
              leader_culrav_id: getCulravId(element.leader_id),
              team_name: element.team_name,
              leader_name: element.leader_name,
              leader_mnnit_id: element.leader_mnnit_id,
              leader_phone: element.leader_phone,
              team_size: element.team_size,
            };
            fillRows.push(object);
          });
          setRows(fillRows);
        })
        .finally(() => {
          dispatch(setLoading({ loading: false }));
        });
    }
  }, [selectedEvent]);
  useEffect(() => {
    if (open) {
      dispatch(setLoading({ loading: true }));
      getTeamDetailsAPI({ token: auth.token, team_id: selectedTeam })
        .then((response) => {
          var team_members = response.data.team_members.map((e) => {
            e.user_culrav_id = getCulravId(e.user_id);
            return e;
          });

          setTeamMembers(team_members);
        })
        .finally(() => {
          dispatch(setLoading({ loading: false }));
        });
    }
  }, [selectedTeam]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Sr. no.</TableCell>
            <TableCell align="right">Team Name</TableCell>
            <TableCell align="right">Team Leader</TableCell>
            <TableCell align="right">Culrav Id</TableCell>
            <TableCell align="right">Phone No.</TableCell>
            <TableCell align="right">Team Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              key={row.name}
              index={index}
              row={row}
              teamMembers={teamMembers}
              open={open}
              setOpen={setOpen}
              setSelectedTeam={setSelectedTeam}
              selectedTeam={selectedTeam}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EventTable;
