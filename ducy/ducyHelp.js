function ducyHelp() {
  newLine('||========[ Ducy Help ]========||')
  for (let i = 0; i < ducyHelpData.length; i++) {
    newLine(ducyHelpData[i].name + ': ' + ducyHelpData[i].description + '[' + ducyHelpData[i].usage + ']')
  }
  newLine('||=============================||')
}
