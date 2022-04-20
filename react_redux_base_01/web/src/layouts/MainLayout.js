import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from 'layouts/header';
import Sidebar from 'layouts/sidebar';
import Home from 'pages/Home';
import List from 'pages/List';
import Create from 'pages/Create';
import Read from 'pages/Read';
import Update from 'pages/Update';
import Delete from 'pages/Delete';
import Form from 'pages/Form';
import Excel from 'pages/Excel';

const StyledMainLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 2fr;
  height: 100vh;
  grid-template-columns: 400px 1fr;
  background-color: #fafafa;
  // background-color: red;
`;

const SidebarLayout = styled.div`
  position: relative;
  grid-row: 2 / 4;
  grid-column: 1 / -1;
`;

const Main = styled.main`
  position: relative;
  overflow: hidden;
  transition: all .15s;
  padding: 20px 20px;
  margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

function MainLayout({match}) {
  const expanded = useSelector(state => state.sidebar.expanded)
  return (
    <>
      <StyledMainLayout>
        <Header name="プロトタイプ" />
        <SidebarLayout>
          <Sidebar />
          <Main expanded={expanded}>
            <Switch>
              {/* <Route exact path={`${match.path}/home`} component={Home} />
                  <Route exact path={`${match.path}/table`} component={Table} /> */}
              <Route exact path={'/main/list'} component={List} />
              <Route exact path={'/main/create'} component={Create} />
              <Route exact path={'/main/read'} component={Read} />
              <Route exact path={'/main/update'} component={Update} />
              <Route exact path={'/main/delete'} component={Delete} />
              <Route exact path={'/main/form'} component={Form} />
              <Route exact path={'/main/excel'} component={Excel} />
            </Switch>
          </Main>
        </SidebarLayout>  
      </StyledMainLayout>
    </>
  );
}

export default MainLayout;


