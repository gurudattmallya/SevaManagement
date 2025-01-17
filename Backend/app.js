import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import entityRouter from './routes/entity.js';
import deitiesRouter from "./routes/deities.js";
import masterSevasRoutes from './routes/masterSevas.js'; 
import specialSevasRouter from "./routes/specialSevas.js";
import subSevasRouter from "./routes/subSevas.js"; // Added SubSevas router
import entityDescRouter from './routes/entityDesc.js';
import sevaRoutes from "./routes/sevas.js";
import deities1Routes from "./routes/deities1.js";
import devoteeRoutes from './routes/DevoteeForm.routes.js';
import panchangaRouter from './routes/panchanga.js';
import maasaRouter from './routes/maasa.js';
import tithiRouter from './routes/tithi.js';
import shashwathSevaRouter from './routes/shashwathSeva.routes.js';
import entityRouter1 from './routes/entity.routes.js';
import sevadharRouter from './routes/sevadhar.js';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: '*',
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/deities", deitiesRouter);
app.use('/entity', entityRouter);
app.use('/masterSevas', masterSevasRoutes);
app.use("/special-sevas", specialSevasRouter);
app.use("/sub-sevas", subSevasRouter); // Added SubSevas route
app.use('/entityDesc', entityDescRouter);
app.use("/api", sevaRoutes);
app.use("/deities1", deities1Routes);
app.use('/api/devotee', devoteeRoutes);

app.use('/panchanga', panchangaRouter);
app.use('/maasa', maasaRouter);
app.use('/tithi', tithiRouter);
app.use('/shashwath-seva', shashwathSevaRouter);
// Add this line with other route configurations
app.use('/entity', entityRouter1);
app.use('/api/sevadhar', sevadharRouter);


app.listen(2002, () => {
    console.log('Server running on port 2002');
});

export default app;





