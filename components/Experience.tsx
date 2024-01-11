import React from "react";

interface ExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string;
}

export const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  date,
  description,
}) => {
  return (
    <div>
      <h3>
        {title} - {company} ({date})
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Experience;
