import React from 'react'

const NewsItem = (props)=> {
    let {title, description, urlImage, urlNews, author, date, source}= props;
    return (
        <div className='h-100'>
            <div className="h-100">
                <div className="h-100">
                    <div className="card h-100 my-3">
                        <div style={{position: 'absolute', display: 'flex', right: '0', justifyContent: 'flex-end'}}>
                        <span className="badge rounded-pill bg-danger" > {source} </span>
                        </div>
                        <img src={urlImage} className="card-img-top" alt="..."/>
                            <div style={{ display: 'flex', position: 'absolute'}}>
                            </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                            <a href={urlNews} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default NewsItem