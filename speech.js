const speech = require('@google-cloud/speech');
const fs = require('fs');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);



const config = {
  "audioChannelCount": 2,
  "enableAutomaticPunctuation": true,
  "enableSeparateRecognitionPerChannel": true,
  "encoding": "MP3",
  "languageCode": "en-US",
  "model": "default"
};
const filepath = './clip2.mp3';
const info = {};
ffmpeg.ffprobe(filepath, (err, data) => {
  console.log(data);
});
fs.readFile(filepath, async (err, buffer) => {
  const audioBytes = buffer.toString('base64');
  const audio = {
    content: audioBytes,
  };
  if (info && info.channels) {
    config.audioChannelCount = 2;
    // config.sampleRateHertz = info.sample_rate;
  }

  const request = {
    config,
    audio,
  };

  const opts = {timeout: 15, maxRetries: 5};
  try {
    const client = new speech.SpeechClient();
    const response = await client.recognize(request, opts);

    console.log(response);
    if (response && response.results) {
      return {
        ...response,
        channels: info.channels || 1,
      };
    }
  } catch (e) {
    console.log(e);

  }
});

