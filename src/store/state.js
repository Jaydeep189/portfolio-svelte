import { writeFile } from 'fs';
let data;
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => {
    StoreData(json);
    data = json;
})

function StoreData(){
    writeFile('../main.data.js', data, (err) => {      
        if (err) throw err;
    })
}

export default data;
