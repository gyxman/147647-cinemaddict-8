import moment from "moment";

const getCommentElement = (comment) => {
  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">${comment.reaction}</span>
    <div>
      <p class="film-details__comment-text">${comment.text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${moment(comment.date, `YYYYMMDD`).fromNow()}</span>
      </p>
    </div>
  </li>`;
};

export default (comments) => {
  let commentElement = ``;
  for (const comment of comments) {
    commentElement += getCommentElement(comment);
  }

  return commentElement;
};
