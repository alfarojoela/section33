const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render = async (filename) => {
const filePath = path.join(process.cwd(), filename);

//node.js has access to all of computer when running
// 'dangerously'
const dom = await JSDOM.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable'
});

return new Promise((resolve, reject) => {
    dom.window.document.addEventListener('DOMContentLoaded', () => {
resolve(dom);
    });
});


return dom;
};

module.exports = render;