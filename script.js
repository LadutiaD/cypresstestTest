const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const discordWebhookUrl = 'https://discord.com/api/webhooks/1176837614196760637/jmRgAHdlSSlOMp5skXI77FXtc2umqKc_re7BX9cVBnDlB8fCXsiw_ekFuQBzV9Hy0jI1';
const mochawesomeReportPath = 'cypress/reports/html/index.html';

const sendMochawesomeReportToDiscord = async () => {
  try {
    const reportContent = fs.readFileSync(mochawesomeReportPath, 'utf-8');

    const formData = new FormData();
    formData.append('file', Buffer.from(reportContent), {
      filename: 'report.html',
    });

    await axios.post(discordWebhookUrl, formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log('Отчет отправлен успешно');
  } catch (error) {
    console.error('Ошибка в отправке отчета', error.message);
  }
};

sendMochawesomeReportToDiscord();



