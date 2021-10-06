// to use JSX, import:
import React from "react";
import SearchCard from "./SearchCard";

function MainContent() {
  // JS:
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  const styles = {
    color: "#4e5053",
    backgroundColor: "#ffffff",
  };

  return (
    <main>
      <h1 style={styles}>The Neighborhood Score</h1>
      <h3>Good {timeOfDay}, Discover your perfect neighborhood</h3>
      <p>
        The most powerful, personalized neighborhood discovery platform. Let us
        empower you to find the community you love for FREE.
      </p>
      {/* Search Card */}
      <div className="search">
        <SearchCard />
      </div>
    </main>
  );
}

export default MainContent;
