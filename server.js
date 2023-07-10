import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
const app = express();
app.use(cors({ origin: '*' }));
app.use('/api', router);

const port = 8000;


app.get('/', (req, res) => {
  res.send('Server is running.....');
});



app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running server at port  ${port}: ${err.message}`);
  }
  console.log(`Server is running in port ${port}`);
})