const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

// DEV MODE ONLY
// require('electron-reload')(__dirname, {
//   electron: require('../node_modules/electron')
// });

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {

  // Get screen size
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    titleBarStyle: 'hidden',
    trafficLightPosition: {
      x:15,
      y:25
    },
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      contextIsolation: true,
      webviewTag: true,
      sandbox: true,
      enableRemoteModule: false,
      allowPopups: true,
    }
  });

  
  // Keyboard shortcuts registering
  globalShortcut.register('Alt+CommandOrControl+Left', () => {
    mainWindow.setBounds({x:0, y:0})
    mainWindow.show();
    mainWindow.setSize(65, height, process.platform == 'darwin' ? true : false);
    if(process.platform == 'darwin'){
      mainWindow.setTrafficLightPosition({x:6, y:25});
    }
  })
  globalShortcut.register('Alt+CommandOrControl+Right', () => {
    mainWindow.setBounds({x:0, y:0})
    mainWindow.show();
    mainWindow.setSize(width, height, process.platform == 'darwin' ? true : false);
    if(process.platform == 'darwin') {
      mainWindow.setTrafficLightPosition({x:15, y:25});
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.