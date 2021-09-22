const net = require("net");

// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: '135.23.223.133',
        port: 50542
    });
    conn.setEncoding("utf8");

    conn.on('connect', () => {
        console.log('New client connected!');
        conn.write('Name: NJ')
    });

    conn.on('data', (data) => {
        console.log('The Server is talking: ', data);

    });
    // interpret incoming data as text


    return conn;
};

module.exports = connect;