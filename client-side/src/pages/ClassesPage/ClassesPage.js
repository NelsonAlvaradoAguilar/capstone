import { useEffect, useState } from "react";
import { getClasses, getSigleClass } from "../../Api-tools/Api-tools";
import ClassesList from "../../components/ClassesList/ClassesList";
import "./ClassesPage.scss";
import ClassesDetails from "../../components/ClassesDetails/ClassesDetails";
import { useParams } from "react-router-dom";

const ClassesPage = () => {
  const { classesId } = useParams();
  const [classesList, setClassesList] = useState([]);
  const [singleClass, setSingleClass] = useState({});

  useEffect(() => {
    const getClassesList = async () => {
      const classes = await getClasses();
      console.log(classes);
      setClassesList(classes);
      console.log(classesList);
    };
    const getClass = async () => {
      const resp = await getSigleClass(classesId);
      setSingleClass(resp);
    };

    getClassesList();
    getClass();
  }, [classesId]);

  return (
    <section className="classes">
      {classesId && <ClassesDetails classes={singleClass} />}
      <ClassesList list={classesList} />
    </section>
  );
};

export default ClassesPage;
//
