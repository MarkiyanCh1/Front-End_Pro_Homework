import React from "react";
import { GreetingForm } from "./GreetingForm";

export class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="main">
        <h1>React Labs: What We've Been Working On – June 2022</h1>
        <h2>Server Components</h2>
        <GreetingForm />
        <p>
          We announced an experimental demo of React Server Components (RSC) in
          December 2020. Since then we’ve been finishing up its dependencies in
          React 18, and working on changes inspired by experimental feedback.
        </p>
        <p>
          In particular, we’re abandoning the idea of having forked I/O
          libraries (eg react-fetch), and instead adopting an async/await model
          for better compatibility. This doesn’t technically block RSC’s release
          because you can also use routers for data fetching. Another change is
          that we’re also moving away from the file extension approach in favor
          of annotating boundaries.
        </p>
        <p>
          We’re working together with Vercel and Shopify to unify bundler
          support for shared semantics in both Webpack and Vite. Before launch,
          we want to make sure that the semantics of RSCs are the same across
          the whole React ecosystem. This is the major blocker for reaching
          stable.
        </p>
      </div>
      </React.Fragment>
    );
  }
}
