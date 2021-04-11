import React from 'react';
import '../css/AssetCatalogue.css'
import AddItem from './AddItem';
import EditItem from './EditItem';

class AssetCatalogue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             add: false,
             edit: false, 
             fileUpload: [
                 {d1: 'aaa', d2: 'bbb', d3: 'ccc' },
                 {d1: 'ddd', d2: 'eee', d3: 'fff' }
             ]
        }
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleExitClick = this.handleExitClick.bind(this);
     }
     
    handleAddClick() {
        this.setState({add: true});
        //send to add page
    }

    handleEditClick() {
        this.setState({edit: true});
        //send to edit page
    }

    handleExitClick() {
        this.setState({add: false});
        this.setState({edit: false});
        //sends back to asset catalogue page
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
        const add = this.state.add
        const edit = this.state.edit 
        
        if(add){
            return (
                <div>
                    <div class = "wrapper">
                            <button class = "button" onClick={(e) => this.handleExitClick(e)}>Exit</button>
                    </div>
                    <div>
                        <AddItem/>
                    </div> 
                </div>
            )
        }
        else if(edit){
            return (
                <div>
                    <div class = "wrapper">
                            <button class = "button" onClick={(e) => this.handleExitClick(e)}>Exit</button>
                    </div>
                    <div>
                        <EditItem/>
                    </div> 
                </div>
            )
        }
       else{
            return (
                <div>
                    <div class = "wrapper">
                        <button class = "button" onClick={(e) => this.handleAddClick(e)}>Add</button>
                        <button class = "button" onClick={(e) => this.handleEditClick(e)}>Edit</button>
                    </div>
                    <div class="table-title">
                        <h3>Asset Catalogue</h3>
                    </div>
                    <table class="tablesty">
                        <tbody >
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            )
        }
     }
 }
 


export default AssetCatalogue;