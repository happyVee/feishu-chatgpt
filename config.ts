export default {
  // TODO: 可置于数据库中
  app: {
    // key 代表你飞书应用的唯一标识，在下边飞书机器人事件订阅的前缀中会被使用到
    'chatgpt': {
      // 填入每一个飞书机器人应用的 appi_id/app_secret
      appId: process.env.APP_ID,
      appSecret: process.env.APP_SECRET,
      prompt: ''
    }
  },

  baseURL: process.env.BASE_URL || 'https://api.openai.com',
  apiKey: (process.env.OPEN_API_KEY ?? '').split(','),
  model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
}
