import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AchievementCard = (props) => {
    return (
        <Card  sx={ {maxWidth: 300, backgroundColor: "var(--main-background-color)", border:"1px solid var(--red-main-color)" }}>
            <div className={`d-flex justify-content-between`}>
                <CardMedia
                    sx={{ height: 140, width: 145  }}
                    image={props.imageBefore}
                    title="green iguana"
                />
                <CardMedia
                    sx={{ height: 140, width: 145 }}
                    image={props.imageAfter}
                    title="green iguana"
                />
            </div>
            <CardContent>
                <Typography sx={{color: "var(--red-main-color)"}} gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "var(--white-color)"}}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{color: "var(--white-color)",backgroundColor: "var(--red-main-color)", padding:1, textTransform: "none" }} size="small">Learn More</Button>
            </CardActions>
        </Card>
        );
    }

export default AchievementCard