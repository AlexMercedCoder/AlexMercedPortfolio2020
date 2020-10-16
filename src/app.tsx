import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navi } from "./components/navi";
import { Title } from "./components/title";
import { Row } from "./components/row";
import { BigCard } from "./components/bigcard";
import { SmallCard } from "./components/smallcard";
import { menu, projects } from "./data";

const App: React.FC = () => {
  return (
    <>
      <Navi menu={menu} />
      <Title />

      <Row theClass="paragraph">
        <p>
          Alex Merced is a developer with a focus on full stack web development
          with a focus on{" "}
          <span>
            React, Typescript, GraphQL, Apollo, Svelte, and StencilJS.
          </span>{" "}
          Below you can find some sample projects in the menu above you can find
          my youtube/podcast, javascript libraries I've created and more.
        </p>
      </Row>

      <Row>
        <BigCard>
          <h2>Current Projects</h2>
          <h3>Developer for Crossfield Digital</h3>
          <h3>Instructor Lead for General Assembly</h3>
        </BigCard>
        <BigCard>
          <h2>Media</h2>
          <a href="https://twitter.com/alexmercedcoder">
            <h3>Twitter</h3>
          </a>
          <a href="https://dev.to/alexmercedcoder">
            <h3>Dev.to Blog</h3>
          </a>
          <a href="https://instagram.com/alexmercedcoder">
            <h3>Instagram</h3>
          </a>
        </BigCard>
        <BigCard>
          <h2>Work Examples</h2>
          <a href="http://www.devNursery.com">
            <h3>DevNursery.com</h3>
          </a>
          <a href="https://dev.alexmercedcoder.work/">
            <h3>Portfolio Page</h3>
          </a>
          <a href="https://sites.google.com/view/ambootcampprojects/home">
            <h3>Bootcamp Project Gallery</h3>
          </a>
          <a href="http://lib.alexmercedcoder.com/">
            <h3>JS Libraries I Created</h3>
          </a>
        </BigCard>
      </Row>

      <Row theClass="paragraph2">
        <p>
          Below are some of Alex Merceds projects, to contact Alex email{" "}
          <span>Alex@AlexMerced.dev</span>.
        </p>
      </Row>

      <Row>
        {projects.map((proj, index) => (
          <SmallCard theClass="project" key={index}>
            <header>
              <img src={proj.image} />
            </header>
            <div>{proj.title}</div>
            <footer>
              <div>
                <a href={proj.live}>APP</a>
              </div>
              <div>
                <a href={proj.github}>Github</a>
              </div>
            </footer>
          </SmallCard>
        ))}
      </Row>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
