const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow () {
  // 新規ウインドウ生成
  win = new BrowserWindow({
    width: 900,
    height: 600
  })


  win.loadURL(url.format({
    pathname: path.join(__dirname, '..', 'dist/misem/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //// 起動時に開発者ツールを開く　（コメントアウトしてます）
  // win.webContents.openDevTools()

  // ウインドウが閉じたときのイベント
  win.on('closed', function () {
    win = null
  })
}

// Electron初期化時にウィンドウ生成
app.on('ready', createWindow)

// すべてのウインドウが閉じたときにElectronを終了する。
app.on('window-all-closed', function () {

  // macOSの場合
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOSの場合
  if (win === null) {
    createWindow()
  }
})
