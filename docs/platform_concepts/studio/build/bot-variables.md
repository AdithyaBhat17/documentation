---
title: Variables
sidebar_label : Bot Variables
---

## <a name="hed-1"></a> 1. Variables

Variables are placeholders that can hold a value and can be used to store user input, data from external systems, or any other relevant information that needs to be saved and used later in the bot conversation. Variables help in creating dynamic and personalized bot conversations.

For example, let's sya that you want to create a chatbot that greets users by name. You can use a variable to store the user's name and then use it later in the conversation. 

For example,  

```

Hello {{user_name}}, how can I help you?
```

The following table consists of various data types that are supported by variables, along with their examples.

| Data Type | Description | Example |
| --- | --- | --- |
| Number | For storing numbers, including floating-point numbers. | 10, 3.14, -15 |
| String | For storing alphanumeric characters. | 'Harry', 'PAN9856', '123starbucks' |
| Object | For storing batch data such as database, API responses, or results from a date prompt. | {"Name": "Ron", "Phone": 9980808080, "Age": 40} |
| Array | For storing a list of multiple values of different data types. | [1,2,3,"Text"], ["india", "+91"] |
| Boolean | For storing logical data with true or false values (1/0). | true, false |

:::note

Ensure you add the data type values in the format mentioned here, for example, if you're storing a string value it should be within ''
:::


## 2. Types of variables

There are 4 different types of variables offered by yellow.ai. They are:

1. Custom variables
* Journey(flow level variables)
* Global(bot level variables)

2. System variables
3. Config variables
4. User properties

### 2.1 Custom Variables

Custom Variables are variables created by bot builders to meet their specific business requirements. They are further divided into two types: Journey Variables and Global Variables. 

- **Journey Variable**: A Journey Variable is accessible only within the journey for which it was created. It stores values related to a specific user journey and can be used only within that journey.
- **Global Variable**: A Global Variable, on the other hand, is accessible across journeys and can be used in APIs.

:::note
These variables store values only within a session. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs#11-session) to know more about sessions.
:::
 
In the following example, **Email** is stored as a Global Variable (as it remains unchanged throughout the bot). In contrast, the **State_ride** variable (which stores the departure location) is a Journey Variable because the user is directed to a different flow where this information is no longer needed.

