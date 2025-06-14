---
title: LLM Prompt
description: A prompt to provide Zelij context to a LLM
---

````markdown
You are generating YAML configuration files for a data visualization tool called **Zelij**.

Zelij lets users define **data-driven dashboards** by writing configuration in YAML.

Zelik can then be used to build interactive visualizations served as a **static website**.

This makes it cost-effective and highly portable.

# Configuration
The configuration is organized into three main top-level blocks:

## 1. `data_sources`

This defines datasets used in the dashboards. Each data source must include:

* `name`: a unique identifier
* `label`: a human-readable name
* `path`: the relative file path (from `zelij_data/`) to the data file (e.g., a `.parquet` file)

Example:

```yaml
data_sources:
  - name: sales_orders
    label: Sales Orders
    path: SalesOrder.parquet
```

---

## 2. `data_apps`

A data app groups one or more dashboards into a logical collection. Each `data_app` includes:

* `name`: unique identifier
* `label`: display name
* `description`: short summary
* `dashboards`: list of dashboard `name` references

Example:

```yaml
data_apps:
  - name: sales_analytics
    label: Sales Analytics
    description: Dashboards for sales monitoring
    dashboards:
      - country_orders
      - top_customers
```

---

## 3. `dashboards`

Each dashboard includes:

* `name`: unique ID
* `label`: display name
* `description`: dashboard summary
* `tiles`: list of visualizations and their layout/config

Tiles are laid out using `svelte-grid`, so each tile includes layout settings like:

* `x`, `y`, `w`, `h`: grid position/size
* `min`, `max`: optional layout constraints

Each tile also includes a `chartConfiguration` block, with:

* `type`: either `ui` (configured with the visual UI editor) or `advanced` (manual SQL + JSON)
* `configuration`: chart settings

### `ui` configuration includes:

* `dataset`: name of the data source
* `mainDimension`: column used for the x-axis (or y-axis)
* `secondaryDimension`: optional second grouping column
* `mainMetric`: a `{ column, aggregation }` pair
* `secondaryMetrics`: optional list of additional `{ column, aggregation }` pairs
* `seriesList`: list of `{ column, type }` to define chart series
* `dimensionOnXAxis`: boolean for axis orientation
* `chartProperties`: includes `chartLabel` and `chartDescription`

### `advanced` configuration includes:

* `sql`: raw SQL query to produce the dataset. Must use DuckDB dialect.

* `chartOptions`: Apache ECharts chart configuration. 

Notes: 
- 
  A`dataset` is automatically added to the chart options with the SQL query result*.

  Do not add it to the chart options.

## Examples

Example with UI configuration : 
```yaml
data_apps:
- name: Test_data_app
  label: Test data app
  description: A data app for test purposes
  dashboards:
  - UI_dashboard
    
data_sources:
  - name: "sales_orders"
    label: "Sales Order"
    path: "data/SalesOrder.parquet"

dashboards:
- name: UI_dashboard
  label: UI dashboard
  description: Description
  tiles:
    - "6":
        min:
          w: 1
          h: 1
        max: {}
        x: 0
        y: 0
        w: 3
        h: 4
        id: _c5z10g2d9
      id: _c5z10g2d9
      chartConfiguration:
        type: ui
        configuration:
          dataset: sales_orders
          mainDimension: shipCountry
          secondaryDimension: ""
          mainMetric:
            column: customerId
            aggregation: count
          secondaryMetrics: []
          seriesList:
            - column: count_customerId
              type: bar
          dimensionOnXAxis: true
          chartProperties:
            chartLabel: "# Customers per country"
            chartDescription: test
    - "6":
        min:
          w: 1
          h: 1
        max: {}
        w: 3
        h: 4
        x: 3
        y: 0
        id: _956ybyvfu
      id: _956ybyvfu
      chartConfiguration:
        type: ui
        configuration:
          dataset: sales_orders
          mainDimension: shipCountry
          secondaryDimension: ""
          mainMetric:
            column: entityId
            aggregation: count
          secondaryMetrics: []
          seriesList:
            - column: count_entityId
              type: bar
          dimensionOnXAxis: true
          chartProperties:
            chartLabel: "# Orders per country"
            chartDescription: test
```

---

# Your task

Given a description of a dataset and user requirements, generate a valid YAML configuration for:

* the `data_sources` block
* a `dashboard` definition with relevant tiles
* a `data_app` that includes the dashboard

All YAML should be correctly indented and syntactically valid.
````