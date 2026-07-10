import styles from "../styles/Education.module.scss";

import useEducation from "../../../hooks/useEducation";

import EducationCard from "./EducationCard";

function EducationGrid() {
  const { education, loading } = useEducation();

  if (loading) return null;

  return (
    <div className={styles.grid}>
      {education.map((item) => (
        <EducationCard
          key={item._id}
          education={item}
        />
      ))}
    </div>
  );
}

export default EducationGrid;