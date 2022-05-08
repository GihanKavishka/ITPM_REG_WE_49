import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">This month sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rs.329000.00</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Rooms bokked</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">28</span>
          <span className="featuredMoneyRate">
            7 <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Rooms left</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">19</span>
        </div>
      </div>
    </div>
  );
}
