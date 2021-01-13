function ducyInstall() {
  let args = input.value.slice(11).trim().split(/ +/g);
  let command = args.shift().toLowerCase();
  let moduleName = args[0]

  const result = ducyModules.find( ({ name }) => name == moduleName );

  newCommandLine(result.link)
}
