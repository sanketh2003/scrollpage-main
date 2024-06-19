import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  MdOutlineReduceCapacity } from "react-icons/md"
import { IoMdTime } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaBed, FaWifi  } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { GiTakeMyMoney ,  GiWineBottle } from "react-icons/gi";
import { FcElectricity,FcConferenceCall } from "react-icons/fc";
import { TbAirConditioning } from "react-icons/tb";
import { IoRestaurant } from "react-icons/io5";

function WithHeaderExample() {
    return (
        <div>
            <Card>
            <Card.Header>
                <h1>Overview</h1>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col">
                        <div className="data-item">
                            <h6><MdOutlineReduceCapacity /> Seating Capacity  </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><IoMdTime /> Timings </h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><FaRegStar />Working Since</h6>
                        </div>
                    </div>
                    
                </div><br/>
                
                <div className="row">
                    <div className="col">
                        <div className="data-item">
                            <h6><FaBed /> Rooms Available</h6>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className="data-item">
                            <h6><RiMoneyRupeeCircleFill /> Average Room Price</h6>
                        </div>
                    </div>

                    <div className="col">
                        <div className="data-item">
                            <h6><GiTakeMyMoney /> Average Price of Venue</h6>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card><br/><br/>

        <Card>
        <Card.Header>
                <h1>Special Specifications</h1>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col">
                        <div className="data-item">
                            <h6><FcElectricity />Electricity Backup</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><TbAirConditioning /> Air-Conditioned</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><IoRestaurant /> Restaurant</h6>
                        </div>
                    </div>
                </div><br/>
                
                <div className="row">
                    <div className="col">
                        <div className="data-item">
                            <h6><GiWineBottle /> Bars</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><FcConferenceCall /> Conference Center</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="data-item">
                            <h6><FaWifi /> Wifi</h6>
                        </div>
                    </div>
                </div>
            </Card.Body>

        </Card>

        </div>
        
    );
}

export default WithHeaderExample;
