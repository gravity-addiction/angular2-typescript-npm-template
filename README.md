# Quick Start

### Edit files inside ts/ folder
- my-directive.ts - Example Angular2 Directive
- my-pipe.ts - Example Angular2 Pipe
- my-service.ts - Example Angular2 Service

### NPM dependancy installer / typescript compiler
inside ts/ folder run
```
cd ts/
npm install
```
- this grabs all dependancies in ts/package.json.
- afterwards runs the typescript compiler on this module
- your compiled .js files can be found one directory up.
- the folder holding the compiled .js files is where you point the npm install path

### NPM install your new package into your project
- Install from Local folder
```
npm install <path to angular2-typescript-npm-template folder> --save
```

- Install from Public / Private Git Repo
```
npm install git+http://<url to git repo of root angular2-typescript-npm-tempalte>.git --save
```

### import module into project component
```
import { MyDirective } from 'angular2-typescript-npm-template/my-directive';
import { MyPipe } from 'angular2-typescript-npm-template/my-pipe';
import { MyService } from 'angular2-typescript-npm-template/my-service';
```

## Publishing

- Run a fresh npm install inside the ts/ folder
- update the main folder package.json version number by a tick

### My thoughts
- copy my personal modules to a private git server
- for semi-private work i will add ts/ to my .gitignore, and not upload my typescript source
- public work I leave everything in tact
