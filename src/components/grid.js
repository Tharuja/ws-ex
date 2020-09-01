import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import './grid.css'; //Import here your file style

const GridExamplesPage = () => {
    return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4">
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="4">
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card&apos;s content.
                                </MDBCardText>
                                <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

    );
}

export default GridExamplesPage;