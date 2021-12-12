import React from "react";
import Image from "next/image";
import companiesImg from "../../../assets/img/friend-companies.png";

export default function FriendCompanies() {
  return (
    <section
      style={{
        width: 904,
        height: 93,
        margin: "96px auto",
        pointerEvents: "none",
      }}
    >
      <Image src={companiesImg} alt="friend-company" />
    </section>
  );
}
