import React from "react";

export class SideNav extends React.Component {
  render() {
    return (
      <div className="sidenav">
        <a href="https://reactjs.org/docs/getting-started.html#try-react">Docs</a>
        <a href="https://reactjs.org/tutorial/tutorial.html">Tutorial</a>
        <a href="https://reactjs.org/blog/2022/06/15/react-labs-what-we-have-been-working-on-june-2022.html">Blog</a>
        <a href="https://reactjs.org/community/support.html">Community</a>
      </div>
    );
  }
}
