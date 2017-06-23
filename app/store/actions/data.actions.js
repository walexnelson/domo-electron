import { ipcRenderer } from 'electron';

export const actions = {
  DATASET_LIST_REQUESTED: 'DATASETS:LIST',
  DATASET_LIST_RETRIEVED: 'DATASETS:LIST:SUCCESS',
  DATASET_LIST_FAILED: 'DATASETS:LIST:FAILED'
};

export function listRequested() {
  return { type: actions.DATASET_LIST_REQUESTED };
}

export function listRetrieved(res) {
  return {
    type: actions.DATASET_LIST_RETRIEVED,
    datasets: res.data ? res.data : res
  };
}

export function listFailed(error) {
  return {
    type: actions.DATASET_LIST_FAILED,
    error,
  };
}

export const getDatasetList = (sort, limit, offset) => (dispatch) => {
  dispatch(listRequested());

  ipcRenderer.send(actions.DATASET_LIST_REQUESTED, { sort, limit, offset });
  ipcRenderer.on(actions.DATASET_LIST_RETRIEVED, (event, args) => dispatch(listRetrieved(args)));
  ipcRenderer.on(actions.DATASET_LIST_FAILED, (event, err) => dispatch(listFailed(err)));
};
