const {spawnSync} = require('child_process')
const path = require('path')

const _spawnSync = (...args) => {
  const task = spawnSync(args[0], args[1], {
    stdio: 'inherit',
    detached: true,
    ...args[2],
  })
  if (task.status === 1) {
    process.exit(1)
  }
}

_spawnSync('ttab', ['-w', 'cd item-server && npm run start:debug'])
_spawnSync('ttab', ['-w', 'cd order-server && go run main.go'])
_spawnSync('ttab', ['-w', 'cd user-server && npm run start:debug'])
_spawnSync('ttab', ['-w', 'cd bff && npm run start:debug'])
_spawnSync('ttab', ['-w', 'cd client && npm run dev'])
