import axios, { AxiosRequestConfig } from 'axios';
// 创建axios实例(默认配置)
const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});
// 拦截器
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 非白名单, 判断是否添加token
    // 只有几个页面会用到 token

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log(response);
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data) {
      if (response.data.code !== 0) {
        return Promise.reject({
          errCode: response.data.code,
          message: response.data.message,
        });
      }
      // 只要数据部分
      return response.data;
    }
    return response;
  },
  function (error) {
    // 处理HTTP错误状态码
    return Promise.reject(error.response.data);
  }
);

// 创建请求方法
// 封装不同的请求方法
export const request = <T = any>(
  method: 'get' | 'post' | 'delete' | 'put',
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any> | undefined
): Promise<T> => {
  switch (method) {
    case 'get':
      return instance.get(url, config);
    case 'post':
      return instance.post(url, data, config);
    case 'put':
      return instance.put(url, data, config);
    case 'delete':
      return instance.delete(url, config);
    default:
      throw new Error('该请求方法不被支持');
  }
};
