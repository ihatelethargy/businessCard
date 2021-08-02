import React from "react";
import "./ToolFooter.scss";
import car from "../../static/img/car.png";
import home from "../../static/img/home.png";
import share from "../../static/img/share.png";
import phone from "../../static/img/phone.png";

function ToolFooter() {
    return (
        <div className="toolFooterWrapper">
            <div className="footerContentWrapper">
                <div className="companyTitle">
                    <span>(주) 제로투원파트너스</span>
                </div>
                <div className="companyInfo">
                    <div className="infoItem">
                        <span className="infoSpan">
                            <span className="strong">A. </span> (06631) 서울시
                            서초구 서초중앙로22길 117, 4층 (서초동, 그라비타스)
                        </span>
                    </div>
                    <div className="infoItem">
                        <span className="infoSpan">
                            <span className="strong">T. </span>
                            02-6228-5100
                        </span>
                    </div>
                    <div className="infoItem">
                        <span className="infoSpan">
                            <span className="strong">M. </span>
                            010-1234-5678
                            <span className="strong strongMargin">E. </span>
                            abc123@ztop.kr
                        </span>
                    </div>
                </div>
            </div>
            <div className="toolWrapper">
                <div className="toolItem">
                    <img src={phone} alt="" />
                    <span>전화상담</span>
                </div>
                <div className="toolItem">
                    <img src={home} alt="" />
                    <span>홈페이지</span>
                </div>
                <div className="toolItem">
                    <img src={car} alt="" />
                    <span>찾아오시는길</span>
                </div>
                <div className="toolItem lastChild">
                    <img src={share} alt="" />
                    <span>공유하기</span>
                </div>
            </div>
        </div>
    );
}

export default ToolFooter;
