import Thumbnail from './thumbnail';

const Cards = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Cards;
