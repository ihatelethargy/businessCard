import React from "react";
import "./NameCard.scss";
import avatar1 from "../../static/img/avatar1.png";
import logo from "../../static/img/ztopLogo.png";

function NameCard() {
    return (
        <div className="nameCardWrapper">
            <div className="nameCardWrap">
                <div className="avatarWrapper">
                    <img src={avatar1} alt="" />
                </div>
                <div className="nameCardContentWrapper">
                    <div className="sloganWrapper">
                        <span>스타트업 투자 마케팅 기업</span>
                    </div>
                    <img src={logo} alt="" className="logo" />
                    <div className="cardInfoWrapper">
                        <div className="nameWrapper">
                            <span className="korName">조 소 연 </span>
                            <span className="engName">SoYeon Cho</span>
                        </div>
                        <div className="rankWrapper">
                            <span>매니저</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NameCard;
