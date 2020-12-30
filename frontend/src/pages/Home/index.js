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
    <div>
      {
        videos.map(item => (
          <div key={item.id}>
            <div>
              <h2>{item.video_title}</h2>
            </div>
            <div>
              <video width="320" height="240" controls>
                <source src={item.video_path} type={item.video_type} />
              </video>
            </div>
          </div>
        ))
      }
    </div>
  )

}

