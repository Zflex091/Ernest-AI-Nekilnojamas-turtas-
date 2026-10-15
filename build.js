const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const shell = fs.readFileSync(path.join(root, 'template.html'), 'utf8');
const routes = ['', 'selling', 'letting', 'property-investment', 'about', 'contact', 'valuation', 'properties'];

for (const route of routes) {
  global.location = { pathname: route ? `/${route}` : '/' };
  delete require.cache[require.resolve('./app.js')];
  const { rendered, pageTitle } = require('./app.js');
  const html = shell
    .replace('</head>', `<title>${pageTitle}</title></head>`)
    .replace('<div id="app"></div>', `<div id="app" data-server-rendered="true">${rendered}</div>`);
  const directory = path.join(root, route);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
  console.log(`Built /${route}`);
}
