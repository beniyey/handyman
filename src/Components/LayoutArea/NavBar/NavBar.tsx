import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../../assets/images/d&s-logo.png"
import './NavBar.css';
import { backdropClasses } from '@mui/material';

const drawerWidth = 240;
const navItems = ['דף הבית', 'קצת עלינו', 'מחירים', 'צור קשר'];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [nowTimes, setNowTimes] = React.useState(Date.now());
  const [active, setActive] = React.useState();


  let style = {
    backgroundColor: "transparent",
    height: "0px",
    boxShadow: "none",
}

let appBarStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }

  let toolbarStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    border: "none",
    boxShadow: "none",
    backdropFilter: "blur(5px)",
  }

  let buttonListStyle = {
    margin: "0px auto",
    minWidth:"400px",
    display: { xs: 'none', sm: 'block' }
  }

  function handleButtonClick(e: React.SyntheticEvent) {
    let button = (e.target as HTMLButtonElement)
    let buttonVal = button.innerText;
    setNowTimes(Date.now())
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="ds logo" />
      </Typography>
      <Divider />
      <List sx={buttonListStyle}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', backgroundColor: "transparent" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = document.body;

  return (
    <Box sx={style}>
      <CssBaseline />
      <AppBar component="nav" sx={appBarStyle}>
        <Toolbar sx={toolbarStyle}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img className='Header-logo' src={logo} alt="ds logo" />
          </Typography>
          <Box sx={buttonListStyle}>
            {navItems.map((item) => (
              <Button onClick={handleButtonClick} key={item + nowTimes} sx={{ borderRadius: "0px", color: '#fff', fontSize: "17px", margin: "0px 10px", borderBottom:  "none" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}