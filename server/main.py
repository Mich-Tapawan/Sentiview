from fastapi import FastAPI
from pydantic import BaseModel
from process_reviews import process_reviews

app = FastAPI()

class Result(BaseModel):
    overall_ratings: float
    general_sentiment: str
    neutral_ratings: float
    positive_ratings: float
    negative_ratings: float
    summary: str
    suggested_improvement: str
    positive_aspects: list
    negative_aspects: list


@app.get('/')
def root():
    return{'Hello':'World'}

@app.post('/analyzereviews', response_model=Result)
def analyze_reviews(text: str) -> Result:
    return process_reviews(text)