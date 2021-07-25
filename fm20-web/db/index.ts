import matures from './matures.json'
import wonderkids from './wonderkids.json'
import full from './full_version.json'
import preview from './previews.json'
import clubs from './clubs.json'
import divisions from './divisions.json'
import positions from './positions.json'

export const getAll = () => {
  return preview;
}

export const getDetail = (index: number) => {
  // return JSON.parse(full)
}

export const getWonderkids = () => {
  return wonderkids;
}

export const getMature = () => {
  return matures;
}

export const getClubs = () => {
  return clubs;
}

export const getDivisions = () => {
  return divisions;
}

export const getPositions = () => {
  return positions;
}
