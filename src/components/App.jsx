import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";
import Footer from "./Footer";

// An function which takes an object of emojipidia list and render a custom component Entry
function useEmojipediaList(item) {
  return (
    <Entry
      key={item.id}
      emoji={item.emoji}
      name={item.name}
      description={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* full customizied component using mapping */}

        {emojipedia.map(useEmojipediaList)}

        {/*  Custom component with hard code value */}

        {/* <Entry 
        emoji = "💪"
        name = "Tense Biceps"
        description = "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used
        in connection with doing sports, e.g. at the gym."
        /> */}

        {/* description term and description or details */}

        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              🙏
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a “high five”
            or to say thank you.
          </dd>
        </div> */}
      </dl>
      <Footer />
    </div>
  );
}

export default App;
