import React from "react";
import "./Introduce.scss";

function Introduce() {
    return (
        <div className="introduceWrapper">
            <div className="introCardWrapper">
                <div className="introName">
                    <span className="korName">조 소 연</span>
                    <span className="engName">SoYeon Joo</span>
                </div>
                <div className="introPosition">
                    <span className="positionName">
                        제로투원파트너스 | 심사역
                    </span>
                </div>
                <div className="hashTagWrapper">
                    <span className="hashTag">#열정 #침착 #강심장</span>
                </div>
                <div className="introContent">
                    <span>
                        안녕하세요. <br /> 심사역 조소연 매니저 입니다. <br />
                        모든일에 최선을 다하겠습니다.
                    </span>
                </div>
            </div>
            <div className="introVideoWrapper">
                <div className="videoBox">
                    <iframe
                        width="280"
                        height="220"
                        src="https://www.youtube.com/embed/6zBaQna9v4E"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="introFooter"></div>
        </div>
    );
}

export default Introduce;
