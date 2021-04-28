import React,{Component} from 'react';
import '../css/App.css';

class Demo extends Component {
  async onFileUpload() {
    var formdata = new FormData();
    const fileField = document.querySelector('input[type="file"]');
	  formdata.append("file", fileField.files[0]);
    formdata.append("Metadata", "{\"file_name\": \"file.json\"}");

    var requestOptions = {
      mode: 'no-cors',  
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const response = await fetch("https://efaeig3s60.execute-api.us-west-2.amazonaws.com/v2/upload?Content-Type=multipart/form-data", requestOptions);
    const content = await response.text();
    console.log(content);
  };

  render() {
    return (
      <div>
        <input type="file"/>
        <input type="button" value="Submit" onClick={this.onFileUpload}/>
      </div>
    );
  }
}

export default Demo;