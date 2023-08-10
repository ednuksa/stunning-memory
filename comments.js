//Create web server222
//create a simple web server that returns a list of comments from the server.
//http://localhost:3000/comments

var http = require('http');
var comments = require('./comments');
var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(comments.getComments());
});
server.listen(3000);
console.log('Server running at http://localhost:3000/');

//Path: comments.js
//create the module comments.js that exports a single function getComments() that returns a list of comments
var comments = [
	"First comment",
	"Second comment",
	"Third comment"
];
exports.getComments = function(){
	return comments;
}

//Path: comments.js
//create the module comments.js that exports a single function getComments() that returns a list of comments
//add a new function addComment(comment) to the module that adds a new comment to the list of comments and returns the new list of comments
var comments = [
	"First comment",
	"Second comment",
	"Third comment"
];
exports.getComments = function(){
	return comments;
}
exports.addComment = function(comment){
	comments.push(comment);
	return comments;
}

//Path: comments.js
//create the module comments.js that exports a single function getComments() that returns a list of comments
//add a new function addComment(comment) to the module that adds a new comment to the list of comments and returns the new list of comments
//add a new function getComment(index) that returns the comment at the given index or undefined if the index is out of bounds
var comments = [
	"First comment",
	"Second comment",
	"Third comment"
];
exports.getComments = function(){
	return comments;
}
exports.addComment = function(comment){
	comments.push(comment);
	return comments;
}
exports.getComment = function(index){
	if(index < comments.length)
		return comments[index];
}

//Path: comments.js
//create the module comments.js that exports a single function getComments() that returns a list of comments
//add a new function addComment(comment) to the module that adds a new comment to the list of comments and returns the new list of comments
//add a new function getComment(index) that returns the comment at the given index or undefined if the index is out of bounds
//add a new function deleteComment(index) that deletes the comment at the given index and
