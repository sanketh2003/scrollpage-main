import { Image, Figure } from 'react-bootstrap';


function FigureExample() {
    return (
        <Figure>
            <Image style={{ borderRadius: "20px", marginTop: "20px", marginLeft: "20px" }} src={require('../images/stalls/img1.jpeg')} fluid />

            <Figure.Caption style={{ margin: '1rem', textAlign: 'justify' }}>
                <h1>About</h1>
                {/* <p > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nulla vitae elit libero, a pharetra augue mollis interdum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum expedita dolores iure nihil totam ullam velit. Voluptatum repellat ipsum enim unde, vero quibusdam voluptates perspiciatis quam, tempore consequatur corrupti debitis nesciunt aliquam nisi pariatur excepturi. Quis velit non vitae voluptatum, culpa, autem molestiae voluptatibus officiis perferendis qui accusamus perspiciatis, nobis quibusdam. Ratione, quo numquam. Voluptas cum alias mollitia quo voluptatibus assumenda hic optio provident aperiam enim nihil commodi maxime non tempora ab accusamus quibusdam id voluptatum quas, inventore sunt odit unde. Quisquam laborum nemo illum ullam corrupti eius aperiam quibusdam laboriosam repudiandae corporis temporibus inventore, deserunt suscipit vel optio?
        </p> */}
                <div><span style={{marginLeft:'30px'}}>       Nulla </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ullam numquam rerum, repellat ipsum deleniti ratione ducimus, quisquam ipsam quaerat amet? Accusantium vero iure, deserunt possimus facilis quibusdam dolore dolores consequuntur in culpa aliquid fugiat maiores repudiandae autem similique blanditiis.</div>
            </Figure.Caption>
        </Figure>
    );
}

export default FigureExample;