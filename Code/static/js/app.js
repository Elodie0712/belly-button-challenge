// Call the URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// API Call - Calling the data
const dataPromise = d3.json(url);

// Fetch the JSON data and console log the top 10 OTUs
dataPromise.then(function(data) {
    console.log("Individual ID: ", data.names);

    // Select the HTML id for dropdown ("selDataset")
    const dropdown = d3.select("#selDataset");

    //  populate the dropdown with all available individual IDs
    const names = data.names;
    const selectedID = data.names[0];

    dropdown
        .selectAll("option")
        .data(names)
        .enter()
        .append("option")
        .text(d => d)
        .attr("value", d => d);

// Handle dropdown change
dropdown.on("change", function() {
    const selectedValue = d3.select(this).property("value");
    barchart(selectedValue, data); // Call barchart function
});


    // Initial render
    barchart(selectedID,data);
});


// Function to update the chart based on the selected individual
function barchart(selectedID,data) {
    // Get data for the selected individual
    const sampleData = data.samples.find(sample => sample.id === selectedID);
    console.log('sample data sample_values', sampleData.sample_values);

  // Take the top 10 values
  const top10SampleValues = sampleData.sample_values.slice(0, 10);
  const top10OtuIds = sampleData.otu_ids.slice(0, 10);

  
console.log(top10SampleValues, top10OtuIds);

// Select the container for the chart
const chartContainer = d3.select("#bar");

// Create bardata dynamically
const bardata = [
    {
        x: top10SampleValues,
        y: top10OtuIds.map(id => `OTU_${id}`),
        type: 'bar',
        orientation: 'h'
    }
];

Plotly.newPlot('bar', bardata);

};
