export const getRandomNumber = (min = 0, max = 20) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getFormatedDuration = (time) => {
  const hours = Math.floor(time);
  const minutes = time - hours * 60;

  if (hours > 0) {
    return `${hours}h&nbsp;${minutes}m`;
  }

  return `${minutes}m`;
};

export const getCommentsString = (count) => {
  return count === 1 ? `${count} comment` : `${count} comments`;
};