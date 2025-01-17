---
title: Function
sidebar_label : Function (code)
keywords : [code, function, math, calculations]
---

Functions allow you to implement custom logic and perform various actions within your bot. It offers flexibility beyond the bot's built-in capabilities.

Some of the common examples for writing custom logic include extracting specific information from API responses, performing mathematical calculations, decoding and much more. The possibilities extend far beyond these examples, making **Functions** a versatile feature to use the bot to the fullest.

## Create a function

This section covers the format for writing custom logic, the available arguments for data retrieval, and how to create functions using this information.

### Format of functions

In the following snippet, you need to replace the line 'Your logic goes here' with your own code to implement the desired functionality.

```
return new Promise(resolve => {
      // Your logic goes here
      resolve();
  }); 
```
When you click **+ Add new function**, the platform automatically provides you with this pre-built snippet. 

### Function arguments

In your code, you can use the following arguments to access specific pieces of information.

| arg | Data type | Use |
| -------- | -------- | -------- |
| data.variables.<variable_name>   | String |To access any bot variable in the function. |
| data.channel | String | To access channel names like whatsapp, yellowmessenger, facebook, etc.|
|data.profile| Object| Contains user properties  such as  name, number, email, city , country, language. |
| data.sender | String | User ID |
|data.bot | String| Bot ID|
|data.message | String | To access Last/latest user message in the conversation.|
|data.event.<event_name>|Object|To access events in the function.|
|ymLib.args.apiResponse | any | To access API response in API transformation function.|
| ymLib.args.logger | Object | Can be used to add logs. |
| context.history | Object | Contains history of nodes visited by user.|
| prediction.intents | String | To get [intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) predicted from the user message. |
| prediction.entities |String| To get [entities](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) predicted from the user message. |

### Create a new function

1. Go to **Studio** > **Functions** > **+ Add new function**.

![](https://i.imgur.com/KacI9y0.png) 

2. Provide a name to your function and click  **Add function**.

![](https://i.imgur.com/o1446YR.png)

3. Type your custom logic and click **Save**.

![](https://i.imgur.com/V5K8u7h.png)

4. Click the warnings option at the bottom to rectify the displayed warnings/errors.

![](https://i.imgur.com/ynPVSqT.png)

## Tools and other settings

This section has some funcionalities common to the entire bot.

![](https://i.imgur.com/zU0Hk1n.png)

#### Tools

This is a global testing and settings tab. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) to learn more.

![](https://i.imgur.com/tP1JZpa.png)

#### Logs

This option shows all the logs related to functions, you can learn more about this by clicking [here](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow#31-view-code-logs).

![](https://i.imgur.com/gCkDZOH.png)

#### Compare

This option compares the function between staging and production environments depending on the environment the bot is currently in. 

![](https://i.imgur.com/o39MHHR.png)

#### Flows

Flows allow quick copying and accessing of flows using their names. You can easily copy the flow name and click the flow link to be redirected to the specific flow. This feature also allows you to view the nodes used in each flow.

![](https://i.imgur.com/V4xtEBV.png)

#### Localization

The Localization feature lets you add a code that handles the translation process. To know more, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#-12-add-translations-using-code).

![](https://i.imgur.com/EtE2V9v.png)

## Using functions in flows

Functions are used in flows via the [Function node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function). 

The following is an example where the function node is used to convert minutes to seconds.

1. Create a flow with the [Question node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-question) to take an input from the user and store the response in a variable, pizzamin.

![](https://i.imgur.com/FS5E7IW.png)

2. Go to **Functions**, pass this variable and write a code to convert minutes to seconds.

For example,

```
return new Promise(resolve => {
    let minutesTaken = data.variables.pizzamin;
    let secondsTaken = minutesTaken * 60;
    let stringSeconds = secondsTaken.toString();
    resolve(stringSeconds);
  });                          
  
```

3. Include a function node, pass the function created in the previous step, and store the response in another variable, pizzasec.

![](https://i.imgur.com/0rC44SF.png)

5. To display the result to the end user, include a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) and choose the pizzasec variable.

![](https://i.imgur.com/lpEw972.png)

**Result:**

<img src="https://i.imgur.com/dBTzVuR.png" alt="drawing" width="50%"/>


---

**What Next?**

* Create your own function and use it by adding an [API node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api) in the flow.
* You can visit our [community](https://community.yellow.ai/) and share your ideas with other fellow bot builders.

