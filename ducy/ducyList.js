function ducyList() {
  newCommandLine('Available modules:')
  for (let i = 0; i < moduleList.length; i++) {
    newCommandLine(moduleList[i].name)
  }
}
