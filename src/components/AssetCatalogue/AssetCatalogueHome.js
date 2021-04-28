import React from 'react';
import '../../css/AssetCatalogue.css'
import AddAssetItem from './AddAssetItem';
import EditAssetItem from './EditAssetItem';
import { 
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';

class AssetCatalogue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             director: "", 
             fileUpload: [
                 {d1: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', d2: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' },
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' }
             ],
        }
     }
     

     renderTableHeader() {
        let header = Object.keys(this.state.fileUpload[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  
     renderTableData() {
        return this.state.fileUpload.map((fileUpload, index) => {
           const { d1, d2, d3} = fileUpload//destructuring
           return (
              <tr key={d1}>
                 <td>{d1}</td>
                 <td>{d2}</td>
                 <td>{d3}</td>
              </tr>
           )
        })
     }
  
     render() {
        const director = this.state.director
        switch (director) {
            case "add":
                return (
                    <div>
                        <div class = "wrapper">
                            <Link to= '/AssetCatalogue/AssetCatalogueHome'><button class = "button" onClick={() => this.setState({director: ""})}>Exit</button></Link>
                        </div>
                        <div>
                            <AddAssetItem/>
                        </div> 
                    </div>
                )
            case "edit":
                return (
                    <div>
                        <div class = "wrapper">
                            <Link to= '/AssetCatalogue/AssetCatalogueHome'><button class = "button" onClick={() => this.setState({director: ""})}>Exit</button></Link>
                        </div>
                        <div>
                            <EditAssetItem/>
                        </div> 
                    </div>
                )

            default:
                return (
                    <div>
                        <div class = "wrapper">
                            <BrowserRouter>
                                <Link to= '/AssetCatalogue/AddAssetItem'><button class = "button" onClick={() => this.setState({director: "add"})}> <img src = "src\components\add.jpgadd.jpg" alt = "Add"></img> </button></Link>
                                <Link to= '/AssetCatalogue/EditAssetItem'><button class = "button" onClick={() => this.setState({director: "edit"})}>Edit</button></Link>
                            </BrowserRouter> 
                        </div>
                        <div class="table-title">
                            <h3>Asset Catalogue</h3>
                        </div>
                        <table class="tablesty">
                            
                            <tr>{this.renderTableHeader()}</tr>
                            <tbody >
                            {this.renderTableData()}
                            </tbody>
                        </table>  
                    </div>
                )
        }
     }
 }
 


export default AssetCatalogue;