# Clockify Import

Imports Toggl tasks into Clockify. Transforms Toggl tags to Clockify tasks.

Configure transformation by creating `.env` file from [`.env.template`](./.env.template).

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
- [ ] replace `node-fetch` by axios
- [ ] pass Toggl time entries to Clockify push
- [ ] add possibility to omit date
  - if no date provided:
    1. fetch the user timezone
    2. use `moment-timezone` to identify what date is yesterday in that timezone
- [ ] consolidate `.env` and `config.json` files
  - separate connection and transformation configruation
  - use `.env` for connection variables
  - use yaml file for transformation configration
  - use [js-yaml](https://github.com/nodeca/js-yaml) to load yaml
- [ ] skip non-billable entries
  - [ ] make that configurable
- [ ] improve rate limiting
    - [ ] search for proper solution: "rate limiting rxjs"
