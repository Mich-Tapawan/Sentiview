import AnalyzeBtn from "../components/AnalyzeBtn";
import ReviewScores from "../components/ReviewScores";

export default function Home() {
  return (
    <section>
      <div>
        <h1>Sentiview</h1>
        <p>
          Analyze customer reviews effortlessly. Paste or upload text, and our
          web application automatically detects overall sentiment, estimates
          satisfaction, and highlights key strengths, weaknesses, and
          suggestions with intuitive visual insights. Understand customer
          opinions better.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <textarea name="" id="" placeholder="Enter text here..."></textarea>
          <AnalyzeBtn />
        </div>

        <div className="text-white">
          <h2>OVERALL RATINGS</h2>
          <div>
            <h3>0.0</h3>
            <img src="" alt="" />
          </div>
          <ReviewScores />
        </div>
      </div>
    </section>
  );
}
