import React from 'react'

export default function Videos() {

  return (
    <div>
      <form action="http://localhost:3333/videos/new" method="post" enctype="multipart/form-data">
        <input type="text" name="title"/>
        <input type="file" name="video" />
        <input type="submit"/>
      </form>
    </div>
  )

}

