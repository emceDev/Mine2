const pass = "minecraft123";

const version = "1.20.1";

const token =
  "ODMzNjcxNjE0MzY0NjQ3NDM0.GWfYbs.FRso2IYOneIAS7uH3Jssv3OYAnz3sXy_v1OJb4";
const channelId = "833669360069509160";

const safeMovements = {
  allowSprinting: false,
  allowParkour: false,
  canDig: true,
  allow1by1towers: false,
  maxDropDown: 2,
  blocksCantBreak: new Set([9, 8, 4, 46]),
};
const fastMovemets = {
  allowSprinting: true,
  walkSpeed: 5,
  allowParkour: true,
  canDig: true,
  allow1by1towers: false,
  maxDropDown: 4,
  blocksCantBreak: new Set([9, 8, 4, 46]),
};
const port = 5555;
const host = "127.0.0.1";
const username = "Berserker1231";
const cutPoint = { x: 88, y: -31, z: 112 };
const tossingPoint = { x: 88, y: -60, z: 112 };
const startC = { x: 88, y: -60, z: 116 };
const endC = { x: 89, y: -60, z: 117 };

module.exports = {
  username,
  pass,
  host,
  port,
  version,
  tossingPoint,
  token,
  channelId,
  cutPoint,
  startC,
  endC,
  safeMovements,
  fastMovemets,
};
