const ffmpeg= require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path

ffmpeg.setFfmpegPath(ffmpegPath);

const trimVideo=(path,name,newName,startTime,endTime)=>{
    ffmpeg(path+name+'.mp4')
    .setStartTime(startTime)
    .setDuration(endTime)
    .output(path+name+newName+'.mp4')
    .on('end', function(err) {
        if(!err) { console.log('conversion Done') }
    })
    .on('error', function(err){
        console.log('error: ', err)
    })
    .run()
}

trimVideo('C:/Users/mjfc37/Documents/Motorola/VideoProccess/VideoProccessing/assets/','sample1','sample1out3',100,10);
