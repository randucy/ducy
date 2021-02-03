ducy.moduleList;
fetch('https://randucy-modules.netlify.app/moduleList.json').then(
  function(u){ return u.json();}
).then(
  function(json){
    ducy.moduleList = json;
  }
)

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

  console.log(chosenModule.link)
}
