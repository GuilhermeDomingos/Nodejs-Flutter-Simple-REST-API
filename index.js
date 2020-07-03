const app = require ('./app');
const { connect } = require('./database');


async function main(){
    await connect();
    app.listen(4000);
    console.log('Server na porta 4000: connected' );
}

main ();

