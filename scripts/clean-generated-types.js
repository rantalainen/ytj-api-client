// Utility function to clean generated types

const path = require('path');
const fs = require('fs');

const targetPath = path.resolve(__dirname, '../src/generated/httpsapitietopalveluytjfiyritystiedot/definitions');

const files = fs.readdirSync(targetPath);

for (const file of files) {
  if (!file.startsWith('Wm')) {
    continue;
  }

  console.log('Remove unnecessary props: ' + file);

  const filePath = path.resolve(targetPath, file);
  let fileContent = fs.readFileSync(filePath, 'utf8');

  fileContent = fileContent.replace(/(?=\/\*\* Kieli)(.|\r\n|\n)*?(?<=kieli\?\: string\;(\r\n|\r|\n))/gim, '');
  fileContent = fileContent.replace(/(\s+)asiakastunnus\?\: string\;(\r\n|\r|\n)/gim, '');
  fileContent = fileContent.replace(/(\s+)aikaleima\?\: string\;(\r\n|\r|\n)/gim, '');
  fileContent = fileContent.replace(/(\s+)tarkiste\?\: string\;(\r\n|\r|\n)/gim, '');
  fileContent = fileContent.replace(/(\s+)tiketti\?\: string\;(\r\n|\r|\n)/gim, '');
  fileContent = fileContent.replace(/(\s+)\/\*\* s\:string \*\//gim, '');

  fs.writeFileSync(filePath, fileContent);
}
