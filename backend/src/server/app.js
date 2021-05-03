const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const config = require('config')
const { createProxyMiddleware } = require('http-proxy-middleware');
const routes = require('./routes')
const proxyMiddleware = require('../middlewares/proxy')
const handleError = require('../middlewares/handleError')

const DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10
const DEFAULT_PARAMETER_LIMIT = 10000

const bodyParserJsonConfig = () => ({
  parameterLimit: config.get('api').parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.get('api').bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT,
})

const bodyParserUrlencodedConfig = () => ({
  extended: true,
  parameterLimit: config.get('api').parameterLimit || DEFAULT_PARAMETER_LIMIT,
  limit: config.get('api').bodySizeLimit || DEFAULT_BODY_SIZE_LIMIT,
})

const app = express()

app.use(cors())
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))
app.use(bodyParser.json(bodyParserJsonConfig()))
app.use(bodyParser.urlencoded(bodyParserUrlencodedConfig()))

const proxyOptions = {
  target: `http://${config.get('ipfs.host')}:${config.get('ipfs.port')}/api/v0/`,
  changeOrigin: true ,
  pathRewrite: {
    ['^/api/v0']: ''
  },
  onProxyReq: async (proxyReq, req, res) => {
      await proxyMiddleware.authenticateApiKey(proxyReq, req, res)
      await proxyMiddleware.saveRequest(proxyReq, req, res)
  },
}

app.use('/api/v0', createProxyMiddleware(proxyOptions));

routes.bind(app)

app.use(handleError)

module.exports = app
