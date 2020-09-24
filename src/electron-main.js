const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      preload: `${__dirname}/electron-preload.js`,
      worldSafeExecuteJavaScript: true
    }
  })


  win.loadURL(url.format({
    pathname: path.join(__dirname, '..', 'dist/misem/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', function () {
    win = null
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
