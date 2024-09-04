import { useEffect } from "react";

function Timer({ dispatch, timeRemaining }) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      console.log(id);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {minutes < 10 && 0}
      {minutes}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}

export default Timer;
