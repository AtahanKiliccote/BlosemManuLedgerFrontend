function run() {
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

	fetch("https://efaeig3s60.execute-api.us-west-2.amazonaws.com/v2/upload?Content-Type=multipart/form-data", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
	console.log("here");
}