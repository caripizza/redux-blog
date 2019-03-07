import { getComment, getComments } from '../services/blogApiServices';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = () => ({
  type: FETCH_COMMENTS,
  payload: getComments()
});

export const FETCH_COMMENT = 'FETCH_COMMENT';
export const fetchComment = commentId => ({
  type: FETCH_COMMENTS,
  payload: getComment(commentId)
});