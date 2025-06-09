import React from "react";
import "./css/PsychometricAssessmentSection.css"; // Component specific styles

/**
 * PsychometricAssessmentSection component displays information about
 * the psychometric assessment package offered, including its steps and cost.
 */
const PsychometricAssessmentSection = () => {
  return (
    <div className="psychometric-assessment-section-container">
      {/* Left Section: "The First Step" block with image placeholders */}
      <div className="first-step-block">
        <h3 className="secondary-heading">
          The <span className="text-color">First Step</span>
        </h3>
        <div className="space-border"></div> {/* Global utility border */}
        <div className="image-grid">
          {/* Psychometric image item */}
          <div className="image-item">
            <div className="placeholder-image psychometric-image">
              {/* Optional: Add SVG icon or text here */}
            </div>
            <p className="image-label">Psychometric</p>
          </div>
          {/* Assessments image item */}
          <div className="image-item">
            <div className="placeholder-image assessments-image">
              {/* Optional: Add SVG icon or text here */}
            </div>
            <p className="image-label">Assessments</p>
          </div>
        </div>
      </div>

      {/* Right Section: Subject Choice Psychometric Package details */}
      <div className="psychometric-package-block">
        <h3 className="secondary-heading">
          Subject Choice
          <span className="text-color"> Psychometric Package</span>
        </h3>
        <div className="space-border"></div> {/* Global utility border */}
        <p className="package-price">R 2 000</p>
        <p className="sub-heading">Includes:</p>{" "}
        {/* Using global sub-heading class */}
        <ol className="package-includes-list">
          {" "}
          {/* Changed from ol to ul to match visual (bullets) */}
          <li>40-minute introduction session to ease in and set goals</li>
          <li>Assessment Battery</li>
          <li>Assessment Day</li>
          <li>
            A brief, meaningful report with subject &amp; study suggestions
          </li>
          <li>1-hour feedback session</li>
        </ol>
        <p className="package-description">
          Sometimes the hardest part is simply knowing where to begin. This
          package supports young people as they take their first steps into
          understanding themselves—who they are, what they enjoy, and where they
          might be headed.
        </p>
      </div>
    </div>
  );
};

export default PsychometricAssessmentSection;
