# Frontend

## Installation
```sh
curl -L https://git.io/n-install | bash
npm i -g yarn
git clone git@github.com:a-x-/react-boilerplate.git && cd react-boilerplate
yarn
```

## Running static HMR dev server and lint & testing watchers
```sh
PORT=3000 yarn start
yarn test
yarn lint
```

### Server
#### Mock
```sh
REACT_APP_MOCK=1 PORT=3000 yarn start
```


### Real server with mocked db

Server must be ran at 3001 port.

*server run guide*

## Production
### Discovery
**In development** `app` goes to the `/api/...` at `localhost:3000` proxy.

See [more](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development) about [webpack proxy](https://github.com/fullstackreact/food-lookup-demo-rails#overview). Look at `cat package.json | jq .proxy` and `prod.nginx.conf` also.

**In production** `app` goes to the same proxy. Nginx handles it and proxies to `http://backend-service:3000`.

### Deployment
```sh
yarn test-build
yarn deploy
```

----

## Todo
- [ ] Add LOADERS
- [ ] Add redux optimistic actions
- [ ] Add GraphQL
- [ ] Add server-side rendering, node backend
- [ ] Add PostCSS
