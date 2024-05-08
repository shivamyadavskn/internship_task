import React, { useState } from 'react';
import "./expanded.css";

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section">
      <div className="section-header" onClick={toggleExpand}>
        <span>{title}</span>
        <div className="expand-icon">{isExpanded ? '-' : '+'}</div>
      </div>
      {isExpanded && <div className="section-content">{content}</div>}
    </div>
  );
};

export default ExpandableSection;