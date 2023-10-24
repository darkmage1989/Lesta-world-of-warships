import { vehicles } from "../interface";

export const filterByLevel = (valueFilter: string, data: vehicles[]) => {
  return data.filter((ship) => ship.level === Number(valueFilter));
};
export const filterByNation = (valueFilter: string, data: vehicles[]) => {
  return data.filter((ship) => ship.nation.name === valueFilter);
};
export const filterByClassShip = (valueFilter: string, data: vehicles[]) => {
  return data.filter((ship) => ship.type.name === valueFilter);
};


