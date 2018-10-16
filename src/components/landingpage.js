import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQGp5OXbp54Nlw/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=kE63x-eSdo5leARPAHffnQ9c2pp1wN0T5xVQGkSLFGs"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Nishant The Programmer</h1>
              <hr />
              <p>Java | Python | C++ | Unity 3D </p>

              <div className="social-links">
                {/*Linked in */}
                <a
                  href="http://www.linkedin.com/in/nishant-gupta-07"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
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
