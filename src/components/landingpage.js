import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text" style={{ paddingTop: "5em" }}>
              <h1>Nishant Gupta</h1>

              <p
                style={{
                  textAlign: "justify",
                  textJustify: "inter-word",
                  lineHeight: "40px",
                  fontSize: "30px"
                }}
              >
                Hello there, welcome to my personal website. If you are here,
                then you are looking for something. I, Nishant Gupta, a graduate
                Computer Science student at Northeastern University, Boston, may
                have something to offer. I have a unique way of looking at code
                where code is merely a tool that can be used in many creative
                ways. And creativity seems to come naturally to me. I have
                written short stories, long stories, articles, essays, created
                short animated sequences and made videogames. In spirit of that,
                I have gone ahead and familiarized myself with many tools so
                that I can be creative. I am graduating in December, 2018 and I
                am looking for a real-world opportunity to be creative. As you
                read this, I am available for you.
              </p>

              {/*
              <p style={{ fontSize: "30px", lineHeight: "50px" }}>
                C++ | C# | Spring Boot | HTML5 | Angular 4| JavaScript | C |
                HTML | MySQL | PostgreSQL | AngularJS | Angular Material | Git |
                JIRA | React.js | MongoDB | Unity 3D | Unreal Engine{" "}
              </p>
                */}

              <div className="social-links">
                {/*Linked in */}
                <a
                  href="http://www.linkedin.com/in/nishant-gupta-07"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
                {/*Bitbucket*/}
                <a
                  href="https://bitbucket.org/nishant0077"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-bitbucket" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
