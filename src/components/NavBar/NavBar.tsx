import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { Link } from "react-scroll";

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({})=> ({
        display: "flex",
        justifyContent: "space-evenly"
    }))


    return (
      <>
          <AppBar position="absolute">
              <StyledToolbar>
                  <Link to="about" smooth={true} duration={500}>
                      <MenuItem>About</MenuItem>
                  </Link>
                  <Link to="skills" smooth={true} duration={500}>
                      <MenuItem>Skills</MenuItem>
                  </Link>
                  <Link to="projects" smooth={true} duration={500}>
                      <MenuItem>Projects</MenuItem>
                  </Link>
              </StyledToolbar>
          </AppBar>
      </>
  )
};
  
  export default NavBar
  