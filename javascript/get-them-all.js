export const getArchitects = () => {
  const architects = Array.from(document.querySelectorAll('a'));
  const nonArchitects = Array.from(document.querySelectorAll('span'));
  return [architects, nonArchitects];
};

export const getClassical = () => {
  const classical = Array.from(document.querySelectorAll('a.classical'));
  const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'));
  return [classical, nonClassical];
};

export const getActive = () => {
  const activeClassical = Array.from(document.querySelectorAll('a.classical.active'));
  const nonActiveClassical = Array.from(document.querySelectorAll('a.classical:not(.active)'));
  return [activeClassical, nonActiveClassical];
};

export const getBonannoPisano = () => {
  const bonannoPisano = document.getElementById('BonannoPisano');
  const activeClassicalOthers = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
  return [bonannoPisano, activeClassicalOthers];
};
