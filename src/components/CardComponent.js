
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMAGE_BASE_URL } from '@/library';
import { useRouter } from 'next/router';
export default function CardComponent({title, imagePath, id}) {
  const router= useRouter();
  const handelClick = () =>{
  router.push(`/movie/${id}`);
  }
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
      <Card.Img variant="top" 
                src={
                  imagePath
                  ? IMAGE_BASE_URL + imagePath
                  :"https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"
                  }
                  />
      <Card.Body>
        <Card.Title>{title?title:"Card Title"}</Card.Title>
        <Button onClick={handelClick} variant="primary">View details </Button>
      </Card.Body>
    </Card>
  )
}

