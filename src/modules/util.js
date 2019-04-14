const DESCRIPTIONSMALLLENGTH = 140;

export const getRandomNumber = (min = 0, max = 20) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRundomTimestamp = (start = new Date(2012, 0, 1), end = new Date())=> {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getFormatedDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  if (hours > 0) {
    return `${hours}h:&nbsp;${minutes}m`;
  }

  return `${minutes}m`;
};

export const getDescriptionString = (description) => {
  if (description.length > DESCRIPTIONSMALLLENGTH) {
    return `${description.slice(0, DESCRIPTIONSMALLLENGTH)}...`;
  }

  return description;
};

export const getCommentsString = (count) => {
  return count === 1 ? `${count} comment` : `${count} comments`;
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const getHashUrl = () => {
  const hash = window.location.hash;
  if (hash) {
    return hash;
  }

  return `#all`;
};
