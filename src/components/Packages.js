import React from "react";
import Spacer from "./Spacer"; // Reusing the Spacer component
import "./css/Packages.css"; // Component specific styles (renamed)

/**
 * Packages component displays a section of service packages.
 * It features a grid of cards, each containing a description and package name,
 * visually similar to the cards in the provided image.
 */
const Packages = () => {
  // Example package data (can be replaced with data fetched from an API)
  const packagesData = [
    {
      id: 1,
      heading: "The First Step",
      price: "R2000",
      target:
        "For Grade 9 learners choosing subjects, or anyone beginning to explore a path",
      description: {
        intro:
          "Sometimes the hardest part is simply knowing where to begin. This gentle package supports young people as they take their first step into understanding themselves—who they are, what they enjoy, and where they might be needed.",
        bullets: [
          "40-minute intro session to ease in and set goals",
          "Interest, personality, and aptitude assessments",
          "A short, meaningful report with subject & study suggestions",
        ],
        conclusion:
          "Let’s take the first step together—with curiosity and calm clarity.",
      },
    },
    {
      id: 2,
      heading: "Pathfinder",
      price: "R2,800",
      target:
        "For high schooler, recent matriculants, or young adults needing career or study direction",
      description: {
        intro:
          "You don’t have to have it all figured out—but having a compass helps. Pathfinder is for those feeling unsure about what’s next. Through supportive conversation and comprehensive testing, we’ll explore your strengths, values, and possible paths forward.",
        bullets: [
          "1-hour intro session to understand your story and goals",
          "Personality, aptitude, and Interest Scale",
          "Full written report with tailored suggestions",
        ],
        conclusion: "Your direction is within you—let’s uncover it together.",
      },
    },
    {
      id: 3,
      heading: "Crossroads",
      price: "R3,200",
      target:
        "For adults navigating a career shift, burnout, or life re-alignment",
      description: {
        intro:
          "There comes a time when the old path no longer fits. Whether you’re feeling burnt out, uncertain, or ready for something new, this package offers a reflective process to rediscover your core strengths, motivations, and what truly matters to you.",
        bullets: [
          "1-hour intro session to explore your journey, your goals, and what you’re seeking",
          "Personality, aptitude, interest and values assessments",
          "60–90 minute feedback session (within 1 month)",
        ],
        conclusion:
          "You’re not lost—you’re just in transition. Let’s uncover the path that’s right for you, with clarity and intention.",
      },
    },
  ];

  return (
    <div className="packages-section-container">
      <Spacer id={"packages"} />
      <div className="packages-header">
        <h3 className="secondary-heading">
          MY <span className="text-color">PACKAGES</span>
        </h3>
        <div className="space-border"></div>
        <p className="packages-description">
          Explore the various counselling and wellness packages designed to
          support your journey.
        </p>
      </div>
      <div className="packages-grid">
        {packagesData.map((packageItem) => (
          <div key={packageItem.id} className="package-card">
            <h4 className="package-card-heading">{packageItem.heading}</h4>
            {packageItem.target && (
              <p className="package-card-target">{packageItem.target}</p>
            )}
            {packageItem.price && (
              <p className="package-card-price">{packageItem.price}</p>
            )}
            {packageItem.description && (
              <div className="package-card-description-content">
                {packageItem.description.intro && (
                  <p className="package-card-intro">
                    {packageItem.description.intro}
                  </p>
                )}
                {packageItem.description.bullets &&
                  packageItem.description.bullets.length > 0 && (
                    <ul className="package-card-bullets">
                      {packageItem.description.bullets.map((bullet, idx) => (
                        <li key={idx} className="package-card-bullet-item">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                {packageItem.description.conclusion && (
                  <p className="package-card-conclusion">
                    {packageItem.description.conclusion}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
