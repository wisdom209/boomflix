import React, { cloneElement, useState } from 'react';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
  List,
  ListItemButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getSearch } from '../../api_client/axiosClient';

const SearchModal = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate()
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleSearch = async () => {
    setLoading(true);
	let searchResults = await getSearch(query)
	console.log("--", searchResults);
	let tvs = searchResults[0].value.data.results.slice(0, 5)
	let movies = searchResults[1].value.data.results.slice(0,5)
	tvs.map(v => v.TYPE = 'series')
	movies.map(v => v.TYPE = 'movie')
	searchResults = [...tvs, ...movies]
    setResults(searchResults);
    setLoading(false);
  };

  return (
    
	<Box>
      <Button variant="text" sx={{color: {sm: 'black', xs: 'black', md: 'white', lg: 'white', xl: 'white', xxl: 'white'}, padding: 0, marginTop: {md : 1, lg: 1, xl: 1, xxl: 1}, fontSize: '15.4px'}} 
	  onClick={handleOpen}>
		SEARCH
      </Button>
	  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{width: '25rem', backgroundColor: '#aaa'}}>Search</DialogTitle> 
        <DialogContent sx={{width: '25rem', backgroundColor: '#aaa'}}>
          <TextField
            label="Search query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
			placeholder='Search keyword'
			InputLabelProps={{
				sx: { color: 'red', opacity: '0.6' }
			}}
			inputProps={{
				sx: { color: 'white' }
			}}
			color="common"
          />
          {loading ? (
            <CircularProgress style={{ marginTop: 10 }} />
          ) : (
            <List>
              {results.map((result, index) => (
                <ListItemButton key={index}
					onClick={() => {
						setOpen(false);
						setQuery('');
						setResults([]);
						console.log(result)
						console.log(`/media/${result.TYPE}/${result.id}`)
						navigate(`/media/${result.TYPE}/${result.id}`)
					}}
				>{result?.name || result?.original_title || result?.title || result?.original_name}
				</ListItemButton>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions sx={{width: '25rem', backgroundColor: '#aaa', paddingRight: '1.5rem'}}>
          <Button onClick={handleClose} color="error">
            Close
          </Button>
          <Button onClick={handleSearch} color="error" variant="contained">
            Search
          </Button>
        </DialogActions>
      </Dialog>
	  
    </Box>
  );
};

export default SearchModal;
