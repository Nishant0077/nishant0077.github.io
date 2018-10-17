import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nishant Gupta</h2>
            <img
              src="https://media.licdn.com/dms/image/C4E03AQGp5OXbp54Nlw/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=kE63x-eSdo5leARPAHffnQ9c2pp1wN0T5xVQGkSLFGs"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              You can contact me
            </p>
          </Cell>
          <Cell col={6}>half page</Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
