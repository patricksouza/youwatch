import React from 'react'

export default function Videos() {

  return (
    <>
      <div className="container">
        <form action="http://localhost:3333/videos/new" method="post" enctype="multipart/form-data">
          <input type="text" name="title" />
          <select name="categorie">
            <option>Terror</option>
            <option>Comédia</option>
            <option>Drama</option>
            <option>Ação</option>
          </select>
          <input type="file" name="video" />
          <input type="submit" />
        </form>
      </div>
    </>
  )

}

