import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
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