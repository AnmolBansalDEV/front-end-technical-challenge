import { Divider, Typography } from "@mui/joy";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav" className="p-4 border-b border-zinc-200 flex gap-4">
      <Typography level="title-lg">FE Challenge</Typography>
      <Divider orientation="vertical" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </nav>
  );
};

export default Navbar;
