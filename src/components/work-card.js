// import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const WorkCard = (props) => {
//     return (
//         <div>
//             <Card>
//                 <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//                 <CardBody>
//                     <CardTitle>Card title</CardTitle>
//                     <CardSubtitle>Card subtitle</CardSubtitle>
//                     <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//                     <Button>Button</Button>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// };

// export default WorkCard;



import React from 'react';
import { Card, Button } from 'react-bootstrap';



const WorkCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card >
        </div>
    )
}

export default WorkCard;
