ducy.list = function() {
  randucy.newLine('Available modules:')
  for (let i = 0; i < ducy.moduleList.length; i++) {
    randucy.newLine(ducy.moduleList[i].name)
  }
}
