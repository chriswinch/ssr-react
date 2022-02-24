import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter  } from 'react-router-dom/server';

import fs from 'fs/promises';
import App from './src/App';

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
    console.log('akjsdkljasdkljlkasjlkjasdlkjaslkdjalksjd')
    const webpack = require("webpack");
    const middleware = require("webpack-dev-middleware");
    const config = require("./webpack.config");
    const compiler = webpack(config);

    app.use(middleware(compiler, {}));
    app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.static('build'));

app.get('*', async (req, res) => {
    const index = await fs.readFile('src/index.html');
    const html = index.toString();
    const app = renderToString(
        createElement(
            StaticRouter, { location: req.url },
            createElement(App)
        )
    );
    const appHtml = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
    res.send(appHtml);
});

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));
