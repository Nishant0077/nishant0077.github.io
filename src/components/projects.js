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

  toggleCategories() {
    /*an if statement for each project */
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/*project 1 */}
          <Card shadow={5} style={{ width: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "150px",
                background:
                  "url(https://i.ytimg.com/vi/ElGm_VUMAy4/maxresdefault.jpg) center / cover"
              }}
            />
            <CardText className="project-card-text" style={{ height: "400px" }}>
              <p>
                This is a turn based battle game where one of the AI agents uses
                a static decision tree to select the next best move and the
                other agent uses genetic algorithms to constantly modify its own
                decision tree over multiple iterations. After each iteration, it
                seeks to improve its performance according a fitness function
                built into it.
              </p>
            </CardText>
            <CardActions border class="project-card-actions">
              <i class="fab fa-bitbucket" aria-hidden="true" />
            </CardActions>
            <CardMenu style={{ color: "#fff" }} />
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Unity Project</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          {/*a tab for each project */}

          <Tab>Pokemon Genetic algorithm</Tab>
          <Tab>Unity Handwriting recognition</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
