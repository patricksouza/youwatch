import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Home() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get('/videos').then(response => {
      setVideos(response.data)
    })
  });

  return (
    <>
      <div>
        {
          videos.map(item => (
            <div classNname="row" key={item.id}>
              <div className="col-2">
                <div>
                  <h2>{item.video_title}</h2>
                </div>
                <div>
                  <video controls preload="metadata" width="422" height="253">
                    <source src={item.video_path} type="video/mp4" />
                  </video>

                </div>
                </div>
              </div>
          ))
        }
            </div>
    </>
  )

}

