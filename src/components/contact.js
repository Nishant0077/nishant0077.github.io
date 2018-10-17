import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
              I am a programmer with a creative bent. I like to find unique ways
              of using code to accomplish real-world tasks. Artificial
              Intelligence is something that fascinates me deeply and I have
              gained considerable experience and skills in using a medley of
              algorithms to create powerful AI agents; be it a self-improving
              pokemon battle agent or a game that keeps the player engaged while
              they perform the mundane task of handwriting recognition without
              them knowing it. Apart from expediting the rise of our AI
              overlords, I have experience in front-end and back-end
              technologies which comprised the bulk of my duties as a software
              engineer co-op at Orig3n Inc. Do you have a task that needs to be
              done? Let me design a fun solution for it.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>

            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "K2D" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (857) 269-8038
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "K2D" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    gupta.nisha@husky.neu.edu
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
