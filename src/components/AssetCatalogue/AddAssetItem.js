import React from 'react'
import '../../css/App.css'
import '../../css/AssetCatalogue.css'
class AddAssetItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             director: "?Hardware or Software?",
             testSet: "",
        }
     }



    render(){
        const director = this.state.director
        const testSet = this.state.testSet
        switch(director){

            case "?Hardware or Software?": //Default
                return(
                <div>      
                                 
                    
                    <div class="table-title">
                        <h3>What type of Item are you creating?</h3>
                    </div> 
                    <div class="wrapper" style={{marginLeft : '40%'}}>
                        <button class = "button" onclick={() => this.setState({director: "Software"})}>Software</button>
                    </div>
                    <div class="wrapper" >
                        <button class = "button" onClick={() => this.setState({director: "Hardware"})}>Hardware</button>
                    </div>
                    
                </div>
                )

            case "Hardware":
                return(
                    <div>     

                        <div class="wrapper" >
                                <button class = "button" onClick={() => this.setState({director: "?Hardware or Software?"})}>Back</button>
                        </div>
                        <div class="wrapper" >
                                <button class = "button" onClick={() => this.setState({director: "?Sub-Component?"})}>Next</button>
                        </div>

                        {/*Replace below code with correct forms and input html*/}
                        <div class="table-title">
                            <h3>Add an item to the Asset Catalogue </h3>
                        </div>
                        <hr/>
                        <input type="text" id="test"/>
                        <input type="submit" value="Submit" onClick={() => this.setState({testSet: document.getElementById('test').value})}/>
                    </div>
                )
                            
            case "?Sub-Component?":
                //alert(testSet)
                return(
                <div>                   
                    <div class="wrapper" >
                        <button class = "button" onClick={() => this.setState({director: "Hardware"})}>Back</button>
                    </div>
                    <div class="table-title">
                        <h3>Do you wish to add a sub-component?</h3>
                    </div> 
                    <div class="wrapper" style={{marginLeft : '40%'}}>
                        <button class = "button" onclick={() => this.setState({director: "Communication Details?"})}>No</button>
                    </div>
                    <div class="wrapper" >
                        <button class = "button" onClick={() => this.setState({director: "Sub-Component"})}>Yes</button>
                    </div>
                </div>
                )

            case "Sub-Component":
                return(
                    <div>   

                        <div class="wrapper" >
                                <button class = "button" onClick={() => this.setState({director: "?Sub-Component?"})}>Back</button>
                        </div>
                        <div class="wrapper" >
                                <button class = "button" onClick={() => this.setState({director: "?Software Sub-Component?"})}>Next</button>
                        </div>
                        
                        {/*Replace below code with correct forms and input html*/}
                        <div class="table-title">
                            <h3>Add a sub-component to the Asset item </h3>
                        </div>
                        <hr/>
                        <input type="text" id="test"/>
                        <input type="submit" value="Submit" onClick={() => this.setState({testSet: document.getElementById('test').value})}/>
                    </div>
                )
                

        }
    }
}

export default AddAssetItem;