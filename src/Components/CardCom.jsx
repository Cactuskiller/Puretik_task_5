import React from "react";
import sketchIcon from "../assets/sketch.png";
import pray from "../assets/pray.png";
import "../index.css";

const CardCom = ({
  previewImage,
  authorName,
  authorAvatar,
  codeCount = "25",
  downloadCount = "25",
}) => {
  return (
    <div className="card">
      <div className="card-preview">
        <div className="card-bookmark">
          <img src={sketchIcon} alt="Bookmark" className="bookmark-image" />
        </div>
        <img
          src={previewImage}
          alt="Design preview"
          className="preview-image"
        />
      </div>
      <div className="card-footer">
        <div className="author-info">
          <img src={authorAvatar} alt={authorName} className="author-avatar" />
          <span className="author">by <span className="author-name">{authorName}</span></span>
        </div>
        <div className="card-stats">
          <div className="stat-item">
            <i className="fas fa-code"></i>
            <span>{codeCount}</span>
          </div>
          <div className="stat-item">
            <img src={pray} alt="con" className="contribution-image" />
            <span>{downloadCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCom;
