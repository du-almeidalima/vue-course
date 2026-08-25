export const getRandomMinMaxValue = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Normal Attack
export const getPlayerAttackValue = () => {
  return getRandomMinMaxValue(5, 12);
};

export const getMonsterAttackValue = () => {
  return getRandomMinMaxValue(8, 15);
};

// Special Attack
export const getPlayerSpecialAttackValue = () => {
  return getRandomMinMaxValue(10, 25);
};

// Heal
export const getPlayerHealValue = () => {
  return getRandomMinMaxValue(8, 20);
};


