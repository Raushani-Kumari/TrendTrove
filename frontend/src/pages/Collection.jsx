import React, { Suspense, useState } from 'react';
import { Box } from '@mui/material';
import FilterComponent from '../components/FilterComponent';

const CollectionComponent = React.lazy(() => import('../components/CollectionComponent'));



const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <Box display="flex" width="100%" p={2} sx={{backgroundColor:"#b9c0be4a"}}>
      <Box width="16%" mr={2}>
        <FilterComponent setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box width="84%" sx={{backgroundColor:"#b9c0be4a"}}>
        <Suspense fallback={<div>Loading...</div>} >
        <CollectionComponent selectedCategory={selectedCategory} />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Collection;
