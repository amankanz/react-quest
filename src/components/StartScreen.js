function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quest!</h2>
      <h3>
        {numQuestions} questions to Test your React skills and rise to the
        challenge!
      </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Begin your Test!
      </button>
    </div>
  );
}

export default StartScreen;
