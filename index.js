const axios = require('axios');

module.exports = (on, config) => {
  on('after:run', (results) => {
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1176837614196760637/jmRgAHdlSSlOMp5skXI77FXtc2umqKc_re7BX9cVBnDlB8fCXsiw_ekFuQBzV9Hy0jI1';

    const message = {
      content: `Cypress tests ${results.totalFailed > 0 ? 'failed' : 'succeeded'}. See the report: ./cypress/reports/html/index.html`,
    };

    // Отправка сообщения в Discord
    axios.post(discordWebhookUrl, message)
      .then((response) => {
        console.log('Discord message sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Failed to send Discord message:', error.message);
      });
  });
};