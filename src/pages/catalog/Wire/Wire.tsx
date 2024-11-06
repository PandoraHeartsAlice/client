import axios from "axios";
import { useState, useEffect } from "react";
import { WireCard } from "../../../components/Cards/WireCard/WireCard";
import style from "./Wire.module.css";

import { DataStructureCoils } from "../../../interface/DataStructureCoils";

export const Wire = () => {
  const [wires, setWires] = useState<any[]>([]);
  const [coils, setCoils] = useState<DataStructureCoils>({
    diameter_coils: [],
    diameter_wire: [],
  });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    axios
      .get(`${apiUrl}/wires`)
      .then((response) => {
        console.log("Ответ сервера:", response.data);
        if (Array.isArray(response.data)) {
          setWires(response.data);
        } else {
          console.error(
            "Полученные данные не являются массивом:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных о проволоке:", error);
      });

    axios
      .get(`${apiUrl}/coils`)
      .then((response) => {
        setCoils(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных о катушках:", error);
      });
  }, []);

  return (
    <div className={style.cont}>
      <h2 className="visually-hidden">
        Проволока для ЭЭ проволочно-вырезных станков
      </h2>
      <div className={style.container}>
        <div className={style.cardContainer}>
          {wires.map((wire, index) => (
            <WireCard key={index} wire={wire} coilsData={coils} />
          ))}
        </div>
      </div>
    </div>
  );
};
