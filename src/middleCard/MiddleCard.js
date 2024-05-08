import React from "react";
import "./middleCard.css";
import ExpandableSection from "../expandedCard/expanded";

const MiddleCard = () => {
  const sections = [
    {
      title: "Do you offer freelancers?",
      content: "Yes, we offer freelancers for various projects.",
    },
    {
      title:
        "What's the guarantee that I will be satisfied with the hired talent?",
      content: "We have a rigorous vetting process to ensure quality talent.",
    },
    {
      title: "Can I hire multiple talents at once?",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
      content:
        "We have a dedicated support team to assist with any issues or concerns.",
    },
    {
      title: "Why should I not go to an agency directly?",
      content:
        "Our platform offers a more flexible and cost-effective solution compared to agencies.",
    },
    {
      title: "Who can help me pick a right skillset and duration for me?",
      content:
        "Our team of experts can guide you in selecting the right talent and project duration.",
    },
  ];
  return (
    <div className="middle">
      <div className="MiddleClassCon">
        <div className="middleFir">
          <div className="faq">
            <p>What’s on your mind</p>
            <div>Ask Questions</div>
          </div>
          <img src="./uploads/Union.png" alt="notfound" className="arrow" />
        </div>
        <div className="container">
          {sections.map((section, index) => (
            <ExpandableSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleCard;
