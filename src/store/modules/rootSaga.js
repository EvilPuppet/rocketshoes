import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* root() {
  return yield all([cart]);
}
