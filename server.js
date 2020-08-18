const express = require('express');
const app = express();
const routes = require('./routes');
app.set('port', (process.env.PORT || 3000));

app.use(routes);

app.listen(app.get('port'), () => {
    console.log('Servidor rodando na porta ' + app.get('port'));
});
