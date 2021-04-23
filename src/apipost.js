async function run() {
	const formData = new FormData();
	const fileField = document.querySelector('input[type="file"]');
	formData.append('test', fileField.files[0]);

	const response = await fetch('https://efaeig3s60.execute-api.us-west-2.amazonaws.com/v2/upload?Content-Type=multipart/form-data', {
		method: 'POST',
		body: formData
	});

	const content = await response.json();
	console.log(content);
}