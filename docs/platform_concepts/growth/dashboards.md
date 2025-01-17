---
title: Create Dashboards and add widgets 
sidebar_label: Dashboards
---

In this article, you will learn: 
1. [Features of the dashboard](#features )
2. [How to create a dashboard via. Dashboard?](#1)
3. [How to create a dashboard via. Data explorer?](#2)
4. [How to add widgets?](#3)



:::note
Actions in Dashboard must be configured separately for **Live and Production** environment.
:::

---- 

#### <a name="features"></a> Features of insights dashboard 

A dashboard is a visual display of all your bot data. It can be used for multiple use-cases with its primary intention to provide information at a glance. 
- A dashboard has its dedicated page and receives information from a **linked database**, which can be **configured** as per your needs. You can choose the data you want to see and choose to visualise the numbers using charts or graphs.
- You can create **Multiple Dashboards**. In this, each dashboard can include multiple widgets (reports).  
- **Widgets** are the saved reports that are present on the [data explorer page](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#2-add-report-to-dashboard). The dashboard helps the analysts to add multiple widgets to the single page layout. 
- Widgets can be directly added to the Dashboard from the **data explorer**.


![](https://i.imgur.com/LJz5RoC.png)


----

## 1. Create Dashboard 

You can create more than one dashboard using either of the following methods.  

**Dashboard usecase** 

Depending upon the commonality between different widgets, you can club the reports having some type of commonality among each other under one particular page(dashboard).
If your company has three different types of products and you want to check the analytics for those products, separately, at the same time, in the same place, you can create dashboards for product #1 product #2, and product #3. Add all of the metrics that are common to a particular product to the respective dashboard. With this, you can see all the values that are connected under one view.


### <a name="1"></a>  Create a dashboard from Dashboard page 

1. Login to [yellow.ai](https://cloud.yellow.ai), click on Overview. Open **Insights** > **Dashboard**.
2. Click **+Add new dashboard** or **+New dasbhoard** from the top right. 
3. On the Dashboard details pop-up, enter **Name** and **Description**. 
4. Click **Save**. 


![](https://i.imgur.com/LRDZwpM.png)


### <a name="2"></a>  Create a dashboard from Data explorer (Saved reports)

> Prerequisites: [Data explorer](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#2-add-report-to-dashboard)

1. Login to [yellow.ai](https://cloud.yellow.ai), click on Overview. Open **Insights** > **Data explorer**. 
2. Click and open any of the saved reports. 
    
    ![](https://i.imgur.com/Sy9bmBJ.png)

3. From **Actions** dropdown, select **Add to dashboard**.
4. Select **New dashboard**. Add **Name** and **Description** (the saved report that you have selected is going to be the widget inside a dashboard. You can choose to add this widget to an existing dashboard or you can create a new dashboard and add this widget to it).
5. Click **Save**. You can view this on the dashboard page. 
    
    ![](https://i.imgur.com/o3ila14.png)

:::note
All the changes made in the Saved reports are automatically updated on the Dashboard.
:::

------

## <a name="3"></a> 2. Add saved reports as widget on dashboard

1. To add a widget to a new dashboard, you must have an existing saved report on the data explorer page. Click **+Add widget**. You will be prompted to create a new widget.  

![](https://i.imgur.com/22q7kUO.png)

:::note
To learn more about creating a saved report, refer to [custom tables](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables).    

<img  src="https://i.imgur.com/MFgmkwk.png"  width="70%"/>
:::

2. To add a widget to a dashboard with existing widgets, click **+Add widget** on the top right. Select from the existing widgets (reports). 
    - Multiple reports can be selected at once. You can also click **+Create new widget** to create new widgets. 

![](https://i.imgur.com/ZXJkgqk.png)

3. Click **Add**. 

---

Other dashboard features are listed below: 

**Date filter**

- Irrespective of the filters added to the saved reports(widgets) you can add a data filter to your dashboard from the top left.  


<img  src="https://i.imgur.com/XHr9FpN.png"  width="50%"/>



**Delete dashboard** 

- To delete this particular dashboard, click **Actions** on the top right and select **Delete dashboard**. 

<img  src="https://i.imgur.com/4BBP5oJ.png"  width="50%"/>

**Edit dashboard**

- By clicking **Edit dashboard** on the top right, you can: 
    - Change the dashboard **Name** and **Description**.
    - Add more widgets to the dashboard. 
    - Delete the existing widgets from dashboard.
    - Drag and drop the existing widgets to place is as per your needs. 
    - Click **Save**. 

![](https://i.imgur.com/8tNItnb.png)
