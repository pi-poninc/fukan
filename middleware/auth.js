export default ({ store, route, redirect }) => {
  if (!store.getters['auth/isLogin'] && route.name !== 'login') {
    redirect('/login')
  }

  if (store.getters['auth/isLogin'] && route.name === 'login') {
    redirect('/')
  }
}
