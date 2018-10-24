export const asArray = ({ recipes }) => (
  // Object.keys(recipes).map(key => recipes[key])
  Object.values(recipes)
);