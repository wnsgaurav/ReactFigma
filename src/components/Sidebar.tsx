import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import dashboardIcon from "../assets/dashboard_icon.png";
import usersIcon from "../assets/users_icon.png";
import toolsIcon from "../assets/tools_icon.png";
import profileArrow from "../assets/profile.png";

function Sidebar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToolsClick = () => setToolsOpen(!toolsOpen);
  const handleUsersClick = () => setUsersOpen(!usersOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#C05600] p-2 rounded"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <CloseIcon className="text-white" />
        ) : (
          <MenuIcon className="text-white" />
        )}
      </button>

      <div
        className={`bg-[#232323] text-white pt-20 min-h-screen w-full md:w-[240px] lg:w-[312] fixed md:static flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <List>
          <ListItem>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3 cursor-pointer">
                <img src={dashboardIcon} className="w-5 h-5" alt="Dashboard" />
                <ListItemText primary="Dashboard" />
              </div>
              <div className="bg-[#C05600] px-2 py-1 rounded-lg text-xs">
                10
              </div>
            </div>
          </ListItem>

          <div className="bg-[#1A1A1A]">
            <ListItem onClick={handleToolsClick} className="cursor-pointer">
              <ListItemIcon>
                <img src={toolsIcon} className="w-5 h-5" alt="Tools" />
              </ListItemIcon>
              <ListItemText primary="Tools" />
              {toolsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={toolsOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="pl-8">
                <ListItem className="cursor-pointer">
                  <ListItemText primary="Assets" />
                </ListItem>
                <ListItem className="cursor-pointer">
                  <ListItemText primary="Actions" />
                  <ExpandMore />
                </ListItem>
                <ListItem className="cursor-pointer">
                  <ListItemText primary="Challenges" />
                  <ExpandMore />
                </ListItem>
                <ListItem className="cursor-pointer">
                  <ListItemText primary="Testing" />
                  <ExpandMore />
                </ListItem>
              </List>
            </Collapse>

            <ListItem onClick={handleUsersClick} className="cursor-pointer">
              <ListItemIcon>
                <img src={usersIcon} className="w-5 h-5" alt="Users" />
              </ListItemIcon>
              <ListItemText primary="Users" />
              {usersOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={usersOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding className="pl-8">
                <ListItem className="cursor-pointer">
                  <ListItemText primary="Admin" />
                </ListItem>
              </List>
            </Collapse>
          </div>
        </List>
        <div className="w-full p-4 bg-[#262626] text-white/40 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FFFFFF1A] rounded-full"></div>
            <div className="flex flex-col">
              <span className="text-white/60 text-sm">XYZ</span>
              <span className="text-xs text-white/30">v.1.2@example.com</span>
            </div>
          </div>
          <img src={profileArrow} alt="Profile" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
