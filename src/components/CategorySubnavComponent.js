import { React, useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import '../styles/categorySubnav.css';
import postService from '../services/postService';

function CategorySubnavComponent() {
  // State for managing the selected tab value
  const [value, setValue] = useState(0);
  // State for storing all categories
  const [allCategory, setAllCategory] = useState([]);

  // Function to handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Fetch all categories when component mounts
  useEffect(() => {
    fetchAllCategory();
  }, []);

  // Function to fetch all categories
  const fetchAllCategory = () => {
    postService
      .getAllCategory()
      .then(response => {
        // Set the fetched categories in state
        setAllCategory(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Box className="topnavbar" sx={{ maxWidth: { xs: 320, md: 1000 }, fontFamily: 'sans-serif' }}>
      {/* Tabs component for displaying category subnav */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {/* Map through all categories and render tabs */}
        {allCategory.map((category, index) => (
          <Tab className="category" key={category.id} label={category.title} />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategorySubnavComponent;
