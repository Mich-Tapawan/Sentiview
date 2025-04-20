import AnalyzeBtn from "../components/AnalyzeBtn";
import ReviewScores from "../components/ReviewScores";

export default function Home() {
  return (
    <section className="py-5 px-5 lg:py-15 lg:px-40">
      <div className="flex flex-col gap-5 mb-10 lg:mb-12">
        <h1 className="brand text-3xl font-bold text-center place-self-center w-fit">
          Sentiview
        </h1>
        <p className="text-center place-self-center text-[#454545] lg:w-[45rem]">
          Analyze customer reviews effortlessly. Paste or upload text, and our
          web application automatically detects overall sentiment, estimates
          satisfaction, and highlights key strengths, weaknesses, and
          suggestions with intuitive visual insights. Understand customer
          opinions better.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-5 lg:gap-10">
        <div className="text-area-container lg:col-span-3">
          <textarea
            name="review-texts"
            id="review-texts"
            placeholder="Enter text here..."
            className="border bg-white w-full h-full pl-5 pt-3"
          ></textarea>
          <AnalyzeBtn />
        </div>

        <div className="results-card py-5 text-white flex flex-col lg:py-10 lg:col-span-2">
          <h2 className="text-lg font-bold text-center">OVERALL RATINGS</h2>
          <div className="place-self-center mb-10">
            <h3 className="text-7xl font-bold">0.0</h3>
            <img src="" alt="" />
          </div>
          <ReviewScores />
        </div>
      </div>
    </section>
  );
}
