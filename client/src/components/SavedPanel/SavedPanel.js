import React from "react";
import "./SavedPanel.css";

const SavedPanel = (props) => (
    <div className="savePanel panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body">
            {!props.articles.length ? <h1>No results to display</h1> :
                props.articles.map((cur, i) => {
                    return (
                        <div>{i}</div>
                    )
                })
            }
        </div>
    </div>
)

export default SavedPanel;