import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import Stack from "@mui/material/Stack";
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./footer.css";
import "./hamburgermenu.css";
import "./left.css";
import "./main.css";
import "./navbar.css";
import "./right.css";

const email = "sambhavjain@gamil.com";
const Choice = ["Mnnit", "Other"];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Dashboard() {
  return (
    <>
      {/* <!-- navbar-------------------------------------------------------------------------------- --> */}
      <div>
        <nav className="navbar">
          <div className="logo-container">
            <img src="logo.png" alt="leetcode" className="logo" />
          </div>
          <ul className="nav bold-700">
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Problems</a>
            </li>
            <li>
              <a href="contest.html">Contest</a>
            </li>
            <li>
              <a href="#">Discuss</a>
            </li>
            <li>
              <a href="#">Interview</a>
            </li>
            <li>
              <a href="#" style={{ color: "#EB9718" }}>
                Store
              </a>
            </li>
          </ul>
          <div className="right-nav">
            <p
              className="padding-10"
              style={{ color: "#EB9718", backgroundColor: "#3E3E3E" }}
            >
              Premium
            </p>

            <p></p>
            <a href="https://www.linkedin.com/in/sambhav-jain-6519b8237/">
              <img
                className="padding-10"
                src="images/default_avatar.jpg"
                alt=""
              />
            </a>
          </div>
        </nav>
      </div>
      {/* <!-- -------------------------------------------------------------------------------------- --> */}

      {/* <!-- main body ----------------------------------------------------------------------------- --> */}
      <div className="body">
        {/* <!--below header--> */}
        <div className="content">
          {/* <!-- left side content  --> */}
          {/* <!-- profile section --> */}
          <div className="left">
            {/* <!-- first section  --> */}
            <div className="first-section">
              <div className="first-section-flex">
                <div className="avtar">
                  <a href="https://www.linkedin.com/in/sambhav-jain-6519b8237/">
                    <img src="images/default_avatar.jpg" alt="user_name" />
                  </a>
                </div>

                <div className="data">
                  <strong className="color1">jain233</strong>
                  <div className="rank">
                    <p className="color2">
                      Rank <strong className="color1">1,586,788</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="edit-profile-btn">
                <a href="#" className="bold">
                  Edit Profile
                </a>
              </div>
            </div>
            <div className="hr"></div>
            {/* <!-- first section ends --> */}

            {/* <!-- second section starts --> */}
            <div className="second-section">
              {/* <!-- heading community stats  --> */}
              <div className="head">
                <p className="color1 bold">Community Stats</p>
              </div>
              <div className="box">
                <div className="container">
                  <p className="color2">
                    Views <span className="color1">0</span>
                  </p>
                  <p className="color2 short-text">
                    last week <span>0</span>
                  </p>
                </div>
                <div className="container">
                  <p className="color2">
                    Solution <span className="color1">0</span>
                  </p>
                  <p className="color2 short-text">
                    last week <span>0</span>
                  </p>
                </div>
                <div className="container">
                  <p className="color2">
                    Discuss <span className="color1">0</span>
                  </p>
                  <p className="color2 short-text">
                    last week <span>0</span>
                  </p>
                </div>
                <div className="container">
                  <p className="color2">
                    Reputation <span className="color1">0</span>
                  </p>
                  <p className="color2 short-text">
                    last week <span>0</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hr"></div>
            {/* <!-- second section ends  --> */}

            {/* <!-- third section starts  --> */}
            <div className="third-section">
              <p className="color1 heading bold-700">Languages</p>
              <div className="language-learned">
                <p className="box-element">C++</p>
                <p className="bold-700 color1 s15p">
                  15 <span>problem solved</span>
                </p>
              </div>
            </div>
            <div className="hr"></div>
            {/* <!-- third section ends  --> */}

            {/* <!-- fourth section starts  --> */}
            <div className="fourth-section">
              <p className="color1 heading bold-700">Skills</p>
              {/* <!-- advanced level  --> */}
              <div className="level">
                <div className="coloured-circle" id="red"></div>
                <p className="color1">Advanced</p>
              </div>
              <div className="level-items">
                <p className="box-element">Dynamic Programming</p>
                <p className="box-element">Backtracking</p>
                <p className="box-element">Divide and Conquer</p>
              </div>
              {/* <!-- intermediate level  --> */}
              <div className="level">
                <div className="coloured-circle" id="yellow"></div>
                <p className="color1">Intermediate</p>
              </div>
              <div className="level-items">
                <p className="box-element">Binary Search</p>
                <p className="box-element">Hash Table</p>
                <p className="box-element">Math</p>
              </div>
              {/* <!-- beginner level  --> */}
              <div className="level">
                <div className="coloured-circle" id="green"></div>
                <p className="color1">Fundamental</p>
              </div>
              <div className="level-items">
                <p className="box-element">Array</p>
                <p className="box-element">Two Pointer</p>
                <p className="box-element">String</p>
              </div>
            </div>
            {/* <!-- fourth section ends  --> */}
          </div>

          {/* <!-- right side content --> */}
          <div className="right">
            {/* <!-- first row  --> */}
            <div className="first-row">
              {/* <!-- username  --> */}
              <div className="bg-d_primary rounded-md m-2 p-4 shadow-xl text-4xl">
                <p>
                  Hello <span className="text-red">Username</span> !
                </p>
              </div>
              {/* <!-- username  --> */}

              {/* <!-- status , verification  --> */}
              <div className="bg-d_primary rounded-md m-2 p-4 shadow-xl text-xl">
                <p>
                  STATUS : <span style={{ color: "#2CBB5D" }}>VERIFIED</span>
                </p>
              </div>
            </div>
            {/* <!-- first row ends  --> */}

            {/* <!-- form section --> */}
            <div className="bg-d_primary rounded-md m-2 p-4 shadow-xl text-xl">
              <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Institution"
                  defaultValue="Mnnit"
                  color="primary"
                  helperText="Please select your Institution"
                  fullWidth
                >
                  {Choice.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>

                <div className="my-2 mt-5">
                  <p>Upload Your Image</p>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" endIcon={<UploadIcon />}>
                    Upload Image
                  </Button>
                  <Button variant="contained" disabled endIcon={<VisibilityIcon />}>
                    Preview
                  </Button>
                </Stack>

                <div className="my-2 mt-5">
                  <p>Upload ID Card</p>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" endIcon={<UploadIcon />}>
                    Upload ID Card
                  </Button>
                  <Button variant="contained" disabled endIcon={<VisibilityIcon />}>
                    Preview
                  </Button>
                </Stack>

              </ThemeProvider>
            </div>
            {/* <!-- form section  --> */}
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          {/* <!-- copyright div  --> */}
          <div className="copyright">
            <p className="color1">Copyright © 2022 LeetCode</p>
          </div>

          <div className="tabs">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Bug Bounty</a>
              </li>
              <li>
                <a href="#">Assessment</a>
              </li>
              <li>
                <a href="#">Students</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="location">
            <img src="images/unitedstates.svg" alt="" />
            <p>United States</p>
          </div>
        </div>
      </footer>
      {/* <!-- sticky buttons         --> */}
      <div className="icon sticky-button" id="upward"></div>
      <div className="icon sticky-button"></div>

      {/* <!-- hamburger menu  --> */}
      <div className="menuHamburger">
        <ul className="nav bold-700">
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Problems</a>
          </li>
          <li>
            <a href="contest.html">Contest</a>
          </li>
          <li>
            <a href="#">Discuss</a>
          </li>
          <li>
            <a href="#">Interview</a>
          </li>
          <li>
            <a href="#" style={{ color: "#EB9718" }}>
              Store
            </a>
          </li>
          <div className="hr"></div>
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">My playgrounds</a>
          </li>
          <li>
            <a href="#">Dark Mode</a>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dashboard;
