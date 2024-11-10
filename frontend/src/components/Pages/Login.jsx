import React from "react";
import Hero from "../Herosection";
import Card from "../Card";
import Entry from "../Entry";
import Cardcontainer from "../Cardcontainer";

function Login() {
  return (
    <>
      <div className="section1">
        <Entry />
      </div>
      <div className="section2">
        <Cardcontainer />
      </div>
    </>
  );
}

export default Login;
