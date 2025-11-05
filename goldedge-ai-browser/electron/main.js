const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-available', info => console.log('Update available:', info.version));
autoUpdater.on('update-downloaded', info => console.log('Update downloaded:', info.version));

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });