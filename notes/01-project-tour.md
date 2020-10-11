[◀ Back: Intro](00-intro.md)

# Project tour and getting started

In this workshop we'll be working in the context of a simplified Slack app

![project screenshot](./img/project_screenshot.png)

As we begin the course, it's written entirely in JavaScript, and is comprised of a few mostly stateless React components.

The web client for this app lives in [`src/`](../src/), and is roughly orgainzed as

```bash
src/        # web client
  data/     # data layer
  ui/       # react components
  utils/    # low-level utilities
  index.js  # entry point
```

There's a API and database in this project as well, but we won't be changing them during the workshop.

The database comes from your [`db.json`](../db.json) file, and the API code is located in the [`server/`](../server/) folder.

**One thing you _absolutely will_ want to look at is the API documentation, which can be found in your [`API_EXAMPLES.http`](API_EXAMPLES.http) file**.

<p align=right>

[Next ▶](02-intro.md)

</p>
