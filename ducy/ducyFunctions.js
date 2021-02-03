let ducy = {};

ducy.run = function() {
  let args = input.value.slice(5).trim().split(/ +/g);
  let command = args.shift().toLowerCase();

  switch(command) {
    case 'install':
      ducy.install();
      break;

    case 'help':
      ducy.help();
      break;

    case 'list':
      ducy.list();
        break;
  }
}
