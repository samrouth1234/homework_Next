import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function CardAboutComponent() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/originals/68/89/f7/6889f77d051a90e2977027f33ec895ea.jpg" />
                <Card.Body>
                    <Card.Title>Sun Ou khong</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
