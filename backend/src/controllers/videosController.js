const connection = require('../database/connection');
const fs = require('fs');

const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

module.exports = {

    async index(request, response) {
        const videos = await connection('videos').select('*');
        return response.json(videos);
    },

    async create(request, response) {
        var video_name = (request.files.video.name).split('.')[0];

        var video_title = request.body.title;
        var filename_video = request.files.video.name;

        var video_path_local = `../uploads/${filename_video}`;
        var video_path = `http://localhost:3333/uploads/${filename_video}`;


        if (!request.files || Object.keys(request.files).length === 0) {
            console.log(err);
        }

           let video_file = request.files.video;
           video_file.mv(video_path_local, (err) => {
               if (err) console.log(err);
           });

        var command = ffmpeg(video_path_local)
            .videoCodec('libx264')
            .videoBitrate('1000k', true)
            .audioCodec('libmp3lame')
            .size('320x240')
            .on('error', function (err) {
                console.log('An error occurred: ' + err.message);
            })
            .on('end', function () {
                console.log('Processing finished !');
            })
            .save(`../uploads/${video_name}.mp4`);

        try {
            if (fs.existsSync(video_path_local)) {
                var video_type = request.files.video.mimetype;
                var res = await connection('videos').insert({ video_title, video_path, video_type });
                console.log(res);
            }
        } catch (err) {
            console.log(err);
        }

        return response.json(res);
    }



}