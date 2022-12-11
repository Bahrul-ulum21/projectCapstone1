
import Card from 'react-bootstrap/Card';

function Card({ imageUrl, title, alamat, provinsi, pemilik, ukuran, harga }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {alamat}
        </Card.Text>
        <Card.Text>
          {provinsi}
        </Card.Text>
        <Card.Text>
          {pemilik}
        </Card.Text>
        <Card.Text>
          {ukuran}
        </Card.Text>
        <Card.Text>
          {harga}
        </Card.Text>
        <Card.Text>
          Lorem ipsudddddsflflgdjglkjsdklglsdkfmdklgmsm
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card;