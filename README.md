# Clockify Import

Imports Toggl tasks into Clockify. Transforms Toggl tags to Clockify tasks.

Configure API connections by creating `.env` file from [`.env.template`](./.env.template).

Configure transformation in [`config.json`](./config.json) file.

## Usage

Sync tasks from Toggl to Clockify for a specific date:

```sh
npm start -- sync 2020-10-10
```

Get Toggl report for a specific date:

```sh
npm start --silent -- fetch 2020-10-10 > toggl-report.json
```

Push saved report entries to Clockify:

```sh
npm start -- push toggl-report.json
```

## TODO

- [ ] create [cli package](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)
  - [ ] seek inspiration in [jest-cli](https://github.com/facebook/jest/tree/master/packages/jest-cli)
- [ ] skip non-billable entries
  - [ ] make that configurable
- [ ] extract tag to task functionality to config script
- [ ] read config file in runtime
  - [ ] use [js-yaml](https://github.com/nodeca/js-yaml) to load yaml
  - [ ] move config file from repo
- [ ] non-functional
  - [ ] improve rate limiting (search "rate limiting rxjs")
  - [ ] create interceptor for error in both APIs
    - [rethrow](https://www.peterbe.com/plog/chainable-catches-in-a-promise)
  - [ ] create interceptor for spinner
