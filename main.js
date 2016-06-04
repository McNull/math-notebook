const electron = require('electron');
const { app, BrowserWindow } = electron;
const electronLocalshortcut = require('electron-localshortcut');

let mainWindow;



function createMainWindow() {
  
  mainWindow = new BrowserWindow({
    minWidth: 320,
    minHeight: 200
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  electronLocalshortcut.register(mainWindow, 'F12', () => {
    mainWindow.webContents.openDevTools();
  });
  
  electronLocalshortcut.register(mainWindow, 'CommandOrControl+=', () => {
    mainWindow.webContents.send('zoomIn');    
  });
  
  electronLocalshortcut.register(mainWindow, 'CommandOrControl+-', () => {
    mainWindow.webContents.send('zoomOut');    
  });

  // electronLocalshortcut.register(mainWindow, 'Ctrl+B', () => {
  //   console.log('You pressed ctrl & B');
  // });
  
  mainWindow.on('closed', () => {
    electronLocalshortcut.unregisterAll(mainWindow);
    mainWindow = null;
  });
 
}

app.on('ready', createMainWindow);

app.on('windows-all-closed', () => {
  app.quit();
});

