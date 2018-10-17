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
            <CardText>
              <h4>This is my pokemon project</h4>
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="shared" />
            </CardMenu>
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
