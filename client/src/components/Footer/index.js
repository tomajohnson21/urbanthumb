import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../Footer/style.css';

const FooterPage = () => {
  return (
    
    <MDBFooter className="bgd text-center">
        <MDBContainer className='footerTxt'fluid>
          &copy; {new Date().getFullYear()} Copyright: <a className='footerA' href="/"> UrbanThumb </a>
        </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPage;