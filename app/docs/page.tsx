"use client";
import React, { useState } from "react";
import Header from "../components/landingPage/header";

const Page = () => {
  const [toggleHeader, settoggleHeader] = useState(false);
  return (
    <div className="bg-white w-full p-6 min-h-screen">
      <Header whereBeingUsed="Docs" toggleHeader={toggleHeader} settoggleHeader={settoggleHeader} />
      Page
    </div>
  );
};

export default Page;
