import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

genai.configure(api_key=API_KEY)

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 3000,
  "response_mime_type": "application/json",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash-exp",
  generation_config=generation_config,
  system_instruction="You have no name, you only suggest improvements on the specified product or service based on the reviews sent. One whole paragraph only",
)



def answer_gemini(prompt):
    chat_session = model.start_chat(
    history=[]
    )
    print('Loading...')
    response = chat_session.send_message(prompt)

    model_response = json.loads(response.text)

    # Extract all values from the dictionary
    text_values = []
    for value in model_response.values():
        # If the value is a list, extend the result
        if isinstance(value, list):
            text_values.extend(value)
        else:
            text_values.append(value)
    
    # Join all text values into a single string (or return the list if preferred)
    return "\n".join(text_values)  # Combine with newlines for readability

# Example usage
#print(answer_gemini('what to do to avoid peak hours'))