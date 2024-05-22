import React, { useEffect, useState } from "react";
import "./index.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CiHeart } from "react-icons/ci";
import { FaEarthAfrica } from "react-icons/fa6";

import { Col, Row } from "antd";
import { getAllData } from "../../Services/index";

const HomePage = () => {
  const [products, setproducts] = useState(null);
  useEffect(() => {
    getAllData().then((res) => {
      setproducts(res.data.data);
    });
  }, []);

  return (
    <>
      <section id="section-1">
        <div className="container">
          <div className="header-title">
            <h6>
              GET YOUR
              <span style={{ backgroundColor: "#ffb606" }}>EDUCATION</span>{" "}
              TODAY
            </h6>
          </div>

          <div className="header-cards">
            <div className="card">
              <div className="card-icon">
                <FaEarthAfrica />
              </div>
              <div className="card-title">
                <h3>Our Library</h3>
                <p>view more</p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaEarthAfrica />
              </div>
              <div className="card-title">
                <h3>Our Library</h3>
                <p>view more</p>
              </div>
            </div>
            <div className="card">
              <div className="card-icon">
                <FaEarthAfrica />
              </div>
              <div className="card-title">
                <h3>Our Library</h3>
                <p>view more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-2">
        <div className="container">
          <div
            style={{
              marginTop: "50px",
              textAlign: "center",
              fontSize: "2.5  rem",
            }}
            className="popular-title"
          >
            <h4 style={{ fontSize: "2rem" }}>Popular courses</h4>
          </div>
          <Row style={{ marginTop: "40px" }} gutter={16}>
            {products &&
              products.map((p) => {
                return (
                  <Col xs={24} md={12} lg={8} key={p._id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={p.imageUrl}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {p.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {p.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Add</Button>
                        <Button size="small">
                          <CiHeart style={{ fontSize: "1.5rem" }} />
                        </Button>
                      </CardActions>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </section>
      <section id="section-3">
        <div className="container">
          <div className="form-section">
            <Row>
              <Col xs={24} lg={12} span={12}>
                <div className="section-left">
                  <h2 style={{marginBottom:"10px"}}>
                    Register now and get a discount <br />
                    <span style={{color:"black"}}>50%</span> discount until 1 January
                  </h2>
                  <p style={{color:"white"}}>
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum. Aliquam, augue a
                    gravida rutrum, ante nisl fermentum nulla, vitae tempo.
                  </p>
                  <button>Register Now</button>
                </div>
              </Col>
              <Col xs={24} lg={12} span={12} >
                <div className="section-right">
                  <h2 style={{marginBottom:"10px", color:"white"}}>Search for your course</h2>

                  <div className="inputs">
                    <input type="text" placeholder="Course Name" />
                    <input type="text" placeholder="Category" />
                    <input type="text" placeholder="Degree" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};

export default HomePage;
