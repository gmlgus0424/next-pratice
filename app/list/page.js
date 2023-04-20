"use client";
import { useState } from "react";

export default function List() {
  let [수량, 수량변경] = useState(0);
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map(() => {
        <div className="food" key={i}>
          <img src={`/food${i}.png`} className="food-img" />
          <h4>{a} $40</h4>
          <span> {수량} </span>
          <button>+</button>
        </div>;
      })}
      (생략)
    </div>
  );
}
