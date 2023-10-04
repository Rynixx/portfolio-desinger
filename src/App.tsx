import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { TransitionGroup } from "solid-transition-group"
const Project = lazy(() => import("./pages/project/[id]"));
const Home = lazy(() => import("./pages/home"));





const App: Component = () => {
  return (
    <>
    <TransitionGroup name="pt-page-moveFromRight">
      <Routes>
        <Route
          path="/Project/:id"
          component={Project}
          //data={Data}
        />
        <Route path="/" component={Home} />
      </Routes>
      </TransitionGroup>
    </>
  );
};

export default App;
