import React from 'react';
import {Navbar, NavItem} from 'react-materialize'

class Navibar extends React.Component{
    render(){ 
    return(<Navbar
        className=" deep-purple"
        alignLinks="right"
        brand={<a className="brand-logo" href="#">COVID-19 Cases</a>}
        id="mobile-nav"
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      > 
      </Navbar>)}
}

export default Navibar;