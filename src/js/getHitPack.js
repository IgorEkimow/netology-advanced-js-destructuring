export default function getHitPack(arr) {
  const special = [];
  arr.forEach((element) => {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = element;
    special.push({
      id,
      name,
      icon,
      description,
    });
  });

  return special;
}
