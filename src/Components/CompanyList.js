import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Company.css";

export default function CompanyList({ company,pre,current }) {
  const [showButtons, setShowButtons] = useState(false);
  const diff = current - pre
  const percent=parseFloat(diff*100/pre).toFixed(2)
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
          {company}
        </div>
        <div>NSE</div>
      </div>
      <div>
        <div className={diff >= 0 ? "increaseStock" : "decreaseStock"}>
          {current}
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
      {showButtons && <Buttons found={true} />}
    </div>
  );
}
