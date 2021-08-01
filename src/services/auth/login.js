/**
 * @param email {string}
 * @param password {string}
 * @return {Promise<string>}
 */
export const loginService = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('this is token')
    }, 0)
  })
};
