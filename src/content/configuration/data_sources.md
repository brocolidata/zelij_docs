---
title: Data Sources
description: Learn how to configure Zelij data sources
---

Data Sources are the foundation of your dashboards in Zelij. They define where the data comes from, typically in the form of static files (like Parquet or CSV) stored locally.


## Configuration

To set up a data source, you need to complete 3 steps : 

1. [add YAML configuration for the Data Source](#1-yaml-configuration)
2. [add the corresponding data file](#2-data-file)
3. [parse the configuration](#3-parse-the-configuration)

### 1. YAML configuration

Create or update a YAML file in the `zelij_config/` directory to include a `data_sources` section like this:

```yaml
data_sources:
  - name: sales_orders
    label: Sales Orders
    path: SalesOrder.parquet
```

**Fields:**

* `name`: a unique identifier for the data source (used in `data_apps` and dashboards)
* `label`: a human-friendly label shown in the UI
* `path`: the relative path to the data file (see step 2)

### 2. Data file

Place the corresponding data file in the `zelij_data/` directory of your project.
The `path` field in your YAML is **relative to this folder**.

**Example:**

If your YAML has:

```yaml
path: "SalesOrder.parquet"
```

Then your project should include:

```yaml
zelij_data/SalesOrder.parquet
```

### 3. Parse the configuration

Once your data sources are defined and the data files are in place, run:

```bash
npm run parse-config
```

This will make your data sources available for serving or deployment.

## Limitations
Zelij inherits the [same limitations as DuckDB-WASM](https://duckdb.org/docs/stable/clients/wasm/overview.html#limitations):
- By default, the WebAssembly client only uses a single thread.
- The WebAssembly client has a limited amount of memory available. [WebAssembly limits the amount of available memory to 4 GB](https://v8.dev/blog/4gb-wasm-memory) and browsers may impose even stricter limits. 