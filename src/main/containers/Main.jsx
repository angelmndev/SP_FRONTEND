import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import RolContainer from '../../rol/container/RolContainer';
import '../styles/main.css';
const Main = () => {

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    header
                </div>
                <div className="row">
                    <div className="col">
                        <Router>
                            <Navbar />
                            <Switch>
                                <Route path='/rol' exact componet={RolContainer} />
                            </Switch>
                        </Router>                        
                    </div>
                    <div className="col">

                    </div>
                </div>    
            </div>            
        </Fragment>
    )
}


export default Main;