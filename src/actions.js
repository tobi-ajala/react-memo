import { dispatch } from 'react-redux';
import services from './services';

export const LIST_IDEAS = 'LIST_IDEAS';
export const ADD_IDEA = 'ADD_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';
export const EDIT_IDEA = 'EDIT_IDEA';

const listIdeas = (ideas) => ({
  type: LIST_IDEAS,
  ideas
});

const addIdea = (newIdea) => ({
  type: ADD_IDEA,
  newIdea
});

const removeIdea = (newIdea) => ({
  type: REMOVE_IDEA,
  newIdea
});

const editIdea = (newIdea) => ({
  type: EDIT_IDEA,
  newIdea
});

export const getIdeas = () => (dispatch) => dispatch(listIdeas(services.list()));

export const createIdea = () => (dispatch) => dispatch(addIdea(services.create()));

export const deleteIdea = (ideaId) => (dispatch) => dispatch(removeIdea(services.delete(ideaId)));

export const updateIdea = (editedIdea) => (dispatch) => dispatch(editIdea(services.update(editedIdea)));
