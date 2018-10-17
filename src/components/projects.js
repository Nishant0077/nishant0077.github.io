import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  render() {
    return (
      <div className="project-card-1">
        {/*project 1 */}
        <Card
          shadow={5}
          style={{ width: "450px", margin: "auto", paddingTop: "1em" }}
        >
          <CardTitle
            style={{
              color: "white",
              height: "150px",
              background:
                "url(https://i.ytimg.com/vi/ElGm_VUMAy4/maxresdefault.jpg) center / cover"
            }}
          />
          <CardText className="project-card-text" style={{ height: "200px" }}>
            <p>
              This is a turn based battle game where one of the AI agents uses a
              static decision tree to select the next best move and the other
              agent uses genetic algorithms to constantly modify its own
              decision tree over multiple iterations. After each iteration, it
              seeks to improve its performance according a fitness function
              built into it.
            </p>
          </CardText>
          <CardActions border class="project-card-actions">
            <p
              style={{
                fontSize: "20px",
                paddingLeft: "1em",
                paddingBottom: "1em"
              }}
            >
              <hr />
              <a
                style={{ color: "#2684FF" }}
                href="https://bitbucket.org/nishant0077/pokemon-battle-ai-using-genetic-algorithms"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-bitbucket" aria-hidden="true" />
              </a>
            </p>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      </div>
    );
  }
}

export default Projects;
