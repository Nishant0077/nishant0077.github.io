import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Content, Navigation } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <h3 style={{ fontFamily: "K2D" }}>My Portfolio</h3>
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/projects">
                <h4 style={{ fontFamily: "K2D" }}>Projects</h4>
              </Link>
              <Link to="/contact">
                <h4 style={{ fontFamily: "K2D" }}>Contact</h4>
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Quick Links" style={{ fontFamily: "K2D" }}>
            <Navigation>
              <Link to="/projects">
                <h4 style={{ fontFamily: "K2D" }}>Projects</h4>
              </Link>
              <Link to="/contact">
                <h4 style={{ fontFamily: "K2D" }}>Contact</h4>
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
