import React from "react";
import Image from "next/image";
import companiesImg from "../../../assets/img/friend-companies.png";

export default function FriendCompanies() {
  return (
    <div
      style={{
        width: 904,
        height: 93,
        margin: "96px auto",
      }}
    >
      <Image src={companiesImg} alt="friend-company" />
    </div>
  );
}
