import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Statistics</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={72} text={"72%"} strokeWidth={5} />
        </div>
        <p className="title">User Active</p>
        <p className="amount">72</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Course Enroll</div>
            <div className="itemResult ">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">17</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Cost Made Today </div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">1.400.000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">This Month</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">13.000.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
