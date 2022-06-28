const http = require('http');
const fs = require('fs');


const app = http.createServer(function(request, response){
    
    let _url = request.url;
    
    if(_url === '/'){
        response.writeHead(200);
        return response.end(fs.readFileSync(__dirname + '/index.html'));
    }else{
        response.writeHead(200);
        return response.end(fs.readFileSync(__dirname + _url));
    }
}


);


app.listen(3000);
