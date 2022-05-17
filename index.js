import 'dotenv/config'
import linebot from 'linebot'
import data from './data.js'

data.fetchData()

schedule.scheduleJob('15 13 * * *', () => {
  console.log('aaa')
  data.fetchData()
})

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  if (data.courses.length === 0) {
    event.reply('資料讀取中，請稍後在試')
  } else if (event.message.type === 'text') {
    if (event.message.text === '共通課程') {
      data.replyCourses(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動123')
})
