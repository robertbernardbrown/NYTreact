import React from "react";
import "./SavedPanel.css";

const SavedPanel = (props) => (
    <div className="savePanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">
            <h1>Hi</h1>
            {/* {!props.articles.length ? <h1>No results to display</h1> :
                props.articles.map((cur, i) => {
                    return (
                        <div id={"article"+i} key={cur._id} className="article">
                            <h1 name="title">{cur.headline.main}</h1>
                            <p name="date">{cur.pub_date}</p>
                            <p>{cur.snippet}</p>
                            <a name="url" target="_blank" href={cur.web_url}><button className="btn btn-primary">Read More</button></a>
                            <button data-title={cur.headline.main} data-date={cur.pub_date} data-url={cur.web_url} type="submit" name="submit" className="articleSave btn btn-success pull-right" onClick={props.saveArticle}>Save Article</button>
                        </div>
                    )
                })
            } */}
        </div>
    </div>
)

export default SavedPanel;