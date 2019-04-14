const DESCRIPTION_SMALL_LENGTH = 140;

export const getFormatedDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;

  if (hours > 0) {
    return `${hours}h:&nbsp;${minutes}m`;
  }

  return `${minutes}m`;
};

export const getDescriptionString = (description) => {
  if (description.length > DESCRIPTION_SMALL_LENGTH) {
    return `${description.slice(0, DESCRIPTION_SMALL_LENGTH)}...`;
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
