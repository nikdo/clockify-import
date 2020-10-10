# Clockify Import

Imports Toggl tasks into Clockify. Transforms Toggl tags to Clockify tasks.

Use [`.env.template`](./.env.template) to create `.env` file for target Clockify project.

Get Toggl report:

```
GET https://api.track.toggl.com/reports/api/v2/details?workspace_id={workspaceId}&since={sinceDate}&until={untilDate}&user_agent={togglUserAgent}&client_ids={clientIds}&billable=true'
```

Pay attention to the [`total_count`](https://github.com/toggl/toggl_api_docs/blob/master/reports/detailed.md#response) property in the response and fetch all pages if needed.

Save response(s) to a file(s).

Push report entries to Clockify:

```sh
npm start -- push toggl-report.json
```

## TODO

- [ ] skip non-billable entries
- [ ] improve rate limiting
    - [ ] search for proper solution: "rate limiting rxjs"
- [ ] consolidate `.env` and `config.json` files
