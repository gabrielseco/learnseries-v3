const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.API_URL': prod ? 'https://learn-series-v3.now.sh/graphql' : 'http://localhost:4000/graphql'
}
