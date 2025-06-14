---
title: UI editor
description: Learn how to create charts with the UI in Zelij
---


The **UI Editor** in Zelij offers a simple, guided way to build charts without writing any code. It’s perfect for non-technical users or for quickly prototyping visualizations.

You can access the UI Editor when creating a chart tile in edit mode by switching to "UI Editor".

You should use the UI Editor when : 
* You're building standard charts (bar, line, area, pie, etc.).
* You prefer dropdowns over writing code.
* You want to iterate quickly or prototype dashboards.

The UI Editor helps you create charts by selecting options from dropdowns instead of writing SQL or JSON. It’s intuitive and flexible, and supports most common charting use cases.

---

# How It Works

The UI Editor is structured around 4 mandatory settings:

* **Dataset**:
  The table or data source that powers your chart. Selecting a dataset makes its columns available for use as dimensions or metrics. All chart logic is based on this data.

* **Dimensions**:
  Categorical fields used to group or segment data—typically mapped to the x-axis or used for series splitting. Examples include `year`, `region`, or `product_id`.

  * **Main dimension**: the primary axis of grouping
  * **Secondary dimension** *(optional)*: used to pivot data into multiple series

* **Metrics**:
  Numerical values to be aggregated and plotted—typically shown on the y-axis. Examples include `sales`, `revenue`, or `conversion_rate`.

  * **Main metric**: the primary value being visualized
  * **Secondary metrics** *(optional)*: additional values that result in multiple chart series

* **Series**:
  The individual visual elements plotted on the chart (bars, lines, etc.). Each series maps a combination of dimensions and metrics to a specific chart type.

  * Automatically generated based on dimensions and metrics
  * Each series can have its own chart type

---

# Creation process

## 1. **Select a Dataset**

Choose the dataset that powers your chart. This can be:

* A predefined table or view
* A custom dataset you’ve imported or created earlier

📌 *Once selected, Zelij loads available columns to use in the chart configuration.*

## 2. **Set the Main Dimension**

The main dimension is usually mapped to the **x-axis** and determines how data is grouped.

Examples:

* `year` → to show change over time
* `region` → to compare categories
* `product` → to break down sales per item

## 3. **(Optional) Add a Secondary Dimension**

A secondary dimension allows you to **split the main dimension** into subgroups. This enables **pivoted charts**, such as:

* A line chart showing `sales` by `year`, split by `region`
* A bar chart showing `clicks` by `device`, split by `campaign`

Zelij automatically generates one **series per unique value** in the secondary dimension.

## 4. **Set the Main Metric**

The main metric is the primary **value** being measured—often shown on the **y-axis**.

Examples:

* `total_sales`
* `clicks`
* `revenue`

To set a metric, you select a **column** in the dataset and an aggregation (`sum`, `count`, `min`, `max`, ...).

## 5. **(Optional) Add Secondary Metrics**

Secondary metrics let you show **multiple values** for the same dimension. For example:

* Display both `sales` and `profit` by `year`
* Compare `conversions`, `impressions`, and `clicks` across campaigns

Each metric becomes its own **series** in the chart.

Like the main metric, secondary metrics are defined by selecting a **column** in the dataset and an aggregation (`sum`, `count`, `min`, `max`, ...).

## 6. Define Series
Series define how your data gets visualized on the chart.

For each series, you can:
- Select a metric or column.
- Choose a chart type (e.g., bar, line, area).


💡 You can auto-generate series based on your selections or define them manually.

---

# Supported Chart Scenarios

Zelij supports three key data visualization scenarios in the UI Editor:


## Main Dimension + Main Metric

This is the **simplest case**: one dimension and one metric.

Example:

* Dimension: `year`
* Metric: `total_sales`

**Result**: A single-series chart (e.g. a bar or line chart) showing total sales over time.

## 2 Dimensions + Main Metric

This creates a **pivoted chart**, where each series represents a value from the secondary dimension.

Example:

* Main Dimension: `year`
* Secondary Dimension: `region`
* Metric: `total_sales`

**Result**: A multi-series chart with one line or bar per region, grouped by year.


## Main Dimension + Multiple Metrics

This creates one series per metric, using the same dimension for grouping.

Example:

* Dimension: `year`
* Metrics: `sales`, `profit`, `expenses`

**Result**: A chart with three lines (or bars), each showing a different metric over time.

--- 

# 🛠 Tips & Notes

* You can **manually edit series** after they are generated to change chart type, color, or encoding.
* Use the **regenerate series** button if you update dimensions or metrics and want the chart to update automatically.
* You can **switch to the Advanced Editor** at any time to take full control over SQL and chart options.