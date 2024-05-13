import { useEffect, useState } from "react";
import { getClasses, getSigleClass } from "../../Api-tools/Api-tools";
import ClassesList from "../../components/ClassesList/ClassesList";
import "./ClassesPage.scss";
import ClassesDetails from "../../components/ClassesDetails/ClassesDetails";
import { Link, useParams } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";

const ClassesPage = () => {
  const [classesList, setClassesList] = useState([]);

  useEffect(() => {
    const getClassesData = async () => {
      try {
        const classes = await getClasses();
        setClassesList(classes);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    getClassesData();
  }, []);

  return (
    <section className="classes">
      <div className="classes__header">
        <h1 className="classes__title">Classes available</h1>
        <Link to={"/PostNewClass"}>
          <Buttons />
        </Link>
      </div>
      <ClassesList list={classesList} />
    </section>
  );
};

export default ClassesPage;
//
