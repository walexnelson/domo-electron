import { actions } from '../../actions/data.actions';

const { DATASET_LIST_REQUESTED, DATASET_LIST_RETRIEVED, DATASET_LIST_FAILED } = actions;

function handleListFailed(state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.error,
  };
}

function handleListRequested(state) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleListRetrieved(state, action) {
  return {
    ...state,
    isLoading: false,
    datasets: action.datasets,
  };
}

const actionHandlers = new Map([
  [DATASET_LIST_REQUESTED, handleListRequested],
  [DATASET_LIST_RETRIEVED, handleListRetrieved],
  [DATASET_LIST_FAILED, handleListFailed],
]);

export const INITIAL_STATE = {
  datasets: [],
  isLoading: false,
};

export function dataReducer(state = INITIAL_STATE, action) {
  return (actionHandlers.has(action.type) ? actionHandlers.get(action.type)(state, action) : state);
}
