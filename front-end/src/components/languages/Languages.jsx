import React from "react";
import "./Languages.scss";
export default function Languages() {
  const languages = ["ENGLISH", "PORTUGUÊS", "日本語"];
  return (
    <div className="languages">
      <div className="languages__container">
        {languages.map((lang) => {
          return (
            <button key={lang} className="languages__lang">
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
}
