import { WEAPON_LIST, MATERIAL_LIST, GEAR_LIST } from './constants';

export {
  getRand,
  sleep,
  add,
  smallest,
  biggest,
  randomGold,
  getWeapon,
  getArmor,
};

// random whole number generator, inclusive on min and max
function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function add(a, b) {
  // add two coordinates
  return { row: a.row + b.row, col: a.col + b.col };
}

function smallest(a, b) {
  if (a > b) return b;
  else return a;
}

function biggest(a, b) {
  if (a > b) return a;
  else return b;
}

// given monster's prototype gold, returns random gold+/-gold
function randomGold(gold) {
  let sign = getRand(1, 2) === 2 ? 1 : -1;
  return Math.round(gold + (sign * gold) / getRand(1, 10));
}

function getWeapon(tools, level = 0) {
  //getting weapon for monster, else getting weapon for market
  // level = $level; //TODO: ?????
  let num = getRand(1, smallest(10, 1 + Math.round(level / 1.5))); //limits weapons available based on player level
  if (!tools) {
    // non tool carrying monster
    return WEAPON_LIST[0];
  } else {
    let tempArray = WEAPON_LIST.filter(item => item.rarity <= num);
    let num2 = getRand(0, tempArray.length - 1);
    return tempArray.filter((item, index) => index === num2)[0];
  }
}

function getArmor(tools, level = 0) {
  if (!tools) {
    // non tool carrying monster
    return { name: 'no armor', defense: 0 };
  } else {
    let mNum = getRand(0, smallest(6, Math.floor(level / 1.5))); //limits material available based on player level
    //console.log(mNum)
    let materials = MATERIAL_LIST.filter(item => item.rarity <= mNum);
    //console.log(material)
    mNum = getRand(0, materials.length - 1);
    let mtrl = materials.filter((item, index) => index === mNum)[0];
    //console.log(material.material)

    let aNum = getRand(0, GEAR_LIST.length - 2); //get index of head, torso, arms or feet (exclude rings)
    //console.log(aNum)
    let bodyParts = GEAR_LIST.filter((part, index) => index === aNum)[0]; //get array or head, torso, arms or feet
    let bP;
    //console.log(bodyPart)
    if (mtrl.material === 'leather') {
      // if material is leather, get most common gear
      bP = bodyParts[0];
    } else {
      aNum = getRand(3, smallest(10, level)); //limits piece available based on player level
      //console.log(aNum);
      bP = aNum === 10 ? bodyParts[2] : bodyParts[1];
    }
    return Object.assign({}, mtrl, bP, {
      rarity: mtrl.rarity + bP.rarity,
      defense: mtrl.defense + bP.defense,
    });
  }
}
