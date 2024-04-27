import { useEffect, useState } from "react";
import { Register } from "../../Api-tools/Api-tools";
import { useParams } from "react-router-dom";

const RegisteringForAClass = () => {
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const { userId } = useParams(null);
  const { classId } = useParams(null);

  const registerTo = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const resp = await Register(userId, classId);

      console.log(resp);
      return resp.data;
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  useEffect(() => {
    registerTo();
  }, []);

  return (
    <section className="events">
      <h1 className="events__title">Events</h1>
    </section>
  );
};
