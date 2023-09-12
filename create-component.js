const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
const color = process.argv[3];
const background = process.argv[4];

if (!componentName || !color || !background) {
  console.log("Please provide component name, color, and background");
  process.exit(1);
}

const componentDir = path.join(__dirname, `src/app/${componentName}`);

// Create directory
fs.mkdirSync(componentDir, { recursive: true });

// Create TypeScript file
const tsContent = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-${componentName}',
    templateUrl: './${componentName}.component.html',
    styleUrls: ['./${componentName}.component.scss']
  })
  export class ${componentName}Component {
    color = "${color}";
    background = "${background}";
  }
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.component.ts`), tsContent);

// Create HTML file
const htmlContent = `<div [ngStyle]="{'color': color, 'background-color': background}">
  Hello, this is ${componentName}
</div>`;
fs.writeFileSync(path.join(componentDir, `${componentName}.component.html`), htmlContent);

// Create SCSS file
const scssContent = ``;
fs.writeFileSync(path.join(componentDir, `${componentName}.component.scss`), scssContent);

// Update AppModule
const appModulePath = path.join(__dirname, 'src/app/app.module.ts');
let appModuleContent = fs.readFileSync(appModulePath, 'utf-8');

const importStatement = `import { ${componentName}Component } from './${componentName}/${componentName}.component';`;
const newDeclarations = `${componentName}Component,`;

appModuleContent = appModuleContent.replace('// Dynamic Component Imports', `// Dynamic Component Imports\n${importStatement}`);
appModuleContent = appModuleContent.replace('// Dynamic Component Declarations', `// Dynamic Component Declarations\n    ${newDeclarations}`);

fs.writeFileSync(appModulePath, appModuleContent);

// Update Routing Module (optional)
const appRoutingModulePath = path.join(__dirname, 'src/app/app-routing.module.ts');
let appRoutingModuleContent = fs.readFileSync(appRoutingModulePath, 'utf-8');

const importStatementForRouting = `import { ${componentName}Component } from './${componentName}/${componentName}.component';`;
const routeStatement = `{ path: '${componentName.toLowerCase()}', component: ${componentName}Component },`;

appRoutingModuleContent = appRoutingModuleContent.replace('// Dynamic Component Imports', `// Dynamic Component Imports\n${importStatementForRouting}`);
appRoutingModuleContent = appRoutingModuleContent.replace('// Dynamic Component Routes', `// Dynamic Component Routes\n  ${routeStatement}`);

fs.writeFileSync(appRoutingModulePath, appRoutingModuleContent);

console.log(`Component ${componentName} created.`);
