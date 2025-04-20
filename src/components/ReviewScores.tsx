import ViewMoreBtn from "./ViewMoreBtn";

const reviews = [
  ["General Sentiment", "None"],
  ["Neutral Reviews", "0%"],
  ["Positive Reviews", "0%"],
  ["Negative Reviews", "0%"],
];

export default function ReviewScores() {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li>
            <h4>{review[0]}</h4>
            <h5>{review[1]}</h5>
          </li>
        ))}
      </ul>
      <ViewMoreBtn />
    </div>
  );
}
