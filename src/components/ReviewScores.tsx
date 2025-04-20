import ViewMoreBtn from "./ViewMoreBtn";

const reviews = [
  ["General Sentiment", "None"],
  ["Neutral Reviews", "0%"],
  ["Positive Reviews", "0%"],
  ["Negative Reviews", "0%"],
];

export default function ReviewScores() {
  return (
    <div className="flex flex-col gap-10">
      <ul className="grid grid-cols-2 place-self-center gap-15">
        {reviews.map((review) => (
          <li>
            <h4 className="text-center">{review[0]}</h4>
            <h5 className="font-bold text-2xl text-center">{review[1]}</h5>
          </li>
        ))}
      </ul>
      <ViewMoreBtn />
    </div>
  );
}
