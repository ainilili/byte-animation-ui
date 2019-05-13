var ffmpeg = require('ffmpeg')

try {
        var process = new ffmpeg('C:\\Users\\ainil\\Desktop\\90081130-1-6.mp4');
        process.then(function (video) {
            // Video metadata
            //console.log(video);
            console.log(video.metadata.video.resolution);
            // FFmpeg configuration
            //console.log(video.info_configuration);
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        console.log(e);
}