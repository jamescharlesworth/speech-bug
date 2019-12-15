// const stream = require('stream');
const { promisify } = require('util');
const fs = require('fs');
const got = require('got');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

// const pipeline = promisify(stream.pipeline);

const uri = 'http://traffic.libsyn.com/joeroganexp/p1400.mp3?dest-id=19997';
const command = ffmpeg(got.stream(uri));
command
  .seek(0)
  .duration(5)
  .audioBitrate(128)
  .format('mp3')
  .on('error', async (err, stdout, stderr) => {
    console.log(`an error happened: ${err.message}`);
    console.log(`ffmpeg stdout: ${stdout}`);
    console.log(`ffmpeg stderr: ${stderr}`);
    throw new Error(stderr);
  })
  .on('stderr', (stderrLine) => {
    console.log('Stderr output: ' + stderrLine);
  })
  .on('end', function(stdout, stderr) {
    console.log('Transcoding succeeded !');
  })
  .output('./clip2.mp3')
  .run();

