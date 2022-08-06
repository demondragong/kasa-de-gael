export default function StarRating({ score }) {
  const redStars = [...Array(score)];
  const greyStars = [...Array(5 - score)];

  return (
    <div className="star-rating">
      {redStars.map((e, i) => (
        <span className="red" key={`redStar${i}`}>
          ★
        </span>
      ))}
      {greyStars.map((e, i) => (
        <span className="grey" key={`greyStar${i}`}>
          ★
        </span>
      ))}
    </div>
  );
}
