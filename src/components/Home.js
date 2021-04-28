import React from 'react';
import '../css/App.css'
import { 
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';
import AssetCatalogue from './AssetCatalogue/AssetCatalogueHome'
import Vulnerability from './Vulnerability/VulnerabilityHome'
import CyberIncident from './CyberIncident/CyberIncidentHome'

class Home extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
          email: ''
        }
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({email: ''}); 
        //Auth logout 
    }

    render() {
       return (
        <BrowserRouter>
            <div class="menu">
                <div class="grid">

                    <a class="name">Manufacturer Ledger</a>

                    <a class="item"><Link to= '/AssetCatalogue/AssetCatalogueHome'><button class = "button2">Asset Catalogue</button></Link>
                        </a>
                    <a class="item"><Link to= '/Vulnerability/VulnerabilityHome'><button class = "button2">Vulnerability</button></Link>
                        </a>
                    <a class="item"><Link to= '/CyberIncident/CyberIncidentHome'><button class = "button2">Cyber Incident</button></Link>
                        </a>
                    <a class="item" style={{backgroundColor : '#818181'}}><button class = "button2" style={{backgroundColor : '#818181'}} onClick={(e) => this.handleLogoutClick(e)}>Logout</button>
                        </a>

                </div>
            </div>
            <Route path='/AssetCatalogue/AssetCatalogueHome' render={(props) => <AssetCatalogue director="" />} />
            <Route path='/Vulnerability/VulnerabilityHome' render={() => <Vulnerability/>} />
            <Route path='/CyberIncident/CyberIncidentHome' render={() => <CyberIncident/>} />
        </BrowserRouter>
       )
    }
}

export default Home;