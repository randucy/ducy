var moduleList;
fetch('https://randucy-modules.netlify.app/moduleList.json').then(
  function(u){ return u.json();}
).then(
  function(json){
    moduleList = json;
    console.log(moduleList)
  }
)

function ducyInstall() {
  let args = input.value.slice(11).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  let moduleName = args[0]

  if (args[1] !== undefined) {
    newCommandLine('No arguments supported')
    newCommandLine('Usage:')
    newCommandLine(ducyHelpData[1].usage)
    return
  }

  if (moduleName == undefined) {
    newCommandLine('No module specified')
    newCommandLine('Usage:')
    newCommandLine(ducyHelpData[1].usage)
    return
  }

  const url = moduleList.find( ({ name }) => name == moduleName );

  if (url == undefined) {
    newCommandLine('Module ' + moduleName + ' not found')
    return
  }

  for (let i = 0; i < url.link.length; i++) {
    let newScript = document.createElement('script')
    newScript.setAttribute('src',url.link[i])
    document.body.appendChild(newScript)
  }
  console.log(url.link)
}
