import moment from "moment";
import Reaction from '../../data/reactions';

const getCommentElement = (comment) => {
  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">${Reaction[comment.emotion]}</span>
    <div>
      <p class="film-details__comment-text">${comment.comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comment.author}</span>
        <span class="film-details__comment-day">${moment(moment(comment.date).format(`YYYYMMDDkkmmss`), `YYYYMMDDkkmmss`).fromNow()}</span>
      </p>
    </div>
  </li>`.trim();
};

export default (comments) => {
  let commentElement = ``;

  for (const comment of comments) {
    commentElement += getCommentElement(comment);
  }

  return commentElement;
};
