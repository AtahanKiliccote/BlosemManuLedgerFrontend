import React from 'react';
import '../css/App.css'
import { 
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';
import AssetCatalogue from './AssetCatalogue'

class Home extends React.Component {
 
    render() {
       return (
        <BrowserRouter>
            <div class="menu">
                <div class="grid">

                    <a class="name">Manufacturer Ledger</a>

                    <a class="item"><Link to= '/AssetCatalogue'>Asset Catalogue</Link>
                        </a>
                    <a class="item"><a href="Vulnerability" data-toggle="tab">Vulnerability</a>
                        </a>
                    <a class="item"><a href="CyberIncident" data-toggle="tab">Cyber Incident</a>
                        </a>

                </div>
            </div>
            <Route path='/AssetCatalogue' render={() => <AssetCatalogue/>} />
        </BrowserRouter>
       )
    }
}

export default Home;