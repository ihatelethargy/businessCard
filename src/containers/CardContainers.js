import React from "react";
import Header from "../components/header/Header";
import Landing from "../components/landing/Landing";
import NameCard from "../components/namecard/NameCard";
import ToolFooter from "../components/toolfooter/ToolFooter";
import Introduce from "../components/introduce/Introduce";

function CardContainers() {
    return (
        <div className="cardContainerWrapper">
            <Header />
            <Landing />
            <NameCard />
            <ToolFooter />
            <Introduce />
        </div>
    );
}

export default CardContainers;
