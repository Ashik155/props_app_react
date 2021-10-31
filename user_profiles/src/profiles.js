import React from "react";

import ExtraContent from "./Extra";

const Profiles = (props) =>{
    console.log(props)
    return (
        <div className="ui card">
        <div className="content">
          <div className="right floated meta">{props.time}</div>
          <img className="ui avatar image" src={props.pp} / > {props.name} 
        </div>
        <div className="image">
          <img src={props.post} />
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
          {props.likes}
          </span>
          <i className="comment icon"></i>
         {props.comments}
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
          
          <ExtraContent />
          </div>
        </div>
      </div>
    )
}

export default Profiles;