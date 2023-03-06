const F = require('total.js');

const config = { 
    name: "Website Sample",
    database: 'mysql//alamwibowo:u6{gHNaa@localhost:3306/surety'
};

F.http('debug', { port: 9000, ip: '127.0.0.1', cluster: 'auto', cluster_limit: 100, config });