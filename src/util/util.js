export function getRedirectPath ({type,avator}) {
  //根据用户信息 返回跳转地址
  let url = (type === 'tourist') ? '/tourist' : '/guide'
  if (!avator) {
    url += 'info'
  }
  return  url
}