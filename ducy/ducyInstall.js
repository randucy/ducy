var moduleList;
fetch('https://randucy-modules.netlify.app/moduleList.json').then(
  function(u){ return u.json();}
).then(
  function(json){
    moduleList = json;
  }
)

function ducyInstall() {
  let args = input.value.slice(11).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  let moduleName = args[0]

  if (args[1] !== undefined) {
    newLine('No arguments supported')
    newLine('Usage:')
    newLine(ducyHelpData[1].usage)
    return
  }

  if (moduleName == undefined) {
    newLine('No module specified')
    newLine('Usage:')
    newLine(ducyHelpData[1].usage)
    return
  }

  const chosenModule = moduleList.find( ({ name }) => name == moduleName );

  if (chosenModule == undefined) {
    newLine('Module ' + moduleName + ' not found')
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



  functionList.push(newFunctionObject)

  console.log(chosenModule.link)
}
