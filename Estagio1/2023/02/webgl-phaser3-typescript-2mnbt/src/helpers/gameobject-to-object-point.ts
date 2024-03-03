export const gameObjectsToObjectPoints = (gameObjects: unknown[]): ObjectPoint[] => {
  return gameObjects.map((gameObject) => gameObject as ObjectPoint);
};
