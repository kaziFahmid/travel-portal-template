import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';

const RoundwayFlightFilter = ({ oneWayData, setOneWayData, data2, setData2, setData, data }) => {
  // Extract and compute min and max prices
  const agentPrices = data
    ?.map((price) => parseFloat(price?.agentPrice))
    .filter((price) => !isNaN(price)); // Filter out NaN values

  const maxPrice = Math.max(...agentPrices);
  const minPrice = Math.min(...agentPrices);

  // State variables for filters
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [segments, setSegments] = useState({
    direct: false,
    oneStop: false,
    twoStop: false
  });
  const [refundable, setRefundable] = useState(false);
  const [nonRefundable, setNonRefundable] = useState(false);

  // Handle price range slider change
  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handle filter checkbox changes
  const handleSegmentChange = (e) => {
    setSegments({
      ...segments,
      [e.target.name]: e.target.checked
    });
  };

  const handleRefundable = (e) => {
    setRefundable(e.target.checked);
  };

  const handleNonRefundable = (e) => {
    setNonRefundable(e.target.checked);
  };

  // Filter the data based on selected filters
  const handleFilter = () => {
    let updateFilterData = data2;
 // Apply price range filter
 if (priceRange) {
  updateFilterData = updateFilterData.filter((item) => {
    const price = parseFloat(item.agentPrice);
    return price >= priceRange[0] && price <= priceRange[1];
  });
}
    // Apply segment filters
    if (segments.direct || segments.oneStop || segments.twoStop) {
      updateFilterData = updateFilterData.filter((item) => {
        if (segments.direct && item.segment === '1') return true;
        if (segments.oneStop && item.segment === '2') return true;
        if (segments.twoStop && item.segment === '3') return true;
        return false;
      });
    }

   

    // Apply fare type filters
    if (refundable || nonRefundable) {
      updateFilterData = updateFilterData.filter((item) => {
        if (refundable && item.refundable === 'Refundable') return true;
        if (nonRefundable && item.refundable === 'Nonrefundable') return true;
        return false;
      });
    }

    setOneWayData(updateFilterData);
  };

  // Apply filters whenever any filter criteria change
  useEffect(() => {
    handleFilter();
  }, [priceRange, segments, refundable, nonRefundable]);

  return (
    <Box sx={{ bgcolor: "var(--white-color)", borderRadius: "8px" }}>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Price Range
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={minPrice}
            max={maxPrice}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Fare Type
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={refundable} onChange={handleRefundable} />}
              label="Refundable"
            />
            <FormControlLabel
              control={<Checkbox checked={nonRefundable} onChange={handleNonRefundable} />}
              label="Non-Refundable"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Stops
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={segments.direct} onChange={handleSegmentChange} name="direct" />}
              label="Direct Flight"
            />
            <FormControlLabel
              control={<Checkbox checked={segments.oneStop} onChange={handleSegmentChange} name="oneStop" />}
              label="1 Stop"
            />
            <FormControlLabel
              control={<Checkbox checked={segments.twoStop} onChange={handleSegmentChange} name="twoStop" />}
              label="2 Stops"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Departure Times
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Arrival Times
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Layover Times
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Baggage
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RoundwayFlightFilter;
