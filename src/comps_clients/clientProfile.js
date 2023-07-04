
import React, { useEffect, useState } from 'react'
import './clientProfile.css';
import { useParams } from 'react-router';
import { API_URL, MY_INFO, doApiMethod } from '../services/apiService';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import UserProfile from '../comps_users/userProfile';
import UserProfileInfo from '../comps_users/userProfileInfo';
import NavbarGeneralClient from '../comps_general/navbarGeneralClient';
import { Link } from 'react-router-dom';

export default function ClientProfile() {
    const [info, setInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        doApiInit();
    }, [])

    const doApiInit = async () => {
        if (localStorage[MY_INFO]) {
            setInfo(JSON.parse(localStorage[MY_INFO]));
        }
        else {
            let url = API_URL + "/clients/myInfo";
            try {
                let resp = await doApiMethod(url, "GET");
                console.log(resp.data);
                setInfo(JSON.parse(localStorage[MY_INFO]));
            }
            catch (err) {
                console.log(err);
                alert("There problem try come back later");
            }
        }
    }

    return (
        <section className="vh-100" style={{ background: "RGB(235 250 255)" }}>
            <NavbarGeneralClient />
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="text-center"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', background: "rgb(250, 244, 238)" }}>
                                    {info.img_url ? <img src={info.img_url}
                                        alt="name" className="my-5" style={{ width: '100px', borderRadius: '50%', border: "solid 2px rgb(235 188 127) " }} fluid /> : <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SDw8PEA8PDxAPFRAVFg8VFRAPEBUVFRUWFhUSFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAAMBAQAAAAAAAAAAAAAAAQIFBgQD/8QAORABAQABAQQGBggGAwEAAAAAAAECAwQFETEhQVFhcZEGEjKhssEiMzRScoGC4RMjQrHR8GKSoiT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7MFAAAQUEUAEVAAUAEBUUBFABAABQAAQABQAEUAABAAUAEAFEUAEAAAUABAFRQAEAABQABABQARUAUAEAAFAABAAFejZ9h1c/Y08rO3lPOvZhuDXvXpzxt+UBq0bXPcGtOvTv55fOPJr7u1sPa08uHbOGU9wPKCgAAgACgAgAKAAAIoACAKigAIAD6bPoZZ5Y4Yzjcuj9/AGWy7NnqZTHCcb7pO210uwbm09PhcpNTPtvszwj1bBseOlhMcefXl129r0gCcVBLFAHg27dWlqcbw9TP78+c63M7dsWellwynReWU5X/ex2r47VoY6mNwynGXznfO8HDq++27LlpZ3C+MvbO18AAAEUBFAAQBRj5qCoAAKAACAAR0no3snDC6t559E7sZz87/ZzknHonOu50NKY4Y4TljJPKA+iWlqAMiAAJaBakhIyBrN/bH6+lcpPpafGzw658/ycq72xw+1aXqameH3csp+XHo9wPkgAKACKgAKAACCgAICiAKAD7bDOOrpT/nh8UdtXD7Ln6uphl93LG+VldyDFlAABLQUSKAAA5Dfk/8Ao1P03/zHXuN3xnx2jVvfw8pJ8geNQABABQAAAAAEAAAUAEAB2m7No/iaWGXXw4XxnRXFtv6P7d6md08r9HPl3Zfv/gHTgloFqSEZAAAJxS0kBjr6swwyzvLGWuHzyttyvPK23xvTW99I9u5aON7Ll8sfn5NCAIAAoAIAACgAIKCKACKgAKACA6Pc295lJp6l4Zcpnf6u69/9254OEbPYN9amnwxy/mYzt9qeF/yDqh4Nn3xoZ/1+pezL6Pv5PbjqY3lZfCygyY2meUnOye549femhhz1Jb2Y/Svu5A9kjW723rNOXDDhdS/nMe+9/c1u3b9zy446c/hz739f7NRaBllbbbeNvTb1gAgKACAAAKAAAIoAIAKIoAIAE7Gy2Xcutn02TTnbl0Xy5g1w6XQ9H9Ke3llnf+s93T73u0t3aGPLSw/OetfeDi2WOF6pfKu4mMnKSeHCM4Dhbp5deOXlWLvUyxl5yX3g4JXaauwaOXPSw8pL5x4dfcOjfZuWH5+tPKg5gbTadxa2PTjw1J3dGXlWtyxstlllnOXooICAoigigAgAce+B/vUAqAACgAAj17v3fnq3hj0YznneU7u+ruzYLrZ8OWM9rLu7J311+jpY4YzHGSYzlAebYd26elPozjl9+9OX7PYADG0tJAJGQAAUGNqyEigPPtmxaerOGePHsy5ZTwr0AOR3nuvPS6faw+92d2U6mvd3lOMss4y9V6Z4OW3zu3+Fl62P1eXLuv3Qa1QARUABQAAQfHV2mY5Y42ZW5dcnHGdXTX3ABAAerdel62tp49XrS+XT8gdRuvZP4Wljj/VenLxv+OX5PYAAnFQTgoAAxtBeKpIoAACWKAkj5bXs81MMsLyynPsvVX2AcJqYXHK43ouNsvjGDZekGn6uvl/ymOXyv9mtBRFAAAABqt44y7Rs/wB6cvZ5cenjxvHq6PC+F2rWbxv8/ZvpcJbeM45Tjw6Z0ScLOPf1+WyAAAbDcP2jT/X8NeB79w/aNP8AX8NB1zG0tJAJGQAAxoFqyEigAAMeIsgEUAEtLWIOb9JvrsfwT4smobf0m+ux/BPiyakAEAABQAa7bs8JraPG4ev0+rLc5l09F6J0WePZWxazeOr/AD9nw7+N8LcZOPbOOPhx9Xu47MAAB7txfaNP9fw14Xv3D9o0/wBfw0HWSMgABjaDIIAAAMWScAJFAAS0lBakigOZ9J/rsfwT4smobf0n+ux/BPiyagEAAUABFBrt4a2U1tnxnrTG28bLjMbynCzn1zz4dfRsXh2zZc8tbRzknq4XpvGzLy5cOXTz6a9wCAA2G4ftGn+v4a8D37h+0af6/hoOuBjaBashIoAAFSVFkBQAEpagIykWAAJaDmvSf67H8E+LJqG29JfrsfwT4smoBQAEADgqKAABOSKAPfuH7Rp/r+GqA6yscf8AfeAMwAEoAmLIAAAY1YAKAAxvWAOa9JfrcPwT4smpABKoBOXmigAAP//Z"
                                            alt="name" className="my-5" style={{ width: '100px', borderRadius: '50%', border: "solid 2px rgb(235 188 127) " }} fluid />}
                                    <MDBTypography tag="h5" style={{ color: "rgb(235 188 127)" }}>{info.name?.firstName} {info.name?.lastName}</MDBTypography>
                                    <MDBCardText style={{ color: "rgb(235 188 127)" }}>{info.role}</MDBCardText>
                                    {/* <MDBIcon far icon="edit mb-5" /> */}
                                    <Link to={`/clients/editClient/${info._id}`}><MDBIcon far icon="edit mb-5" style={{ color: "rgb(235 188 127)" }} /></Link>
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography className='display-6' tag="h6">My profile
                                            {/* <Link className='btn btn-warning' to={`/clients/editClient/${info._id}`}>Edit profile</Link> */}
                                        </MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <UserProfileInfo info={info} />
                                        <br />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="4" className="mb-3">
                                                <MDBTypography tag="h6">City</MDBTypography>
                                                <MDBCardText className="text-muted">{info.address?.city}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="4" className="mb-3">
                                                <MDBTypography tag="h6">Street</MDBTypography>
                                                <MDBCardText className="text-muted">{info.address?.street}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="4" className="mb-3">
                                                <MDBTypography tag="h6">Building</MDBTypography>
                                                <MDBCardText className="text-muted">{info.address?.building}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>

                                        {/* <div className="d-flex justify-content-start">
                                            <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                                            <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                                        </div> */}
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

