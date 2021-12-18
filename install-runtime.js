const FILE_MGR = FileManager[module.filename.includes('Documents/iCloud~') ? 'iCloud' : 'local']();
await Promise.all(['「小件件」开发环境.js', '菜单展示.js'].map(async js => {
  const REQ = new Request(`https://github.com/vardestiny/pandaimbiss_widget/raw/develop/Scripts/${encodeURIComponent(js)}`);
  const RES = await REQ.load();
  FILE_MGR.write(FILE_MGR.joinPath(FILE_MGR.documentsDirectory(), js), RES);
}));
FILE_MGR.remove(module.filename);
Safari.open("scriptable:///open?scriptName="+encodeURIComponent('菜单展示'));