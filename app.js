const fs = require('fs')
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt','Hello to this great world',(err) => {
        if (err) throw err;
        console.log('Saved');
    }) 
}

const server = http.createServer(requestHandler);
server.listen(port, (err)=>{
    if (err) {
        return console.log(`you have an error: ${err}`);
    }
    console.log(`server is listening on ${port}`);
});

