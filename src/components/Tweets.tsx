import React from "react";
import tweetsMock from "../mockdata/tweets.json"; // Adjust the path as necessary

// Function to calculate relative time
const getRelativeTime = (timestamp: string): string => {
  const now = new Date();
  const tweetDate = new Date(timestamp);
  const diffInSeconds = Math.floor(
    (now.getTime() - tweetDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}min ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
};

const Tweets: React.FC = () => {
  // Function to truncate text
  const truncateText = (text: string): string => {
    let maxLength = 200;
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Filter tweets for userId 1
  const userId = 1;
  const userTweets = tweetsMock.filter((tweet) => tweet.userId === userId);

  return (
    <div className="w-full">
      {/* Top row showing replies and count */}
      <div className="flex flex-row justify-between items-center p-4 border-2 border-black">
        <div className="font-bold p-2">Replies</div>
        <div className="font-bold">{userTweets.length}</div>{" "}
        {/* Display the dynamic count */}
      </div>

      <div className="border-l-2 border-r-2 border-black">
        {userTweets.map((tweet) => (
          <div
            key={tweet.id}
            onClick={() => window.open(tweet.link, "_blank")}
            className="flex flex-row justify-between items-center p-4 cursor-pointer hover:bg-black hover:text-white border-b-2 border-black transition-colors"
          >
            <div className="p-2 flex-grow">{truncateText(tweet.text)}</div>

            <div className="">{getRelativeTime(tweet.timestamp)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tweets;
