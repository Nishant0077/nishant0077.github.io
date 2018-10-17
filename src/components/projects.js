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
      /*project 1 */
      <Grid>
        <Cell col={12}>
          <div className="projects-grid">
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
              <CardText
                className="project-card-text"
                style={{ height: "200px" }}
              >
                <p>
                  This is a turn based battle game developed in Java where one
                  of the AI agents uses a static decision tree to select the
                  next best move and the other agent uses genetic algorithms to
                  constantly modify its own decision tree over multiple
                  iterations. After each iteration, it seeks to improve its
                  performance according a fitness function built into it.
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

            {/* project 2 */}
            <Card
              shadow={5}
              style={{ width: "450px", margin: "auto", paddingTop: "1em" }}
            >
              <CardTitle
                style={{
                  color: "white",
                  height: "150px",
                  background:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2000px-Unity_Technologies_logo.svg.png) center / cover"
                }}
              />
              <CardText
                className="project-card-text"
                style={{ height: "260px" }}
              >
                <p>
                  This is a handwriting recognition application masquerading as
                  a space shooter arcade-style game. This application was
                  developed using Unity 3D and C#. The player must destroy an
                  alien ship by typing the handwritten word that is seen on that
                  ship. I used seed data and gold data to gauge the players’
                  engagement and accuracy and used a metric to assign a
                  reliability score to the player in performing the handwriting
                  recognition task.
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
                    href="https://bitbucket.org/nishant0077/handwriting-recognition-through-human-computation"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-bitbucket" aria-hidden="true" />
                  </a>
                </p>
              </CardActions>
              <CardMenu style={{ color: "#fff" }} />
            </Card>

            {/*Project 3*/}
            <Card
              shadow={5}
              style={{ width: "450px", margin: "auto", paddingTop: "1em" }}
            >
              <CardTitle
                style={{
                  color: "white",
                  height: "150px",
                  background:
                    "url(https://ticary.com/assets/img/NLP.png) center / cover"
                }}
              />
              <CardText
                className="project-card-text"
                style={{ height: "220px" }}
              >
                <p>
                  This is the Java implementation of the famous Brown Clustering
                  algorithm. It is given a dataset containing various sentences
                  and phrases and the algorithm groups the words into clusters
                  based on their semantic similarities. The semantic
                  similarities can be deduced by looking at the context in which
                  the words appear and similar words generally appear in very
                  similar contexts.
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
                    href="https://bitbucket.org/nishant0077/brown-clustering-algorithm-in-java"
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
        </Cell>
      </Grid>
    );
  }
}

export default Projects;
