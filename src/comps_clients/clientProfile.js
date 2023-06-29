
import React, { useEffect, useState } from 'react'
import './clientProfile.css';
import { useParams } from 'react-router';
import { API_URL, doApiMethod } from '../services/apiService';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import UserProfile from '../comps_users/userProfile';
import UserProfileInfo from '../comps_users/userProfileInfo';
import { Link } from 'react-router-dom';

export default function ClientProfile() {
    const [info, setInfo] = useState({});
    const params = useParams();

    useEffect(() => {
        doApiInit();
    }, [])


    const doApiInit = async () => {
        let url = API_URL + "/clients/single/" + params["id"];
        try {
            let resp = await doApiMethod(url, "GET");
            console.log(resp.data);
            setInfo(resp.data);
        }
        catch (err) {
            console.log(err);
            alert("There problem try come back later");
        }
    }

    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PEA8QEBAOEBEQEBAPEg8QFRAQFREYFhcRExMYHSggGBolGxUVITEiJSkrLi8uFx8zODc4QygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcBA//EAD4QAAICAAIHAwoEBQMFAAAAAAABAgMEEQUGEiExQVETIoEjMkJSYXGRobHRFGJywRUWQ4KSVIOyJFOTwuH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlQAAAAAAAAAAAAAA+uHw87HlXCc30hFy+gHyBNUar4uXGEYfrkvosz7/AMn4n1qvjL7AV4E1fqvi48IRn+ia+jyIrEYedbyshOD6Ti4/DPiB8gAAAAAAAAAAAAAAAAAAAAAAAAAAPph6J2SUIRcpS4JGWEw07Zxrgs5SeSX7v2HQ9C6IhhYZLvTa78+bfRdF7AIrROqUI5SxD25epHdFe9+kWWqmMEowiopcopJGYAAAAYXUxmnGUVJPlJJozAFX0tqlCWcsO9iX/bfmv3P0SoYiiVcnCcXGUeKZ1cjdN6IrxUMnusS7k8t6fR9V7AOag+2Lw06pyrmspReT+69h8QAAAAAAAAAAAAAAAAAAAAG/oPBdvfXW/Nz2p/pW9rx4eIFt1S0Uqa+1kvKXLPf6MOS8ePwLAeI9AAAAAAAAAAACv63aK7avtYrylSz3elDmvDiUM62zmenMF2F9la83Pah+mW9Lw4eAGgAAAAAAAAAAAAAAAAAABatQ6M5XWerGMF45t/RFVLrqHHyVz62/SC+4FnAAAAAAAAAAAAACm6+UZTps9ZSg/DJr6suRWNfF5Kl9Lf8A0l9gKUAAAAAAAAAAAAAAAAAABcdQrO7fHpKMvBxy/YpxPam4rYxGw+FsXH+5b1+4F+AQAAAAAAAAAAAAVTX2zu0R57UpeCjl+5ayg65YrbxGwuFUVH+573+wECAAAAAAAAAAAAAAAAAABnVY4SjKLylFqUX0ae4wAHUtGY2N9ULY+kt69WXNfE2jnurOmPw03Gb8lY+9+SXr/c6BGSaTTzTWaa5oDIAAAAAAAAAxnJJNt5JLNt8kBraTxsaKp2y9Fbl60uS+JzG2xzlKUnnKTcpPq3xZL6zaY/Ez2YPyVb7v55ev9iFAAAAAAAAAAAAAAAAAAAAAABPav6wyw+VdmcqeXN1+7qvYQIA6thsTC2KnXJTi+aefh7z7HK8FjbaJbVU3Fvjlwl71zLLgtcssldVn+apr/i3+4FvBD0ay4Sf9XZ9k4yjl+xsfxrC/6iv/ACQEgCHv1mwkP6u0+kIyl/8ACIxuuWe6mrL81rX/ABX3AtOJxMKoudklGK4tv5FH1g1hliM668408+Ts9/Rewicbjbb5bVs3Nrhnwj7lwRrgAAAAAAAAAAAAAAAAAAAAAAAAASOA0JiL8nCtqL9OfdX3ZYMHqbFZO61y/LWtlf5Pe/kBTjKEG+Cb/Sm/odIw2g8NX5tMW+su8/mSEK1HckkuiSQHL4aOvlww9z/27PsZ/wAJxP8Ap7v8JHTwBy2ejr1xw9y/27Psa84NcU17019TrRhOCluaTXtSYHJgdKxOg8NZ51MU+se6/kQ2M1Ni83Ta4v1bFtL/ACW9fMCnAkcfoPEUb51txXpQ7y8ehHAAAAAAAAAAAAAAAAAAexTbSSbbeSS3tt8ki3aC1V4WYlZviquS/X9gILRWhbsS84x2Yc7Jbl4dWXLRmrlFGTce0mvTms8n+WPBEtGKSSSSS3JLckjIDzI9AAAAAAAAAAAADwiNJ6uUX5yUezse/bgss3+ZcGTAA5rpXQt2Geco7UOVkd68eaZGnWpQTTTWae5p78yqad1VW+zDrLm6uX9nT3AVAHrTTaaaaeTT3ZPozwAAAAAAAAAZ1VubUYpylJ5JLi2YpZ7lvb4Jc2XzVnQaw8VbYvLTXP8App+ivb1A91e0BHDpWWZSufPlD2R9vVk8AAAAAAAAAAAAAAAAAAAAAAAQOsWgI4hOyvKNyXHgpr1Ze3oyiW1yhJxknGUXk0+KfQ6yQGs2g1iIuyteWgv/ACL1X7egFCB61lue5rk+R4AAAAA3tD6PeJujWuHGb6QXH7eIE7qdofaf4mxbk8qk+b5z+xcEY1VqEVGKyjFJJLkkZgAAAAAAAAAAAAAAAAAAAAAAAAAABTtcdEbP/U1rc3lalyfKf3KodZtqU04yScZJpp80zmmmNHvD3TrfDjB9YPh48vADRAAAvmp2j+zp7Vrv3b/dD0V48fEpujMJ211dXryWf6eL+WZ1CEUkktySyXuQGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV/XHR/aU9ql36e974ekvDj4FgMZwTTT3ppp+5gclBtaTwvY3WVepJ5fpe9fIATuouFzssta8yKhH3yebfwS+JdSC1No2MMpc7JSk/jkvoToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFK16wuVlVqXnxcJfqjvXyb+AJjXKjbwzlzrlGXzyf1AEhoarYw9EelUPi1m/qbp4kegAAAAPHLID0GvhcZCx2KOfkrHXLPd3kk3l7O8jzE4+qrPtJqOVc7XnnurhltS8M0BsgwjYnk01vWa93UwvxMK4SsnJRhXFzlJ8oxWbYH2Bipp8Gt6z8D4wxkHZKpPvQhCb6bM3JLJ9e6wNgGLl7htrqviBkDxM1rtIVQsjTKa7WcJWRrWbk4R4y2VvyA2gQ/8zYXvZytg4uKcLMPiq5vaUmtmEoKUllCTbS3JZs+/wDG8PnJbcmoV9rKxV2uqMNhTzdyjsZ7LTyzz3gSIIyOnsO1DKVknOUoKEaMTKcZRy2tutQ2oJbUd8klvXUxlrDh1KUJO6MoJyynhsXDaW2odzagttuUopKObee4CVBGw07hpSqirc3ds7DUbMs5NqMZSyyhJuMklJptprkbWEx1VztVc1N0WdlZl6FmzGWy/blKL8QNgAAAABpaZq28PfHrVP4pZ/sDcaPQAAAAAARWsej5Ymns4xrlJSUoq2TjFNcJPKMtrLjstZP2cSVMQKpjNVZzdk4ulWWTulKeUo7cZVQUISyXDbrTy35cj54nVWy7tZWQwrniK8bCUu9Psu3UNhwbhnLZcX6vnZroXAICoWarWSnOWzTBzpcY7FtqVDdLr7KEFBKUM23m8uPm8z643Vbb7aFdeGrrtwc8Pm05NzcMo9zY7kVLOWae/pnvLT0PUBT8VqtdZtpOijbzkranNzqXYKv8LFbMc6s+9nmuPm57zZp1ftV1eIUMNV2fZr8NVKbqaTs2n5i7y21KL2dzWXPMs4QFb0noK6+d8sqE8RQoKyUpynh5KEk4V91bUJN798Xx6rLTeqU5yc5xw8E42bFMNqUKHOyl5VvZW5qqebyW+fAt7CAi9HaIVdTpk8orE2X1qqU4KEHe7IQ3Zblmk48OK4GWOw90sRh7K66XXXtdpKdk4T7yccoxVbTyTzWclxfDiSYAr89EXqUMRB1SxKsulONkpqtxtioqKkot91Rr5b8mt2ea+GD1fvocOydMFTTGG25Wy/EyjRGuPbU5KMUthPNNvcizHqAqn8v37KyVNc53WWbcLr88KrJQbVb2V22bhm1PZW/osiSxWCxOWItq7F4i2UI1uyUoxrojwyahLvb5PhlnLnkTKAFYnoPETjh6/I4eNLUtuq2yyyqS2lLZcq1G1yTz2pJbLb3PiSOgNESwrvTulbCyVbhtKtOKjTCDctmKzbcfbwXtJVmQAAAAAAAAH//Z"
                                        alt="name" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">{info.name?.firstName} {info.name?.lastName}</MDBTypography>
                                    <MDBCardText>{info.role}</MDBCardText>
                                    {/* <MDBIcon far icon="edit mb-5" /> */}
                                    <Link  to={`/clients/editClient/${info._id}`}><MDBIcon far icon="edit mb-5" /></Link>
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">My profile 
                                       {/* <Link className='btn btn-warning' to={`/clients/editClient/${info._id}`}>Edit profile</Link> */}
                                        </MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <UserProfileInfo info={info}/>
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

