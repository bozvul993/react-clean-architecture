import * as React from "react";
import "../stylesheets/App.css";
import {User} from "core";

interface PropsType {
  user: User | null,
}

export const UserComponent = (props: PropsType) => {
  return props.user ? (
    <div>
      <h1>
        Name is: { props.user.name }
      </h1>
      <h1>
        Email is: { props.user.email }
      </h1>
    </div>
  ): (
    <h1>
      No user Logged In
    </h1>
  );
};