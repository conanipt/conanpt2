import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

// add the cookieParser and json functions
import cookieParser from 'cookie-parser';
import { json } from 'body-parser';

import { port } from './config';

require('dotenv').config();
const { NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
    .use(cookieParser())
    .use(json())
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware({
            session: async(req, res) => {}
        })
    )
    .listen(port, err => {
        if (err) console.log('error', err);
    });