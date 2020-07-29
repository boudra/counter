export function logOut(dispatch) {
  fetch("/logout").then(() => {
    dispatch({type: "LOG_OUT"});
  });
}
