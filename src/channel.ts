import { Ingest, Search } from 'sonic-channel'

export const channel = new Ingest({
  host: '::1',
  port: 1491,
  auth: 'SecretPassword'
})

channel.connect({
  connected: function () {
    // Connected handler
    console.info('Sonic Channel succeeded to connect to host (ingest).')
  },

  disconnected: function () {
    // Disconnected handler
    console.error('Sonic Channel is now disconnected (ingest).')
  },

  timeout: function () {
    // Timeout handler
    console.error('Sonic Channel connection timed out (ingest).')
  },

  retrying: function () {
    // Retry handler
    console.error('Trying to reconnect to Sonic Channel (ingest)...')
  },

  error: function (error) {
    // Failure handler
    console.error('Sonic Channel failed to connect to host (ingest).', error)
  }
})

export const search = new Search({
  host: '::1',
  port: 1491,
  auth: 'SecretPassword'
})

search.connect({
  connected: function () {
    // Connected handler
    console.info('Sonic Channel succeeded to connect to host (search).')
  },

  disconnected: function () {
    // Disconnected handler
    console.error('Sonic Channel is now disconnected (search).')
  },

  timeout: function () {
    // Timeout handler
    console.error('Sonic Channel connection timed out (search).')
  },

  retrying: function () {
    // Retry handler
    console.error('Trying to reconnect to Sonic Channel (search)...')
  },

  error: function (error) {
    // Failure handler
    console.error('Sonic Channel failed to connect to host (search).', error)
  }
})
