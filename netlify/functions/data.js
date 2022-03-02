import fetch from "node-fetch";

exports.handler = async function(event, context){
    var data;
    function doSomething(res){
        data = res;
    }
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => doSomething(json))
    return {
        statusCode : 200,
        body : JSON.stringify(data)
    }
}