import React from 'react'
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
      <h1 className='name text-center mt-3 text-success'>I am Maria Joy</h1>
      <h4 className='text-center mt-3'>SOFTWARE DEVELOPER</h4>
      <section id='about' className='mt-5'>
        <h3 className=' about text-center mt-4'>About</h3>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img style={{ width: '250px' }} className='mt-3' src="https://m.media-amazon.com/images/I/41Brp3Gs6sL._AC_UF1000,1000_QL80_.jpg" alt="img" />
          </div>
          <div className="col-md-5">
            <p className='fs-5 mt-5'>Passionate to work in a worldwide enterprise where I can utilize skill set to get expertise along with growth of an organization so that I can utilize the extensive knowledge I have gained during my course.</p> <br />
            <a id="download" href="./src/MARIA JOY Resume" download>DOWNLOAD CV</a>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>

      <section id='education'>
        <h3 className='text-center '>Education</h3>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-3">
            <div>
              <h5> B-Tech in Computer Science</h5>
              <p>College Of Engineering Kidangoor(2019-2023) <br />CGPA: 8.97 <br /> Under Kerala Technological University(KTU) </p>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className='ms-5'>
              <h5>AISSCE</h5>
              <p>Cluny Public School & Junior College,Cheppumpara <br /> Percentage: 91% <br />Board: CBSE <br /> Year Of Passing :2019</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className=' me-3'>
              <h5> AISSE</h5>
              <p> Cluny Public School & Junior College, Cheppumpara <br /> CGPA : 10 <br /> Year Of Passing : 2017</p>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
      </section>

      <section id='skills'>
        <h3 className='text-center '>My Skills</h3>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="content col-md-8">
            <div>
              <img style={{ width: "140px" }} src="https://static.vecteezy.com/system/resources/previews/013/313/458/non_2x/html-icon-3d-rendering-illustration-vector.jpg" alt="" />
              <h6 className='ms-5 mt-3'>HTML</h6>
            </div>

            <div>
              <img style={{ width: "140px", height: "106px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjk8jOsT5glH8aS2rdFl6BrWh7EGNxEARJXhXeWeSloA&s" alt="" />
              <h6 className='ms-5 mt-3'>CSS</h6>
            </div>

            <div>
              <img style={{ width: "150px", height: "106px" }} src="https://cdn-icons-png.flaticon.com/256/11229/11229335.png" alt="" />
              <h6 className='ms-4 mt-3'>JavaScript</h6>
            </div>

            <div>
              <img style={{ width: "130px", height: "106px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XEJ0w4GmkLfQmEi7A394_lFTt4KXV_10KNYvz63VSJse0Oq5NFLKVVYP-ei1SACxWxc&usqp=CAU" alt="" />
              <h6 className='ms-4 mt-3'>Bootstrap</h6>
            </div>

            <div>
              <img style={{ width: "150px", height: "106px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
              <h6 className='ms-5 mt-3'>React</h6>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </section>

      <section id='project'>
        <h3 className='text-center '>My Projects</h3>
        <div className="row mt-5">
        <div className="col-md-2"></div>
          <div className="col-md-3 mt-3">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>E-commerce Website for Visually Impaired</Card.Title>
                  <Card.Text>
                    <span style={{fontWeight:"bold"}}>Technologies Used:</span> HTML,CSS,ReactJs,Javascript, Firebase/NodeJs
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/ecommerce-project">CODE</Card.Link>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Student Database Management System</Card.Title>
                  <Card.Text>
                     <span style={{fontWeight:"bold"}}>Technologies Used:</span>HTML,CSS,Javascript,Bootstrap, Python, MySQL 
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/student-database-management">CODE</Card.Link>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Weather Application</Card.Title> <br />
                  <Card.Text>
                    <span style={{fontWeight:"bold"}}>Technologies Used:</span> HTML, CSS, Bootstrap, JavaScript
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/weather-app.git">CODE</Card.Link>
                </Card.Body>
              </Card>
            </div>
          
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-3 mt-3">
          <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Travel Website Design</Card.Title> <br />
                  <Card.Text>
                    <span style={{fontWeight:"bold"}}>Technologies Used:</span> HTML, CSS , Bootstrap
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/travel-website">CODE</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>BMI Calculator</Card.Title> <br />
                  <Card.Text>
                    <span style={{fontWeight:"bold"}}>Technologies Used:</span> HTML, CSS, Bootstrap, React
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/BMI-calculator-React">CODE</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-3 mt-3">
          <div>
              <Card style={{ width: '18rem' }}> <br />
                <Card.Body>
                  <Card.Title>Cake Website Design</Card.Title> <br /> 
                  <Card.Text>
                    <span style={{fontWeight:"bold"}}>Technologies Used:</span> HTML, CSS 
                  </Card.Text>
                  <Card.Link style={{textDecoration:"none"}} href="https://github.com/MARIAJOY27/cake-website-design">CODE</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
    </div>
  )
}

export default Home
