import axios from "axios";
import { useState, useEffect } from "react";
import { GuideCard } from "../../../components/Cards/GuidesCard/GuideCard.tsx";
import { DataStructureGuides } from "../../../interface/DataStructureGuides.ts";
import style from "./Guides.module.css";

export const Guides = () => {
  const [guides, setGuides] = useState<DataStructureGuides[]>([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/guides`)
      .then((response) => {
        // Предполагается, что ответ содержит массив направляющих в свойстве data
        setGuides(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных о направляющих:", error);
      });
  }, []);

  return (
    <div className={style.container}>
      <section className={style.guides}>
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </section>
    </div>
  );
};
