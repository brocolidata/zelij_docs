---
title: Deployment Overview
description: Learn how to deploy Zelij as a static website
---

Zelij dashboards can be deployed as **static websites**, making them lightweight, fast, and extremely cost-effective. This is ideal for publishing open data visualizations or internal dashboards without the need to manage backend servers.

---

# Why Static Deployment?

Zelij is designed to work entirely on the client side, using precompiled configuration and local data files. This architecture enables deployments to static hosting platforms, which brings several advantages:

- **Low cost**: No need for servers or databases.
- **High portability**: Dashboards can be hosted anywhere that supports static files.
- **Fast loading**: Optimized frontend performance with minimal latency.
- **Version-controlled**: Easy to preview and roll back changes using Git.


# What Gets Deployed?

When you deploy a Zelij project, you are publishing:

- The static frontend application
- The `zelij_configuration.json` file (generated from your YAML config)
- Any data files located in the `zelij_data/` directory

These files together allow Zelij to function fully in the browser (no backend required).


## Supported Deployment Targets

Each hosting provider or platform may have slightly different requirements. Zelij supports deployment to multiple static hosting platforms through dedicated guides.

**Currently supported**:
- [GitHub Pages](/docs/deployment/github_pages)



## Before You Deploy

Make sure you:

1. Run `npm run parse-config` to generate the latest `zelij_configuration.json`
2. Ensure your `zelij_data/` directory contains the correct data files
3. Build the production version of the Zelij frontend (e.g. `npm run build`)