![Custom Variables Example](https://i.imgur.com/140xW0K.jpg)

### 2.2 System Variables

System variables are pre-defined variables that store information about the user session, conversation, and bot configuration. They're available by default in the platform and can be used across bot flows to personalize the conversation and provide relevant information to the user.

:::note
 The variable names cannot be altered, and new variables cannot be added to this category.
:::

The following are the system variables available on the platform:

| Variable             | Data type | Use                                                                      |
| -------------------- | --------- | ------------------------------------------------------------------------ |
| source               | string    | Returns the channel from which the message was sent.                     |
| sender               | string    | Returns the sender ID. For example: mobile number for WhatsApp.                   |
| profile              | object    | Returns the user’s profile as an object.                                  |
| pageUrl              | string    | Returns the URL of the user's current page.                                                  |
| sentiment            | object    | Returns the sentiment of the user message- positive, negative, or neutral. |
| sessionMessageLogUrl | string    | Returns a URL to the chat’s transcript.                                   |
| date                 | object    | Returns the current date and time.                                        |
| channelProfile       | string    | Returns profile ID of the user in that specific channel.                                             |
| channelProfileName   |   string  | Returns the profile name of the user in that specific channel.|

> {{{system_variable_name}}} notation is used to access system variables.

:::info
You can access the user profile using this syntax: `{{{profile.field_name}}}`.

The following fields are available in the user profile object:
- city
- country
- country_code
- firstTime (if the user is visiting the bot for the first time)
- ip
- latitude
- longitude
- name (generated user name)
- region


To know more, see [System user properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#22-system-user-properties). 
:::

### 2.3 Config Variables 

Config variables are used to store a wide range of information, including API keys, URLs, database connection strings, and other configuration settings that are used throughout the bot flow. By storing these values in Config Variables, bot builders can easily update them in the platform without modifying any code. 

For example, suppose that a bot needs to connect to a specific external API. Rather than hardcoding the API key directly into the bot's code, bot builders can create a Config Variable called **api_key** and store the value there. If the API key ever needs to be updated, the bot builder can simply modify the value of the **api_key** Config Variable in the Yellow.ai platform, without needing to make any changes to the bot's code.

### 2.4 User Properties

User Properties are variables that store information about each individual user interacting with the bot. These properties are stored directly in [User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties) help personalize the user's experience and can be used to make decisions about which messages or actions to display. Examples of User Properties include name, email address, and location.


:::note
 To create new user properties, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#22-create-custom-user-property) for the steps. 
:::

## <a name="hed-2"></a> 3. Create a Variable

:::note
 Only **Custom** and **Config** variables can be added, while **System** Variables and **User Properties** are predefined and cannot be modified.
:::

1. Go to **Studio** and click the variable icon on the left.

![](https://i.imgur.com/JbbJU4b.png)

2. Click the peferred tab(**Custom**/**Config**), if **Custom**, choose J**ourney variables** or **Global variables** and click **+Add Variable**.

![](https://i.imgur.com/UTvXHdQ.png)

3. Enter your preferred **Variable name** and select the respective **Data type** for the variable. 

<img src="https://i.imgur.com/Puety3D.png" alt="drawing" width="90%"/>

5. Based on the chosen data type, the sample **Value** will be displayed automatically. Custom values to be stored in that variable can also be added. 
6. Click **+Add**. 

### 3.1 Create a Variable via nodes

You can also create global variables through nodes and those variables  can be used in any flow or node.

:::note
You can create variables only from [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) and [Action](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes) nodes.
:::

**To create a variable via nodes:**

:::note

We recommend using new variables to store data rather than reusing existing ones, as the values may get overwritten.
::: 

1. Select **Flows** > **Create flow**. To know more about creating flows, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).
2. While creating a flow, if you want to store a user response in a variable and that variable does not exist, you can create a new variable via node by clicking **Store Response in > Select variable**. 

![](https://i.imgur.com/eCsilSz.png)

3. Click **Create new variable**.

<img src="https://i.imgur.com/EbvlK7k.png" alt="drawing" width="70%"/>

4. Add the **variable nam**e and **datatype**, and click **Add**. This global variable can be used in any node/flow.

<img src="https://i.imgur.com/Zp3YaKA.png" alt="drawing" width="70%"/>

---

## <a name="hed-4"></a> 4. Store and retrieve data using variables 

Variables can be used to store data, which can then be retrieved and displayed to end users.

### 4.1 Store data in variables

Action nodes and Prompt nodes can be used to store the data in variables. 

#### 4.1.1 Store the response of a node 

1. Click **Store Response In** option at the bottom of the action/prompt node.
2. A list of journey/global variables and user properties will be displayed, from which you can choose the appropriate variable to store the user's response.
3. Select the variable that you want to use and save the changes.


When the bot asks a question and the user responds, the response will be stored in the selected variable, such as **name** or **phone**.

![](https://i.imgur.com/OewhdE2.png)

:::note
 1. Only names of the existing variables are displayed on the **store response in** dropdown. 
 2. Create a new variable if you want to add more variables to the dropdown.
 3. Variables can also be stored with the help of a [variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables) in the flow.
 
 ![](https://i.imgur.com/l6aRHLK.png) 
:::

### 4.2 Retrieve data from variables

A bot variable can be accessed and used inside any node using the notation `{{{variables.variable_name}}` or by clicking  the variables icon. 

![](https://i.imgur.com/dPrh4eJ.png)

:::note
  Journey and Global variables get **expired after 48 hours** of inactivity.
:::

Data entered in a variable is stored in a specific node and can be retrieved using the same variable in another node. The following is a sample screenshot of a Bot that illustrates the use of variables: 


<img src="https://i.imgur.com/DvYxITj.png" alt="drawing" width="60%"/>
 
### 4.3 Variable Datatypes

Different prompts and action nodes return responses in various formats and data types. Refer to the tables below to understand what types of variables can be stored in each node.


#### [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes)


| Prompt    Nodes                                                                 | Variable Datatype |
|----------------------------------------------------------------------------|-------------------|
| [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name)             | string            |
| [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email)            | string            |
| [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone)            | string            |
| [Location](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-location)           | object            |
| [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel)                  | string            |
| [Quick Replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies)         | string            |
| [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-date)                    | object            |
| [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question)         | string            |
| [Feedback](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback)            | object            |
| [Whatsapp List](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) | string            |
| [Multiselect](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#23-multi-select)                                                                | string            |
| [Image/file](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-file-prompt)        | string            |

#### [Actions](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes)


| Action Nodes                                                                 | Variable Datatype             |
|-----------------------------------------------------------------------------|-------------------------------|
| [API](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api)                           | object, array, number, string |
| [Database (search)](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database)          | array                         |
| [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function)                 | object, array, number, string |
| [Outbound Notification](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#32-outbound-notification)                                                       | object, array, number, string |
| [Notification Status](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#33-notification-status)                                                         | object, array, number, string |
| [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket)         | object, array, number, string |
| [Modifier](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#25-modifier)                 | object, array, number, string |
| [Document Search](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#14-document-search)   | object, array, number, string |
| [Set Language](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#31-set-language)         | object, array, number, string |
| [Send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#12-send-otp)   | object, array, number, string |
| [Verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#13-verify-otp) | object, array, number, string |
| Payment                                                                     | object, array, number, string |
| [Generate PDF](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#19-generate-pdf-image)         | object, array, number, string |


## <a name="hed-5"></a> 5. Access array/object variables

Accessing string and number data types is simple, but it can be slightly different for array and object data types. For instance, in the [API action node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api) example, the stored response is not a simple string or number value.


Consider the following response from a weather API , this consists of an object and array with different indexing.

```
{
  "coord": {
    "lon": 77.2167,
    "lat": 28.6667
  },
  "weather": [
    {
      "id": 761,
      "main": "Dust",
      "description": "dust",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 32.54,
    "feels_like": 30.55,
    "temp_min": 32,
    "temp_max": 33,
    "pressure": 1002,
    "humidity": 21
  },
  "visibility": 3500,
  "wind": {
    "speed": 3.09,
    "deg": 260,
    "gust": 8.23
  },
  "clouds": {
    "all": 0
  },
  "dt": 1617278187,
  "sys": {
    "type": 1,
    "id": 9161,
    "country": "IN",
    "sunrise": 1617237667,
    "sunset": 1617282517
  },
  "timezone": 19800,
  "id": 1273294,
  "name": "Delhi",
  "cod": 200
}
```

To access the fields and index of a JSON object or array stored in a variable, follow these steps:

* To access fields, use {{variables.variable_name.field_name}}, which can be nested for deeper fields.

For example, {{variables.API_var.main.temp}} can access the temp field.

* To access array values, use keys.

For instance, to access the weather description from the above response, use {{variables.API_var.weather.0.description}} because the value is inside an array and is the first value (0th index).


