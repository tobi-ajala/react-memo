import { LIST_IDEAS, ADD_IDEA, REMOVE_IDEA, EDIT_IDEA } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case LIST_IDEAS:
      return action.ideas;
    case ADD_IDEA:
      return [ ...state, action.newIdea ];
    case REMOVE_IDEA:
      return state.filter(idea => idea.id != action.newIdea.id);
    case EDIT_IDEA:
      return [
        ...state.filter(idea => idea.id < action.newIdea.id),
        action.newIdea,
        ...state.filter(idea => idea.id > action.newIdea.id)
      ];
    default:
      return state;
  }
};
