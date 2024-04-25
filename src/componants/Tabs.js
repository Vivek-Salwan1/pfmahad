import React, { useEffect, useRef } from 'react'
import '../styles/tabs.css'
import tab1 from '../images/tabs/tab1.png'
import tab2 from '../images/tabs/tab2.png'
import tab3 from '../images/tabs/tab3.png'
import tab4 from '../images/tabs/tab4.png'
import tab5 from '../images/tabs/tab5.png'
import tab6 from '../images/tabs/tab6.png'

function Tabs() {

  const tabRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          tabRef.current.classList.add('tabAnimation');
        } else {
          tabRef.current.classList.remove('tabAnimation');
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (tabRef.current) {
      observer.observe(tabRef.current);
    }

    return () => {
      if (tabRef.current) {
        observer.unobserve(tabRef.current);
      }
    };
  }, []);
  return (
    <div className='tabsSection' ref={tabRef}>
      <div className="allTabs">
        <div className="tab">
          <div className="tabPart1">
            <img src={tab1} alt="" />
          </div>
          <div className="tabPart2">
            <h3> Why this Competition</h3>
          </div>
        </div>
        <div className="tab">
          <div className="tabPart1">
            <img src={tab2} alt="" />
          </div>
          <div className="tabPart2">
            <h3>Registration Steps</h3>
          </div>
        </div>
        <div className="tab">
          <div className="tabPart1">
            <img src={tab3} alt="" />
          </div>
          <div className="tabPart2">
            <h3>Selection Criteria</h3>
          </div>
        </div>
        <div className="tab">
          <div className="tabPart1">
            <img src={tab4} alt="" />
          </div>
          <div className="tabPart2">
            <h3>Award</h3>
          </div>
        </div>
        <div className="tab">
          <div className="tabPart1">
            <img src={tab5} alt="" />
          </div>
          <div className="tabPart2">
            <h4>Free Educational Bootcamp</h4>
          </div>
        </div>
        <div className="tab">
          <div className="tabPart1">
            <img src={tab6} alt="" />
          </div>
          <div className="tabPart2">
            <h4>Foundation Inforamation</h4>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Tabs;
