import React from "react";
import "./ResultsPanel.css";

const ResultsPanel = (props) => (
    <div className="searchPanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Article Results</h3>
        </div>
        <div className="panel-body">
            {!props.articles.length ? <h1>No results to display</h1> :
                props.articles.map((cur, i)=> {
                    while (i < 5) {
                    return (
                        <div id={"article"+i} key={cur._id} article="article">
                            <h1>{cur.headline.main}</h1>
                            <p>{cur.pub_date}</p>
                            <p>{cur.snippet}</p>
                            <a target="_blank" href={cur.web_url}><button className="btn btn-primary">Read More</button></a>
                            <button type="submit" name="submit" className="articleSubmit btn btn-success pull-right" href={cur.web_url}>Save Article</button>
                        </div>
                    )
                }
                })
            }
        </div>
    </div>
)

export default ResultsPanel;