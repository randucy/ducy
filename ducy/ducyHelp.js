function ducyHelp() {
  var ducyHelpObjects;

  for (ducyHelpObjects = 0; ducyHelpObjects < ducyHelpData.length ; ducyHelpObjects++) {
    newCommandLine(ducyHelpData[ducyHelpObjects].name)
  }
}
