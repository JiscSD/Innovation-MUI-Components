const { readdirSync, writeFileSync } = require('fs');

const findDirectories = (source) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

const exportStatement = (components) => `export { theme, ${components.join(', ')} };`;

const importStatements = (components) =>
    components.map((component) => `import ${component} from './components/${component}/index.jsx';`).join('\n');

const componentNames = findDirectories('src/components');

const indexJs = `import theme from './theme.js';

${importStatements(componentNames)}

${exportStatement(componentNames)}
`;

writeFileSync('./src/index.js', indexJs);
