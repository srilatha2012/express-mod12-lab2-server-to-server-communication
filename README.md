## Reflection
1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
 When we fetch data from an external API, it may send extra information that our client does not need, such as id, source, ect. Re-formatting the data allows us to send only the useful information to the client.
 For example, instead of sending the full API response, we send only: { fact: response.data.text }
 This makes the response cleaner and simple


2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
It is better to send a generic error message because the client does not need to see technical details from Axios or the external API. The actual error object may contain internal information that should not be exposed

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
I would allow the client to pass a language value as a query parameter in my route. Then I would use that value when making the request to the external API.
ex: - /api/fun-fact?language=de