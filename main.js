const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

function createMainWindow() {
  
  mainWindow = new BrowserWindow({});
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  // mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createMainWindow);

app.on('windows-all-closed', () => {
  app.quit();
});

