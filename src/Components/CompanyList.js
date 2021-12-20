import React, { useState } from "react";
import Buttons from "./Buttons";
import "../Styles/Company.css";

export default function CompanyList({ stock}) {
  const [showButtons, setShowButtons] = useState(false);
  const diff = +stock[2] - +stock[1]
  const percent=parseFloat(diff*100/+stock[1]).toFixed(2)
  return (
    <div
      className="companyContainer"
      onMouseEnter={() => {
        setShowButtons(true);
      }}
      onMouseLeave={() => {
        setShowButtons(false);
      }}
    >
      <div>
        <div className={diff >= 0 ? "increaseStock" : "decreaseStock"}>
          {stock[0].split("::")[0]}
        </div>
        <div>NSE</div>
      </div>
      <div>
        <div className={diff >= 0 ? "increaseStock" : "decreaseStock"}>
          {+stock[2]}
        </div>
        <div className="percentage">
          {diff >= 0 ? (
            <img src="/images/up.png" alt="" />
          ) : (
            <img src="/images/down.png" alt="" />
          )}{" "}
          <span>{`${percent}%`}</span>
        </div>
      </div>
      {showButtons && <Buttons found={true} stock={stock} />}
    </div>
  );
}
