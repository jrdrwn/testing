import Navbar from "../../../components/private/shared/Navbar";
import Sidebar from "../../../components/private/community/Sidebar";
import Content from "../../../components/private/community/Content";
import SideAccount from "../../../components/private/community/SideAccount";
import Footer from "../../../components/public/shared/Footer";

import React from "react";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <Content />
        <SideAccount />
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
