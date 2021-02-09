const ffmpeg= require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path

ffmpeg.setFfmpegPath(ffmpegPath);

ffmpeg('C:/Users/mjfc37/Documents/Motorola/VideoProccess/VideoProccessing/assets/sample1.mp4')
  .setStartTime('00:01:00')
  .setDuration('10')
  .output('C:/Users/mjfc37/Documents/Motorola/VideoProccess/VideoProccessing/assets/sample1out2.mp4')
  .on('end', function(err) {
    if(!err) { console.log('conversion Done') }
  })
  .on('error', function(err){
    console.log('error: ', err)
  })
  .run()