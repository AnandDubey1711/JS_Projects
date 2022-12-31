import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './card.css';


export default function Cards({link,title,project,description,project_link,demo}) {
  return (
    <div className='cards'>
    <Card className='card_item' sx={{ maxWidth: 340,
      border:2,
      borderColor:'blue',
      borderRadius:3,
      
      }}>
      <CardMedia
        sx={{ height: 140 }}
        image={link}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a className='project' href={project_link} target='__blank' >Github Link</a></Button>
        <Button size="small"><a className='demo' href={demo} target='__blank' >Demo</a></Button>
      </CardActions>
    </Card>
    </div>
  );
}