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
    bubblechart(selectedValue, data)// Call the bubleChart function
    const metadata = getMetadata(selectedValue, data);
    displayMetadata(metadata); // Call displayMetadata function
    updateGaugeChart(metadata); // Call Gauge Chart function with washing frequency

});


    // Initial render
    barchart(selectedID,data);
    bubblechart(selectedID, data);
const initialMetadata = getMetadata(selectedID, data);
    displayMetadata(initialMetadata);
    updateGaugeChart(initialMetadata);  


});


// Function to update the chart based on the selected individual
function barchart(selectedID,data) {
    // Get data for the selected individual
    const sampleData = data.samples.find(sample => sample.id === selectedID);
   
  // Take the top 10 values
  const top10SampleValues = sampleData.sample_values.slice(0, 10);
  const top10OtuIds = sampleData.otu_ids.slice(0, 10);

  console.log(top10SampleValues, top10OtuIds);



  console.log('top10OtuIds.map(id => `OTU_${id}`)', top10OtuIds.map(id => `OTU_${id}`));

// Select the container for the chart
const chartContainer = d3.select("#bar");

// Create bardata dynamically
const bardata = [
    {
        x: top10SampleValues.reverse(),
        y: top10OtuIds.map(id => `OTU_${id}`).reverse(),
        type: 'bar',
        orientation: 'h'
    }
];


Plotly.newPlot('bar', bardata);

};
// Function to update the bubble chart based on the selected individual
function bubblechart(selectedID, data) {
    // Get data for the selected individual
    const sampleData = data.samples.find(sample => sample.id === selectedID);
   // Create bardata dynamically
   const bubbleData = [
    {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        mode: 'markers',
        marker: {
            size: sampleData.sample_values,
            color: sampleData.otu_ids,
            colorscale: 'Viridis',
        },
        text: sampleData.otu_labels,
    }
];

// Layout for the bubble chart
const bubbleLayout = {
    xaxis: { title: 'OTU ID' },
    yaxis: { title: 'Sample Values' },
    showlegend: false,
};

// Create the bubble chart
Plotly.newPlot('bubble', bubbleData, bubbleLayout);
};

// Define metadataContainer 
const metadataContainer = d3.select("#sample-metadata");
// Function to get metadata for the selected individual
function getMetadata(selectedID, data) {
    // Get metadata for the selected individual
    const metadata = data.metadata.find(metadata => metadata.id === parseInt(selectedID));
    return metadata;
};

// Function to display metadata
function displayMetadata(metadata) {
    // Clear existing content in metadataContainer
    metadataContainer.html("");
    
    // Iterate through each key-value pair in the metadata
    Object.entries(metadata).forEach(([key, value]) => {
        // Create a new paragraph element for each key-value pair
        const paragraph = metadataContainer.append("div");

        // Add the key and value as text content to the paragraph
        paragraph.text(`${key}: ${value}`);
    });
};

// Define gauge graph area
const gauge = d3.select("#gauge");

// Define grayscale and greenscale functions
const grayscale = d3.scaleLinear([0, 3], ["white", "grey"]); // Light gray to dark gray
const greenscale = d3.scaleLinear([3, 9], ["lightgreen", "darkgreen"]); // Light green to dark green


function updateGaugeChart(metadata) {
    const wfreq = metadata.wfreq;
    const gaugeData = [
        {
            type: "indicator",
            mode: "gauge+number",
            value: wfreq,
            title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
            gauge: {
                axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "darkblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 3], color:grayscale(0.5) },
                    { range: [3, 9], color: greenscale(6) },
                ],
            },
        },
    ];

    // Create the gauge chart
    Plotly.newPlot("gauge", gaugeData);
}

