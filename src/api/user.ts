import request from '../utils/request'
import { IRoot } from '../model/rootModel'
import { IUser } from '../model/userModel'

const api = {
  info: '/userInfo'
}

// TODO: 这里怎么定义
export const fetchUser = () =>
  request.request<IUser>({
    url: api.info,
    method: 'get'
  })