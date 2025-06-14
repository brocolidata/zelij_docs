---
title: Data Apps
description: Learn how to configure Zelij data apps
---

**Data Apps** in Zelij serve as containers for organizing and grouping multiple dashboards that belong to the same domain, project, or topic. They help you structure your analytics environment and make it easy for users to navigate related dashboards from a single entry point.

## Configuration

To define a data app, you need to complete 2 steps : 
1. [add a YAML configuration for the Data App](#1-yaml-configuration)
2. [parse the configuration](#2-parse-the-configuration)


### 1. YAML configuration

Create or update a YAML file in the `zelij_config/` directory to include a `data_apps` section like this:

```yaml
data_apps:
  - name: Test_data_app
    label: Test data app
    description: A data app for test purposes
    dashboards:
      - UI_dashboard
```

#### Fields

* `name`:
  A unique identifier for the data app. This will be used internally and in references from other configurations.
* `label`:
  A human-readable title displayed in the UI. This is what users will see in the data app list.
* `description`:
  A short description shown under the app label to explain its purpose or content.
* `dashboards`:
  A list of dashboard names (defined in your `dashboards` YAML section) that belong to this data app. These dashboards will appear grouped under the same app in the Zelij interface.

**Notes** : 
* Each dashboard listed in a data app must be defined separately in the `dashboards` configuration.
* A dashboard can be reused in multiple data apps if needed.

### 2. Parse the configuration

Once defined in a YAML inside the `zelij_config` directory, the data_apps becomes available automatically after running:

```bash
npm run parse-config
```

It will appear in your Zelij app and can be served or deployed as part of a static website.