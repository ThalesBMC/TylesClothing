import { createSelector } from "reselect";
const selectSuccess = (state) => state.success;

export const selectSuccessPayment = createSelector(
    [selectSuccess],
    (success) => success.hidden
  );
  