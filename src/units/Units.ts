import { vehicles } from "../interface"

export const filterByLevel = (valueFilter: string, data: vehicles[]) => {
    return data.filter((el) => el.level === Number(valueFilter))
  }
  export const filterByNation = (valueFilter: string, data: vehicles[]) => {
    return data.filter((el) => el.nation.name === valueFilter)
  }
  export const filterByClassShip = (valueFilter: string, data: vehicles[]) => {
    return data.filter((el) => el.type.name === valueFilter)
  }