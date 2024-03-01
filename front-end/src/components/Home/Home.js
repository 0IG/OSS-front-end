import { useContext } from "react";
import "./Home.scss";
// import { FirebaseAuthContext } from "../accounts/firebaseAuthProvider/FirebaseAuthProvider";
export default function Home() {
  // let firebaseAuth = useContext(FirebaseAuthContext);
  // console.log(firebaseAuth);
  return (
    <div className="home">
      <div className="introduction">
        <div className="introduction__header">WHAT IS OSSENSE?</div>
        <div className="introduction__listItems">
          <div className="introduction__listItem">
            Technique Library Using AI to help you get better quicker.
          </div>
          <div className="introduction__listItem">
            Market Place for reputable brands to showcase their gear.
          </div>
          <div className="introduction__listItem">
            Small one man project by a young developer trying to learn.
          </div>
        </div>
      </div>
      <div className="articles">
        <div className="rickson">
          <div className="rickson__article">
            <div className="rickson__img">
              <img
                src="https://www.attacktheback.com/wp-content/uploads/2019/11/rickson-gracie-bjj.jpeg"
                alt="rickson-gracie"
              ></img>
              <div className="rickson__type">Legends</div>
              <div className="rickson__header">
                Rickson Gracie 400-0 Record ?
              </div>
              <div className="rickson__readMore">Read More →</div>
            </div>
          </div>
        </div>
        <div className="tye">
          <div className="tye__article">
            <div className="tye__img">
              <img
                src="https://i.imgur.com/LPZ6NLk.jpg"
                alt="tye--ruotolo"
              ></img>
            </div>
            <div className="tye__type">Rising Stars</div>
            <div className="tye__header">
              Tye Ruotolo taking massive win against Pedro Marinho.
            </div>
            <div className="tye__readMore">Read More →</div>
          </div>
        </div>
        <div className="gordonRyan">
          <div className="gordonRyan_article">
            <div className="gordonRyan__img">
              <img
                src="https://www.flosports.tv/wp-content/uploads/2023/01/GordonRyanWNOBelt-PCClaytonJones-1280x720-1.png"
                alt="gordon--ryan"
              ></img>
            </div>
            <div className="gordonRyan__type">Champions</div>
            <div className="gordonRyan__header">
              2022 ADDC NoGi World Champ Gordon "The King" Ryan extends help to
              Marcelo Garcia following troubling news.
            </div>
            <div className="gordonRyan__readMore">Read More →</div>
          </div>
        </div>
        <div className="nickyRyan">
          <div className="nickyRyan_article">
            <div className="nickyRyan__img">
              <img
                src="https://images.tapology.com/letterbox_images/209766/default/Capture.JPG?1549068455"
                alt="nicky--ryan"
              ></img>
            </div>
            <div className="nickyRyan__type">Champions</div>
            <div className="nickyRyan__header">
              Young 66kg Champ Nicky Ryan making a return to competition.
            </div>
            <div className="nickyRyan__readMore">Read More →</div>
          </div>
        </div>
        <div className="craigJones"></div>
        <div className="nickyRod"></div>
      </div>
    </div>
  );
}

// https://images.tapology.com/letterbox_images/209766/default/Capture.JPG?1549068455
