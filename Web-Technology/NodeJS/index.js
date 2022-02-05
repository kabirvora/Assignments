import express from 'express';

import users from './routes/users.js';

const index = express();
index.use(express.json());

const port = 3030;
index.use('/api/users', users);

index.get('/', (req, res) => res.send("Hey Server Started"));



index.listen(port, () => console.log("Server Running on : http://localhost:" +port));

