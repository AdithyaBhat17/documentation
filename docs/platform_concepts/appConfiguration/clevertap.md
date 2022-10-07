---
title : Integrate Yellow with CleverTap
sidebar_label : CleverTap
---


The CleverTap integration allows you to create templates on Yellow.ai and run campaigns for your user base directly on CleverTap.

:::note
Contact your account administrator from CleverTap to configure the integration on CleverTap's end.
:::

## 1. Integration process

To integrate Yellow.ai with CleverTap, follow these steps - 

1. Navigate to **Integrations** and search for CleverTap under **All integrations**.

   ![](https://i.imgur.com/kUvNRVp.jpg)

2. Generate and copy the API key and paste it with in the Authorization header over on CleverTap. 
3. Enable Postback URL from Preferences in Engage. To know how to enable this from Preferences, see [Notification Engine](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine/#postback-webhook--url).
4. Paste the callback URL generated by CleverTap in the fields shown on the integrations page.

   ![](https://i.imgur.com/eqNJf36.png)

5. Register https://cloud.yellow.ai/integrations/genericIntegration/clevertap as a static URL on the CleverTap dashboard to trigger Yellow.ai campaigns. 
6. Generate regular templates through the [Template creation module](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview) and use those template names directly in CleverTap.
7. To dynamically change text within a template, you can make use of **Freeform templates**. These will help you to pass dynamic text on CleverTap. For this, you need to generate two separate templates.

   i. **Freeform text template**: This is a template with just a variable `{{1}}`. Once approved, you can pass the template as a field within the Integrations page.
   ![](https://i.imgur.com/3TVLSl6.png)

   ii. **Freeform media template**: This follows the same behaviour of the text template but with a media file attached at the time of approval. You can change the media dynamically changed over on CleverTap. 

   ![](https://i.imgur.com/E0kCb5K.jpg)


8. Once the templates are approved, pass both of these template names into the integration page fields.

   ![](https://i.imgur.com/4KzE6d1.png)

9. Click **Connect**.

   ![](https://i.imgur.com/4KzE6d1.png)



## 2. Limitations
The CleverTap integration does not support the following: 
1. The text in a header cannot be dynamically changed.
2. Media formats supported within the header are png, jpg and mp4.
3. Error codes in callbacks from the WA server.
4. Dynamic quick replies.