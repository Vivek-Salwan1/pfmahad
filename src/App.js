import { useEffect, useRef, useState } from 'react';
import './App.css';
import logo from './logoPF.png'
import trophyVideo from './ftrophy.webm'
import Tabs from './componants/Tabs';
import gCard1Img from './images/gallerySlider/g1.png'
import gCard2Img from './images/gallerySlider/g2.png'
import fLogo from './images/fLogo.png'
import loginImg from './images/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [state, setState] = useState(0);
  const [division, setDivision] = useState(0);
  const [district, setDistrict] = useState(0);
  const [taluka, setTaluka] = useState(0);


  const stageRef = useRef(null);

  useEffect(() => {
    let interval;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          interval = setInterval(() => {
            if (state < 1) {
              setState(prevNumber => prevNumber + 1);
            } else if (division < 6) {
              setDivision(prevNumber => prevNumber + 1);
            } else if (district < 36) {
              setDistrict(prevNumber => prevNumber + 1);
            } else if (taluka < 358) {
              setTaluka(prevNumber => prevNumber + 1);
            } else {
              clearInterval(interval);
            }
          }, 10);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (stageRef.current) {
      observer.observe(stageRef.current);
    }

    return () => {
      if (stageRef.current) {
        observer.unobserve(stageRef.current);
      }
      clearInterval(interval);
    };
  }, [state, division, district, taluka]);

  useEffect(() => {
    const video = document.getElementById('videoPlayer');
    video.addEventListener('loadeddata', () => {
      setTimeout(() => {
        video.controls = false;
      }, 2000);
    });
  }, []);



  return (
    <>
      <div className="allSections">
        <div className="section1">

          <div className="newsBar">

            <p>Registrations probably open from November 2024</p>
          </div><br />

          <div className="header">
            <div className="logoSection">
              <div className="logo">

                <img src={logo} alt="logo" />

              </div>
              <div className="fName">
                <h3>PRUTHVI FOUNDATION</h3>
                <p>Turning Vision into Victory</p>
              </div>
            </div>

            <div className="navBar">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Gallery</li>
                <li>Info</li>
                <li>Result</li>
              </ul>

            </div>
            <div className="loginSection">
              <img src={loginImg} alt="" srcset="" />
            </div>
          </div><br />
          <div className="tophySection">
            <div className="fSection">
              <div className="fData">
                <h2 className='for'>FOR THE FIRST TIME EVER</h2>
                <h1 className='the'>THE</h1>
                <h1 className='best'>BEST</h1>
                <h1 className='year'>2024-25</h1>
              </div>
            </div>
            <div className="sSection">
              <video id="videoPlayer" src={trophyVideo} type='gif/' autoPlay muted loop></video>
              {/* < img src={gifTrophy} alt="GIF Image" /> */}

            </div>
            <div className="tSection">
              <div className="tData">
                <h1 className='st'>STUDENT</h1>
                <h1 className='aw'>AWARD</h1>
                <h1 className='mh'>MAHARASHTRA</h1>
              </div>

            </div>

          </div>

          {/* STAGE */}
          <div className="stage" ref={stageRef}>
            <div className="stageContent">
              <div className="state">
                <span>{state}</span>   <br />
                State
              </div>
              <div className="division">
                {division} <br />
                Division
              </div>
              <div className="district">
                {district} <br />
                District
              </div>
              <div className="taluka">
                {taluka} <br />
                Taluka
              </div>

            </div>
          </div>
        </div> <br /><br /><br />

        <div className="section2">
          <Tabs />

        </div><br /><br /><br />

        <div className="sponsers">
          <h1>SPONSORS</h1>
        </div><br /><br />

        <div className="shortPara">

          <p>In this era of competition, a student is generally judged by her/his academic scores. Students who secure higher grades in 10th and 12th board exams or achieve great heights in a particular field are honoured in our society. But what about the all-round students who probably score average marks but are multi-talented?</p>
          <button>Continue</button>
        </div>

        {/* FEEDBACK SECTION */}
        <div className="feedbackQ">
          <div className="queAnsSection">
            <p>This questionnaire is only for review purpose. Answering these questions does not enroll you in the competition and does not expose your identity.</p>
            <div className="queAns">
              <div className="q1">
                <q>1. What do you think of the competition?</q><br />
                <span>a. Competition will help the students boost their self-confidence.</span><br />
                <span>b. Not so necessary for the students</span><br />
              </div><br />

              <div className="q2">
                <q>2. Would you like to participate? / recommend to the students?</q><br />
                <span>a. Yes</span><br />
                <span>b. No</span><br />
              </div>
            </div>

          </div>

        </div><br /><br /><br /><br />

        {/* GALLERY SECTION */}
        <div className="gAll">
        <div className="gallerySection">
           <p className='gName'>GALLERY</p>
          <div className="gCards">

            <div className='gCard'>
              <div className="gCardPart1">
                <img src={gCard1Img} alt="" srcset="" />
              </div>
              <div className="gCardPart2">
                <p>Watch our first annoucement</p>
              </div>
            </div>

            <div className='gCard'>
              <div className="gCardPart1">
                <img src={gCard2Img} alt="" srcset="" />
              </div>
              <div className="gCardPart2">

                <p>Sample certificate which will be given to the winners and participants</p>
              </div>
            </div>

            <div className='gCard'>
              <div className="gCardPart1">
                <img src={gCard1Img} alt="" srcset="" />
              </div>
              <div className="gCardPart2">
                <p>Glimple of the latest student</p>
              </div>
            </div>

          </div>

        </div>
        </div>

        {/* FOOTER SECTION */}

        <div className="footerSection">
          <div className="fPart1">

            <div className="fCol1">
              <div className="fCol1Data">
                <h1>CONTACT US</h1><br />
                <span>Contact no : 9637519217</span>
                <span>Email : pruthviFoundation@gmail.com</span>
                <span>Address : Raigad, Mahad - 402301</span><br />

                <div className="socialMLinks">


                <i> <FontAwesomeIcon icon={faInstagram} size='2x'/> </i> 
                <i>  <FontAwesomeIcon icon={faFacebook} size='2x'/> </i>
                <i>  <FontAwesomeIcon icon={faYoutube}  size='2x'/> </i>

                </div>
              </div>
            </div>

            <div className="fCol2">
              <div className="fCol2Data">
                <h1>USEFUL LINKS</h1><br />
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
                <span>Refund and Cancellation</span>
                <span>About Us</span>
                <span>We are Hiring</span>
                <span>Credits</span>
              </div>
            </div>

          </div>

          <div className="fPart2">
            <div className="fPart2Data">
              <img src={fLogo} alt="" srcset="" />
              <p id='footername'>PRUTHVI FOUNDATION  </p>
              <p className='fSlogan'>TURNING VISION INTO VICTORY </p>

            </div>
          </div>
        
         {/* <div className="fPart3">
          <div className="Copyrights">
            Designed by Vivek Salwan
          </div>
         </div> */}

        </div>

      </div>

    </>
  );
}

export default App;
