
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../frontend/react-webpack-configurations/src/app';
import { StaticRouter } from 'react-router-dom/server';

const PORT = process.env.PORT || 3006;
const app = express();



app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString( <StaticRouter location={req.url} ><App /></StaticRouter>);
    const indexFile = path.resolve('./dist/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });

  app.get('/about', (req, res) => {
    const app = ReactDOMServer.renderToString( <StaticRouter location={req.url} ><App /></StaticRouter>);
    const indexFile = path.resolve('./dist/index.html');
  
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
  

  app.use(express.static('build'))

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });


