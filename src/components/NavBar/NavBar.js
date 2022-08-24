import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { useHistory } from "react-router";
import { PATHS } from "../../constant";
import { Tab } from "@material-ui/core";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const handleChange = (_e, newValue) => {
    if (newValue === value) return;
    setValue(newValue);
  };

  useEffect(() => {
    history.push(PATHS[value].location);
    if (history.location.pathname != PATHS[value].location)
      history.push("/");
  }, [value]);


  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        {PATHS.map((path, index) => {
          return <Tab key={index} label={path.label} index={index} />;
        })}
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
