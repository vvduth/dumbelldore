import React, { FC } from 'react';
import { Typography, Box, Stack } from '@mui/material';


interface VideoProps {
  contents: any[] ,
  estimatedResults: any, 
  next: any, 
}
interface Props {
  exerciseVideo: VideoProps ,
  name: any
}

const ExerciseVideo:FC<Props> = ({exerciseVideo, name}) => {
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px'}}} p="20px">
      <Typography variant='h3' mb='33px'>
        Struggling with the form and tempo? Watch <span style= {{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx = {{
          flexDirection: {lg: 'row'} ,
          gap: {lg: '110px', xs : '0'}
        }}
      >
        {exerciseVideo?.contents.slice(0, 3)?.map((item:any, index:any) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideo