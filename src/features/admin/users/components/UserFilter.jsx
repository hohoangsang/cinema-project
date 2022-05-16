import { Box, Button, Grid, MenuItem, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Search } from "@material-ui/icons";
import { useRef } from "react";

function UserFilter({ onSearchChange, filter, onChange }) {
  const searchRef = useRef();

  const handleSearchChange = (event) => {
    if (!onSearchChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      fullname_like: event.target.value,
    };

    onSearchChange(newFilter);
  };

  const handleGenderChange = (event) => {
    if (!onChange) return;

    const newFilter = {
      ...filter,
      _page: 1,
      gender: event.target.value || undefined,
    };

    onChange(newFilter);
  };

  const handleSortChange = (event) => {
    if (!onChange) return;

    const value = event.target.value;
    const [_sort, _order] = value.split(".");

    const newFilter = {
      ...filter,
      _sort: _sort || undefined,
      _order: _order || undefined,
    };

    onChange(newFilter);
  };

  const handleClearFilter = () => {
    if (!onChange) return;
    const newFilter = {
      ...filter,
      _page: 1,
      gender: undefined,
      fullname_like: undefined,
      _sort: undefined,
      _order: undefined,
    };

    onChange(newFilter);

    if (searchRef.current) {
      searchRef.current.value = "";
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className="listPage__filter__searchName">
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName" x>
              Search by name
            </InputLabel>
            <OutlinedInput
              id="searchByName"
              label="Search by name"
              endAdornment={<Search />}
              onChange={handleSearchChange}
              inputRef={searchRef}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="filterByGender">Gender</InputLabel>
            <Select
              id="filterByGender"
              label="Gender"
              onChange={handleGenderChange}
              value={filter.gender || ""}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={2} md={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel id="sortBy">Sort by</InputLabel>
            <Select
              id="sortBy"
              label="Sort by"
              onChange={handleSortChange}
              value={filter._sort ? `${filter._sort}.${filter._order}` : ""}
            >
              <MenuItem value="">
                <em>No sort</em>
              </MenuItem>
              <MenuItem value="fullname.asc">Name A-Z</MenuItem>
              <MenuItem value="fullname.desc">Name Z-A</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={handleClearFilter}
          >
            Clear Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserFilter;
