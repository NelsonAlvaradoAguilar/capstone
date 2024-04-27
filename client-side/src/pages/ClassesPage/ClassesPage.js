import { useEffect, useState } from "react";
import { getClasses, getSigleClass } from "../../Api-tools/Api-tools";
import ClassesList from "../../components/ClassesList/ClassesList";
import "./ClassesPage.scss";
import ClassesDetails from "../../components/ClassesDetails/ClassesDetails";
import { useParams } from "react-router-dom";

const ClassesPage = () => {
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    const getClassesData = async () => {
      try {
        const classes = await getClasses();
        console.log(classes);
        setClassesList(classes);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    getClassesData();
  }, []);

  return (
    <section className="classes">
      <ClassesList list={classesList} />
    </section>
  );
};

export default ClassesPage;
//
