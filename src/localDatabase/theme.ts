// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const save = (themeStatus) => {
  localStorage.setItem('darkTheme', String(themeStatus === true))
}
const load = () => {
  return localStorage.getItem('darkTheme') === 'true'
}
const clear = () => {
  localStorage.removeItem('darkTheme')
}

export default {
  save, load, clear
}