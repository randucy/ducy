function ducyHelp() {
  newCommandLine('||========[ Ducy Help ]========||')
  for (let i = 0; i < ducyHelpData.length; i++) {
    newCommandLine(ducyHelpData[i].name + ': ' + ducyHelpData[i].description + '[' + ducyHelpData[i].usage + ']')
  }
  newCommandLine('||=============================||')
}
