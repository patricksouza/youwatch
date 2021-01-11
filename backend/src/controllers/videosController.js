const connection = require('../database/connection');


var randtoken = require('rand-token');

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
        var video_name = randtoken.generate(16);
        //var video_name = ((request.files.video.name).split('.')[0]) + token;
        var video_title = request.body.title;
        var video_categorie = request.body.categorie;
        var filename_video = request.files.video.name;

        var video_path_local = `../uploads/${filename_video}`;
        var video_path_mp4 = `../uploads/${video_name}.mp4`;
        var video_path = `http://localhost:3333/uploads/${video_name}.mp4`;



        if (!request.files || Object.keys(request.files).length === 0) {
            console.log(err);
        }

        let video_file = request.files.video;
        video_file.mv(video_path_local, (err) => {
            if (err) console.log(err);
        });

        try {
            console.log({ video_title, video_path, video_categorie })
            ffmpeg(video_path_local)
                .videoCodec('libx264')
                .audioCodec('libmp3lame')
                .inputFPS(29.7)
                .inputOption('-c:a aac')
                .size('320x240')
                .on('error', function (err) {
                    console.log('Err: ' + err.message);
                })
                .on('end', async () => {
                    var res = await connection('videos').insert({ video_title, video_path, video_categorie });
                    return res;
                })
                .save(video_path_mp4);
            return response.redirect('http://localhost:3000/');
        } catch (err) {
            console.log(err);
            return response.json(err.name);
        }
    }

}