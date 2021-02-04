let ducy = {};
ducy.run = function() {
  let args = input.value.slice(5).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  switch(command) {
    case 'install':
      ducy.install();
      break;
    case 'help':
      ducy.help();
      break;
    case 'list':
      ducy.list();
        break;
  }
}
ducy.moduleList;
fetch('https://randucy-modules.netlify.app/moduleList.json').then( function(u){ return u.json(); } ).then( function(json){ ducy.moduleList = json; } )
ducy.install = function() {
  let args = input.value.slice(11).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  let moduleName = args[0]
  if (args[1] !== undefined) {
    randucy.newLine('No arguments supported')
    randucy.newLine('Usage:')
    randucy.newLine(ducy.data.help[1].usage)
    return
  }
  if (moduleName == undefined) {
    randucy.newLine('No module specified')
    randucy.newLine('Usage:')
    randucy.newLine(ducy.data.help[1].usage)
    return
  }
  const chosenModule = ducy.moduleList.find( ({ name }) => name == moduleName );
  if (chosenModule == undefined) {
    randucy.newLine('Module ' + moduleName + ' not found')
    return
  }
  const protoFunctionObject = {
    "name": "",
    "requestFunction": ""
  };
  let newFunctionObject = protoFunctionObject;
  newFunctionObject.name = moduleName;
  newFunctionObject.requestFunction = chosenModule.runFunctionName;
  for (let i = 0; i < chosenModule.link.length; i++) {
    let newScript = document.createElement('script')
    newScript.setAttribute('src',chosenModule.link[i])
    document.body.appendChild(newScript)
  };
  randucy.functionList.push(newFunctionObject)
}
ducy.help = function() {
  randucy.newLine('||========[ Ducy Help ]========||')
  for (let i = 0; i < ducy.data.help.length; i++) {
    randucy.newLine(ducy.data.help[i].name + ': ' + ducy.data.help[i].description + '[' + ducy.data.help[i].usage + ']')
  }
  randucy.newLine('||=============================||')
}
ducy.list = function() {
  randucy.newLine('Available modules:')
  for (let i = 0; i < ducy.moduleList.length; i++) {
    randucy.newLine(ducy.moduleList[i].name)
  }
}
ducy.data = {};
ducy.data.help = [
  {
    name: 'help',
    description: 'shows this screen',
    usage: 'help'
  },
  {
    name: 'install',
    description: 'installs a module',
    usage: 'install <moduleName>'
  },
  {
    name: 'list',
    description: 'lists all available modules',
    usage: 'list'
  }
]
