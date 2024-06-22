import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Create-post";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          key={1}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="middle">
          <Header></Header>
          <div className="middle-container">
            {selectedTab == "Home" ? (
              <Postlist></Postlist>
            ) : (
              <Createpost></Createpost>
            )}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
