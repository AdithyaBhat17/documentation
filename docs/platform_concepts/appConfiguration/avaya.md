---
title : Avaya Live Chat
sidebar_label : Avaya Live Chat
---

Yellow.ai’s integration with [Avaya](https://www.avaya.com/en/) lets you connect with the live chat agents of **Avaya** to resolve your queries.


## 1. Connect Avaya with Yellow.ai

To connect your yellow.ai account with **Avaya**, follow these steps.

### 1.1 Enable the integration in Yellow.ai's **Integration** module

1. Login to [cloud.yellow.ai](https://cloud.yellow.ai/auth/login) and click the **Integrations** module on the top left corner of your screen.

<img src="https://i.imgur.com/3QjKjML.png" alt="drawing" width="100%"/>

2. Search for **Avaya Live Chat** or choose the category named **Live chat** from the left navigation bar and then click on **Avaya Live Chat**.

<img src="https://i.imgur.com/UTEWWk6.png" alt="drawing" width="100%"/>


3. Fill in the required fields. 

*  **Avaya Username Name** (To be provided by the client/avaya spoc of the client)
*  **Avaya Password** (To be provided by the client/avaya spoc of the client) 
*  **Api Domain** (To be provided by the client/avaya spoc of the client).


4. Once you're done, click **Connect**.

### 1.2 Configure webhook URL in Avaya Dashboard

To receive events, you need to configure the webhook URL in the **Avaya Dashboard**. 

Copy the webhook url and the api key mentioned in the **Instructions** section of the **Avaya Integration** Card. Append the region of your bot to the domain of the webhook url. r1/r2/r3/r4/r5 are the regions of your bot, you can refer the following list for the same.

* r1 = MEA
* r2 = Jakarta
* r4= USA
* r5 = Europe
* r3 = Singapore


For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is r1. If the bot belongs to India, you can use origin domain itself.

 ## 2. Use-case

This integration lets you connect with live agents on the **Avaya** platform from your yellow.ai account. 

### 2.1 Chat with Avaya Live Agent
 
 1. In the Studio flow builder, select the **Raise Ticket** node.

<img src="https://i.imgur.com/k3kIkVd.png" alt="drawing" width="100%"/>

2. Select **Avaya Live Chat** from the **Live chat agent** drop-down list.

<img src="https://i.imgur.com/PD7Axej.png" alt="drawing" width="90%"/>


The following table contains the details of each field of the **Raise ticket** node.


| Field name | Sample value | Data type |Description
| -------- | -------- | -------- |-----|
|Message after ticket assignment|Requesting live agent connection.|String| The message that will be displayed to the end user after a ticket is successfully assigned to an agent|
|Name| Rajesh|String|Name of the end user|
|Mobile| 9876543210| String|Mobile number of the end user|
Email|test@gmail.com|String|Email address of the end user
Query|I have a concern regarding my flight ticket|String| The subject/topic/reason why the ticket was created|
Priority|MEDIUM|String|The priority of the ticket|

You can enable **Advanced Options** to access the advanced features of this node.

<img src="https://i.imgur.com/tPS9R0J.png" alt="drawing" width="70%"/>

**Sample success response**

```
{
   "assignedTo": true,
   "success": true,
   "status": "ASSIGNED",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note 
apiresponse represents the raw response from the Avaya create ticket API
:::

**Sample failure response**
```
{
   "success": false,
   "assignedTo": false,
   "agentNotAvailable": true,
   "message": "TicketId is not created and transferring the control back to the bot",
   "ticketInfo": "{{apiresponse}}"
}
```
:::note 
apiresponse represents the raw response from the Avaya create ticket API
:::


