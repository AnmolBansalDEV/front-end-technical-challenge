import { Divider, Typography } from "@mui/joy";
import { FC } from "react";
import {  NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav id="nav" className="flex gap-4 p-4 border-b border-zinc-200">
      <Typography level="title-lg">AI Models Dashboard</Typography>
      <Divider orientation="vertical" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </nav>
  );
};

export default Navbar;
