import { React, useEffect, useState } from 'react';
import PostCardComponent from '../components/PostCardComponent';
import postService from '../services/postService';
import CategorySubnavComponent from '../components/CategorySubnavComponent';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TagIdContext from '../context/tagContext';
import '../styles/allPost.css';

function AllPostsComponent(props) {
  // State for storing all post data
  const [allPostData, setAllPostData] = useState([]);
  // State for storing tag data
  const [TagIdData, setTagIdData] = useState([]);
  // State for managing pagination
  const [page, setPage] = useState(1);

  // Function to handle pagination changes
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Fetch all posts and tags when component mounts
  useEffect(() => {
    fetchAllPosts();
    fetchAllTags();
  }, []);

  // Function to fetch all posts
  const fetchAllPosts = () => {
    postService.getAllPosts()
      .then(response => {
        setAllPostData(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  // Function to fetch all tags
  const fetchAllTags = () => {
    postService.getAllTags()
      .then(response => {
        setTagIdData(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  };

  return (
    <div>
      {/* Provide tag data to child components */}
      <TagIdContext.Provider value={TagIdData}>
        {/* Render category subnav component */}
        <CategorySubnavComponent />
        <Container className='all-post-page'>
          <Box sx={{ flexGrow: 1 }}>
            {/* Grid for displaying post cards */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
              {allPostData.slice(20 * (page - 1), 20 * page).map((postData, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {/* Render post card component */}
                  <PostCardComponent postData={postData} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </TagIdContext.Provider>
      {/* Pagination component */}
      <Stack className="pagination" spacing={1} sx={{alignItems: "center", paddingTop: "5vmin", paddingBottom: "5vmin"  }}>
        <Pagination count={5} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default AllPostsComponent;
