import React from 'react';
let isoDate = require('iso-date');

export default class ArticleItem extends React.Component {

    render() {
        let publishedAt = this.props.item.publishedAt;
        let image;
        let imageSource = this.props.item.urlToImage;
        if (publishedAt !== null){
            publishedAt = isoDate(this.props.item.publishedAt)
        }else{
            publishedAt = ''
        }
        if (imageSource !== null && imageSource !== undefined && imageSource !== ''){
            image = [<img key={this.props.item.url}  className="article-image" src={imageSource}
                          style={{height: '320px', width: '560px'}}/> ]
        }
        return (
            <article>
                <div className="col-lg-12">
                    <h2><a href={this.props.item.url}>{this.props.item.title}</a></h2>
                    {image}
                    <h3>Description: {this.props.item.description}</h3>
                    <h4>Author: {this.props.item.author}</h4>
                    <h5>Published: {publishedAt}</h5>
                </div>

            </article>
        )
    }

}