import { app } from './app';
import * as mongoose from 'mongoose';

const bootstrap = async () => {
    const connector = mongoose.connect('mongodb+srv://maham_arif:mongoNode123@mongocluster-zbwsm.mongodb.net/test?retryWrites=true');
    await connector;
    console.log('Connection Established');
    app.listen(3000);
    console.log('Server is listening at port 3000');
};

bootstrap();