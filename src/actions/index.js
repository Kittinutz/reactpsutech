export const FILLTERING = 'filltering'

export function filtering(id) {
  return (dispatch) => {
    dispatch({
      type: FILLTERING,
      payload: id
    })
  }
}
