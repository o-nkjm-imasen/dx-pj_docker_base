import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "modules/sidebar";
import styled from "styled-components";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from "react-router-dom";

const StyledSideNav = styled(SideNav)`
  background-color: blue;
  border-right: 1px solid #ddd;
`;


//TODO: props.expanded need string. so it must be passed expanded
const StyledLink = styled(Link)`
    color: ${props => (props.expanded ? "#fff" : "#000")};
    text-decoration: none;
`;

function MySidebar(props) {
  //const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState("home");
  // TODO: use expanded and navigate value apropriately
  // const navigate = (pathname) => {
  //     setSelected(pathname)
  // }

  const onSelect = (selected) => {
    setSelected(selected);
  };
  
  const expanded = useSelector(state => state.sidebar.expanded)
  const dispatch = useDispatch()    
  const onToggle = () => {
    // setExpanded(expanded);
    console.log(expanded)
    dispatch(actions.toggleExpande(expanded))
  };

  
  return (
    <StyledSideNav onSelect={onSelect} onToggle={onToggle}>
      <SideNav.Toggle />
      <SideNav.Nav selected={selected}>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em", verticalAlign: "middle" }} />
          </NavIcon>
          <NavText style={{ paddingRight: 32 }} title="Home">
            {/*<Link to={`${url}/rendering`}>Home</Link> */}
            <Link to={`/main/home`}>Home</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="excel">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em", verticalAlign: "middle" }} />
          </NavIcon>
          <NavText style={{ paddingRight: 32 }} title="Excel">
            <Link to={`/main/excel`}>Excel</Link>
          </NavText>
        </NavItem>
        <NavItem eventKey="CRUD-series">
          <NavIcon>
            <i
              className="fa fa-fw fa-line-chart"
              style={{ fontSize: "1.75em", verticalAlign: "middle" }}
            />
          </NavIcon>
          <NavText style={{ paddingRight: 32 }} title="CRUD-series">
            CRUD サンプル１
          </NavText>
          <NavItem eventKey="main/create">
            <NavText title="CRUD">
              <StyledLink expanded={expanded} to={`/main/create`}>CRUD: Create</StyledLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="main/read">
            <NavText title="CRUD">
              <StyledLink expanded={expanded} to={`/main/read`}>CRUD: Read</StyledLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="main/update">
            <NavText title="CRUD">
              <StyledLink expanded={expanded} to={`/main/update`}>CRUD: Update</StyledLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="main/delete">
            <NavText title="CRUD">
              <StyledLink expanded={expanded} to={`/main/delete`}>CRUD: Delete</StyledLink>
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </StyledSideNav>
  );
}

export default MySidebar;
