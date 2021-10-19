// to use JSX, import:
import React from "react";
import SearchCard from "./SearchCard";
import InfoCard from "./InfoCard";

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

  // const styles = {
  //   color: "#4e5053",
  //   backgroundColor: "#ffffff"
  // };

  return (
    <main>
      {/* TODO: readjust the title position*/}
      <div class="mt-5">
        <h1>The Neighborhood Score</h1>
        <h3>Good {timeOfDay}, Discover your perfect neighborhood</h3>
        <p>
          The most powerful, personalized neighborhood discovery platform.
          <br />
          Let us empower you to find the community you love for FREE.
        </p>
      </div>
      {/* Search Card */}
      <div className="search">
        <SearchCard />
      </div>

      {/* Info Card */}
      {/* TODO: adjust the left padding */}
      <h2 class="text-left pl-2">City Insight: </h2>
      <div className="info">
        <InfoCard />
      </div>
    </main>
  );
}

export default MainContent;
