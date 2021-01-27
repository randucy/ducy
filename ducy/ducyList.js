function ducyList() {
  newLine('Available modules:')
  for (let i = 0; i < moduleList.length; i++) {
    newLine(moduleList[i].name)
  }
}
