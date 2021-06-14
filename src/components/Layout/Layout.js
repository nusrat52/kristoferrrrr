import React from "react";
import Header from "../Header/Header";
import { Col, Row, Container } from "react-bootstrap";
import classes from "./style.module.css";
import img from "../../assets/img/teacher.jpeg";
import { Telegram } from "@styled-icons/boxicons-logos";

const Layout = ({
  children,
  sidebar,
  items,
  classCode,
  user,
  room,
    teacher,
    student,
  
}) => {
  const renderLayout = () => {
    if (sidebar) {
      return (
        <Container fluid>
          <Row className={classes.Row}>
            <Col md={2} className={classes.Sidebar}>
              <Header />
              {teacher &&
                <div className={classes.User}>
                  <div className={classes.Img_container}>
                    <img src={img} alt="" />
                 
                  </div>
              





                  <div className="user__info">
                    <p>{user}</p>
                    <p>Room {room}</p>
                  </div>
                </div>
              }


{student && (
                     <div className={classes.profil}>
                     <div className={classes.profil__icon}>
                         <p className={classes.profil__profilText}>{user.split(' ')[0][0]}{user.split(' ')[1][0]}</p>
                     </div>
                     <div className={classes.profil__item}>
                         <p className={classes.profil__profil}>{user}</p>
                         <p className={classes.profil__room}>{'Room '+room}</p>
                     </div>
                 </div>
                  )}


              {classCode && (
                <div className={classes.ClassCode}>
                  <p>
                    Class code: <span>H34xXf</span>
                  </p>
                </div>
              )}

              <div className={classes.SideNavs}>
                {items &&
                  items.map((item) => (
                    <div className={classes.SideNav}>
                      <icon>
                        <Telegram width="20" height="20" />
                      </icon>
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
              {children}
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <div>
          <Header />
          {children}
        </div>
      );
    }
  };

  return <div className={classes.Layout}>{renderLayout()}</div>;
};

export default Layout;
