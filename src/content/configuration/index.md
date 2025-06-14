---
title: Configuration overview
description: Learn how to configure your Zelij projects
---


Zelij uses a simple and flexible configuration system based on [YAML configuration files](#yaml-configuration) and [data files](#data-files)


## YAML Configuration

All configuration is written in YAML and must be located in the `zelij_config` directory of your project.

You can organize the directory however you like—for example, by creating subfolders for each dashboard or data app.

## Data Files
All data files must be located in the `zelij_data` directory.

You can organize the directory however you like—for example, by creating subfolders for each mart.


## How to Parse the Configuration

Once your data sources are defined and the data files are in place, run:

```bash
npm run parse-config
```

This will:

* Read all `.yaml` or `.yml` files in `zelij_config/`
* Merge and validate their content
* Generate a single consolidated file in the static folder: `zelij_configuration.json`
* Create a copy of all files located in `zelij_data` in the static folder


## About the `zelij_configuration.json`

The `zelij_configuration.json` file contains all the structured configuration needed by Zelij, including:

* [`data_sources`](/docs/configuration/data_sources)
* [`data_apps`](/docs/configuration/data_apps)
* [`dashboards`](/docs/configuration/dashboards)



## Why This Matters

The `zelij_configuration.json` file acts as the **source of truth** when:

* **Serving** a Zelij project locally (e.g. for development)
* **Deploying** a static dashboard website (e.g. via S3 + CloudFront)

This setup keeps things simple, portable, and version-controlled.