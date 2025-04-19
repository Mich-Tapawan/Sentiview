# Sentiview

A web application that allows users to analyze customer reviews of a product or service. Users paste or upload text reviews, and the system automatically detects overall sentiment, estimates satisfaction ratings, and highlights common strengths, weaknesses, and suggestions based on the textual data. It provides an intuitive interface with visual insights to help businesses or individuals better understand customer opinions.

# Tech Stack

Frontend:

•	React (TypeScript): Component-based architecture and strong type safety

•	Tailwind CSS: Responsive and clean UI styling

•	Recharts: Visualization of sentiment and aspect insights

•	React Dropzone: For uploading .csv files

•	html2pdf.js or jsPDF: For exporting the result to PDF

Backend:

•	FastAPI: Serves the API and processes text input

•	spaCy: Used for extracting nouns/noun phrases as aspects

•	Hugging Face Transformers: distilbert-base-uncased-finetuned-sst-2-english for sentiment classification

•	TextBlob or VADER (fallback): For additional polarity scoring support

•	Pandas: For handling and summarizing CSV content

Hosting & Deployment:

•	Frontend: Vercel

•	Backend API: Render

•	No database: Stateless, no user data is stored

