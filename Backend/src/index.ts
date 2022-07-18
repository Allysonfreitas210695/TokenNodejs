import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './routes/user.routes';
import { sequelize } from './database';
import { errorHandler } from './middlewares/errosStatus';
import { routerToken } from './routes/token.routes';
import { log } from 'console';


const app = express();

const PORT_URL = process.env.PORT || 3333;

//  permiti varios acesso
app.use(cors());

//recebe dados no formato de JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routerToken);

//rotas da aplicação
app.use(router);

app.use(errorHandler)



app.listen(PORT_URL, async () => {  
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
    console.log(PORT_URL);
    
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})