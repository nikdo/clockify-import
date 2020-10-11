# Clockify Import

Imports Toggl tasks into Clockify. Transforms Toggl tags to Clockify tasks.

Configure API connections by creating `.env` file from [`.env.template`](./.env.template).

Create transformation configration file:

```json
{
  "toggl": {
    "workspace_id": "1475595",
    "client_id": "50020693"
  },
  "clockify": {
    "workspace_id": "5f7e1b0d2bcbc7438ea333b8",
    "project_id": "5f7e1b372bcbc7438ea33430",
    "tasks": {
      "Design": "5f7e1bc0f97d037da52c337b",
      "Development": "5f7e32d2f97d037da52c64e6",
      "Non-development": "5f7e32d72bcbc7438ea36644"
    }
  }
}
```

Get Toggl report for a specific date:

```sh
npm start --silent -- fetch 2020-10-10 > toggl-report.json
```

Push report entries to Clockify:

```sh
npm start -- push toggl-report.json
```

## TODO

- [x] push Toggl reports JSON file to Clockify time entries
- [x] fetch Toggl time entries
- [x] replace `node-fetch` by axios
- [x] warn about no entries
- [ ] consolidate `.env` and `config.json` files
  - [ ] separate connection and transformation configruation
  - [ ] use `.env` for connection variables
  - [ ] use config file for transformation configration
  - [ ] replace client id by project id
  - [ ] use [js-yaml](https://github.com/nodeca/js-yaml) to load yaml
  - [ ] move config file from repo
- [ ] pass Toggl time entries to Clockify push

- [ ] add possibility to omit date
  - if no date provided:
    1. fetch the user timezone
    2. use `moment-timezone` to identify what date is yesterday in that timezone
- [ ] skip non-billable entries
  - [ ] make that configurable
- [ ] extract tag to task functionality to config script
- [ ] non-functional
  - [ ] improve rate limiting (search "rate limiting rxjs")
  - [ ] create interceptor for error in both APIs
    - [rethrow](https://www.peterbe.com/plog/chainable-catches-in-a-promise)
  - [ ] create interceptor for spinner
-
