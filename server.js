var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('/*', function(req, res){
	res.send('\
		<!DOCTYPE html>\
		<html lang="en">\
		<head>\
			<meta charset="UTF-8">\
			<title>mean todo app</title>\
		</head>\
		<body>\
		<h1>hello!</h1>\
		</body>\
		</html>\
	');
});

app.listen(PORT, function(){
	console.log('ok');
})