import React,{useContext, useRef} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { AppContext } from '../appContext';
import { Link, useParams } from 'react-router-dom';
export default function ProInfo(props) {
        const {addToSelectedProffs} = useContext(AppContext);
        const selectRef=useRef();
        const params = useParams();
    const onBookClick=()=>{
        const selectedDate = new Date(selectRef.current.value);
        if(selectRef.current.value!="View Available Dates:"){
            addToSelectedProffs({proff:props.item,date:selectedDate});
        }
    }
    return (
        <div className='col-md-6 col-sm-12'>
            <MDBContainer>
                <MDBRow className="justify-content-center">
                    <MDBCol md="12" lg="12" xl="10" className="mt-5">
                        <MDBCard style={{ borderRadius: '15px', backgroundColor: 'rgb(242, 234, 234)' }}>
                            <MDBCardBody className="p-4 text-black">
                                {/* <div>
                                    <MDBTypography tag='h6'>{props.item.name.firstName} {props.item.name.lastName}</MDBTypography>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <p className="fw-bold mb-0">{props.item.cost} NIS</p>
                                    </div>
                                </div> */}
                                <div className="d-flex align-items-start mb-4">
                                    <div className="flex-shrink-0 me-2">
                                        <MDBCardImage
                                            style={{ width: '70px' }}
                                            className="img-fluid rounded-circle border border-dark border-3"
                                            // src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                                            src={props.item.img_url ? props.item.img_url : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PEA8QEBAOEBEQEBAPEg8QFRAQFREYFhcRExMYHSggGBolGxUVITEiJSkrLi8uFx8zODc4QygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOkA2AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCBAcBA//EAD4QAAICAAIHAwoEBQMFAAAAAAABAgMEEQUGEiExQVETIoEjMkJSYXGRobHRFGJywRUWQ4KSVIOyJFOTwuH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AlQAAAAAAAAAAAAAA+uHw87HlXCc30hFy+gHyBNUar4uXGEYfrkvosz7/AMn4n1qvjL7AV4E1fqvi48IRn+ia+jyIrEYedbyshOD6Ti4/DPiB8gAAAAAAAAAAAAAAAAAAAAAAAAAAPph6J2SUIRcpS4JGWEw07Zxrgs5SeSX7v2HQ9C6IhhYZLvTa78+bfRdF7AIrROqUI5SxD25epHdFe9+kWWqmMEowiopcopJGYAAAAYXUxmnGUVJPlJJozAFX0tqlCWcsO9iX/bfmv3P0SoYiiVcnCcXGUeKZ1cjdN6IrxUMnusS7k8t6fR9V7AOag+2Lw06pyrmspReT+69h8QAAAAAAAAAAAAAAAAAAAAG/oPBdvfXW/Nz2p/pW9rx4eIFt1S0Uqa+1kvKXLPf6MOS8ePwLAeI9AAAAAAAAAAACv63aK7avtYrylSz3elDmvDiUM62zmenMF2F9la83Pah+mW9Lw4eAGgAAAAAAAAAAAAAAAAAABatQ6M5XWerGMF45t/RFVLrqHHyVz62/SC+4FnAAAAAAAAAAAAACm6+UZTps9ZSg/DJr6suRWNfF5Kl9Lf8A0l9gKUAAAAAAAAAAAAAAAAAABcdQrO7fHpKMvBxy/YpxPam4rYxGw+FsXH+5b1+4F+AQAAAAAAAAAAAAVTX2zu0R57UpeCjl+5ayg65YrbxGwuFUVH+573+wECAAAAAAAAAAAAAAAAAABnVY4SjKLylFqUX0ae4wAHUtGY2N9ULY+kt69WXNfE2jnurOmPw03Gb8lY+9+SXr/c6BGSaTTzTWaa5oDIAAAAAAAAAxnJJNt5JLNt8kBraTxsaKp2y9Fbl60uS+JzG2xzlKUnnKTcpPq3xZL6zaY/Ez2YPyVb7v55ev9iFAAAAAAAAAAAAAAAAAAAAAABPav6wyw+VdmcqeXN1+7qvYQIA6thsTC2KnXJTi+aefh7z7HK8FjbaJbVU3Fvjlwl71zLLgtcssldVn+apr/i3+4FvBD0ay4Sf9XZ9k4yjl+xsfxrC/6iv/ACQEgCHv1mwkP6u0+kIyl/8ACIxuuWe6mrL81rX/ABX3AtOJxMKoudklGK4tv5FH1g1hliM668408+Ts9/Rewicbjbb5bVs3Nrhnwj7lwRrgAAAAAAAAAAAAAAAAAAAAAAAAASOA0JiL8nCtqL9OfdX3ZYMHqbFZO61y/LWtlf5Pe/kBTjKEG+Cb/Sm/odIw2g8NX5tMW+su8/mSEK1HckkuiSQHL4aOvlww9z/27PsZ/wAJxP8Ap7v8JHTwBy2ejr1xw9y/27Psa84NcU17019TrRhOCluaTXtSYHJgdKxOg8NZ51MU+se6/kQ2M1Ni83Ta4v1bFtL/ACW9fMCnAkcfoPEUb51txXpQ7y8ehHAAAAAAAAAAAAAAAAAAexTbSSbbeSS3tt8ki3aC1V4WYlZviquS/X9gILRWhbsS84x2Yc7Jbl4dWXLRmrlFGTce0mvTms8n+WPBEtGKSSSSS3JLckjIDzI9AAAAAAAAAAAADwiNJ6uUX5yUezse/bgss3+ZcGTAA5rpXQt2Geco7UOVkd68eaZGnWpQTTTWae5p78yqad1VW+zDrLm6uX9nT3AVAHrTTaaaaeTT3ZPozwAAAAAAAAAZ1VubUYpylJ5JLi2YpZ7lvb4Jc2XzVnQaw8VbYvLTXP8App+ivb1A91e0BHDpWWZSufPlD2R9vVk8AAAAAAAAAAAAAAAAAAAAAAAQOsWgI4hOyvKNyXHgpr1Ze3oyiW1yhJxknGUXk0+KfQ6yQGs2g1iIuyteWgv/ACL1X7egFCB61lue5rk+R4AAAAA3tD6PeJujWuHGb6QXH7eIE7qdofaf4mxbk8qk+b5z+xcEY1VqEVGKyjFJJLkkZgAAAAAAAAAAAAAAAAAAAAAAAAAABTtcdEbP/U1rc3lalyfKf3KodZtqU04yScZJpp80zmmmNHvD3TrfDjB9YPh48vADRAAAvmp2j+zp7Vrv3b/dD0V48fEpujMJ211dXryWf6eL+WZ1CEUkktySyXuQGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV/XHR/aU9ql36e974ekvDj4FgMZwTTT3ppp+5gclBtaTwvY3WVepJ5fpe9fIATuouFzssta8yKhH3yebfwS+JdSC1No2MMpc7JSk/jkvoToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFK16wuVlVqXnxcJfqjvXyb+AJjXKjbwzlzrlGXzyf1AEhoarYw9EelUPi1m/qbp4kegAAAAPHLID0GvhcZCx2KOfkrHXLPd3kk3l7O8jzE4+qrPtJqOVc7XnnurhltS8M0BsgwjYnk01vWa93UwvxMK4SsnJRhXFzlJ8oxWbYH2Bipp8Gt6z8D4wxkHZKpPvQhCb6bM3JLJ9e6wNgGLl7htrqviBkDxM1rtIVQsjTKa7WcJWRrWbk4R4y2VvyA2gQ/8zYXvZytg4uKcLMPiq5vaUmtmEoKUllCTbS3JZs+/wDG8PnJbcmoV9rKxV2uqMNhTzdyjsZ7LTyzz3gSIIyOnsO1DKVknOUoKEaMTKcZRy2tutQ2oJbUd8klvXUxlrDh1KUJO6MoJyynhsXDaW2odzagttuUopKObee4CVBGw07hpSqirc3ds7DUbMs5NqMZSyyhJuMklJptprkbWEx1VztVc1N0WdlZl6FmzGWy/blKL8QNgAAAABpaZq28PfHrVP4pZ/sDcaPQAAAAAARWsej5Ymns4xrlJSUoq2TjFNcJPKMtrLjstZP2cSVMQKpjNVZzdk4ulWWTulKeUo7cZVQUISyXDbrTy35cj54nVWy7tZWQwrniK8bCUu9Psu3UNhwbhnLZcX6vnZroXAICoWarWSnOWzTBzpcY7FtqVDdLr7KEFBKUM23m8uPm8z643Vbb7aFdeGrrtwc8Pm05NzcMo9zY7kVLOWae/pnvLT0PUBT8VqtdZtpOijbzkranNzqXYKv8LFbMc6s+9nmuPm57zZp1ftV1eIUMNV2fZr8NVKbqaTs2n5i7y21KL2dzWXPMs4QFb0noK6+d8sqE8RQoKyUpynh5KEk4V91bUJN798Xx6rLTeqU5yc5xw8E42bFMNqUKHOyl5VvZW5qqebyW+fAt7CAi9HaIVdTpk8orE2X1qqU4KEHe7IQ3Zblmk48OK4GWOw90sRh7K66XXXtdpKdk4T7yccoxVbTyTzWclxfDiSYAr89EXqUMRB1SxKsulONkpqtxtioqKkot91Rr5b8mt2ea+GD1fvocOydMFTTGG25Wy/EyjRGuPbU5KMUthPNNvcizHqAqn8v37KyVNc53WWbcLr88KrJQbVb2V22bhm1PZW/osiSxWCxOWItq7F4i2UI1uyUoxrojwyahLvb5PhlnLnkTKAFYnoPETjh6/I4eNLUtuq2yyyqS2lLZcq1G1yTz2pJbLb3PiSOgNESwrvTulbCyVbhtKtOKjTCDctmKzbcfbwXtJVmQAAAAAAAAH//Z"}
                                            alt='Generic placeholder image'
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div>
                                            <MDBTypography tag='h6' className='fw-bold'>{props.item.name.firstName} {props.item.name.lastName}</MDBTypography>
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                {/* <p className="small mb-0"><MDBIcon far icon="clock me-2" />3 hrs</p> */}
                                                <p className="fw-bold mb-0">{props.item.category}</p>
                                            </div>
                                            <div>
                                                <p className=" mb-0">Cost: {props.item.cost} NIS</p>
                                            </div>
                                            {props.availableDatesList && <div>
                                                <select ref={selectRef} className='form-control' required>
                                                    <option>View Available Dates:</option>
                                                    {props.availableDatesList?.map(date => <option key={date} value={date}>{date.toLocaleDateString()}</option>)}
                                                </select></div>}
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            {/* <p className="mb-0 me-2">@sheisme</p> */}

                                            {/* <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                                                <li>
                                                    <MDBIcon fas icon="star fa-xs" />
                                                </li>
                                                <li>
                                                    <MDBIcon fas icon="star fa-xs" />
                                                </li>
                                                <li>
                                                    <MDBIcon fas icon="star fa-xs" />
                                                </li>
                                                <li>
                                                    <MDBIcon fas icon="star fa-xs" />
                                                </li>
                                                <li>
                                                    <MDBIcon fas icon="star fa-xs" />
                                                </li>
                                            </ul> */}

                                        </div>
                                        <div>
                                            {/* <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn> */}
                                            <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn>
                                            {/* <Link outline color="dark" rounded size="sm" className="mx-1" to={`/proffesionals/proffesionalProfile/${props.item._id}`}>See profile</Link> */}
                                            {/* <MDBBtn outline color="dark" floating size="sm"><MDBIcon fas icon="comment" /></MDBBtn> */}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                {/* <MDBCardText>52 comments</MDBCardText> */}
                                <MDBBtn onClick={()=>onBookClick()} color="dark" rounded block size="lg">
                                    <MDBIcon far icon="clock me-2" /> Book now
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}