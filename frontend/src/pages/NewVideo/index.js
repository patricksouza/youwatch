import React from 'react'

export default function Videos() {

  return (
    <>
      <div className="container py-5">
        <form action="http://localhost:3333/videos/new" method="post" enctype="multipart/form-data">
          <div className="form-row">
            <div className="col mb-2">
              <label for="">Título do vídeo</label>
              <input className="form-control" type="text" name="title" required="true" />
            </div>
            <div className="col mb-2">
              <label for="">Gênero do vídeo</label>
              <select className="form-control" name="categorie" required="true" >
                <option>Terror</option>
                <option>Comédia</option>
                <option>Drama</option>
                <option>Ação</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="col mb-2">
              <input type="file" name="video" required="true" />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input className="btn btn-block btn-sm btn-outline-success" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  )

}