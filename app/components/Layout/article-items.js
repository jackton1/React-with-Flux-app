import React from 'react';
let isoDate = require('iso-date');

export default class ArticleItem extends React.Component {

    render() {
        let publishedAt = this.props.item.publishedAt;
        let author = this.props.item.author;
        let image;
        let imageSource = this.props.item.urlToImage;
        if (publishedAt !== null){
            publishedAt = 'Published: ' + isoDate(this.props.item.publishedAt)
        }else{
            publishedAt = ''
        }
        if (imageSource !== null && imageSource !== undefined && imageSource !== ''){
            image = [<img key={this.props.item.url}  className="article-image" src={imageSource}
                          style={{height: '320px', width: '560px'}}/> ]
        }
        if (author !== null && author !== ''){
            author = 'Author: ' + author
        }


        return (
            <article>
                <div className="col-lg-12">
                    <h2><a href={this.props.item.url} target="_blank">{this.props.item.title}</a></h2>
                    {image}
                    <h3>{this.props.item.description}</h3>
                    <h4>{author}</h4>
                    <h5>{publishedAt}</h5>
                </div>

            </article>
        )
    }

}