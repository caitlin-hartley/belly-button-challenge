
// Read in json
const url = d3.json('https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json');



// Build the metadata panel
function buildMetadata(sample) {
  url.then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const metaResult = metadata.filter(meta => meta.id == sample)[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    const panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(metaResult).forEach(([key, value]) => {
      panel.append("p").text(`${key}: ${value}`);
    });
  });
}



// function to build both charts
function buildCharts(id, data) {
  url.then((data) => {

    // Get the samples field
    let sampleData = data.samples ;
    //console.log(sampleData);

    // Filter the samples for the object with the desired sample number
    const sampleResult = sampleData.filter(sample => sample.id == id)[0];
    //console.log(sampleResult);
    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = sampleResult.otu_ids;
    const otu_labels = sampleResult.otu_labels;
    const sample_values = sampleResult.sample_values;

    // Build a Bubble Chart
    const traceBubble = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Viridis'
      }
    };

    const dataBubble = [traceBubble];

    const layoutBubble = {
      title: 'Bacteria Cultures per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      showlegend: false
    };


    // Render the Bubble Chart
    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const sortedData = sample_values
      .map((value, index) => ({
        otu_id: otu_ids[index],
        otu_label: otu_labels[index],
        sample_value: value
      }))
      .sort((a, b) => b.sample_value - a.sample_value)
      .slice(0, 10);
    
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barTrace = {
      x: sortedData.map(data => data.sample_value).reverse(),
      y: sortedData.map(data => `OTU ${data.otu_id}`).reverse(),
      text: sortedData.map(data => data.otu_label).reverse(),
      type: 'bar',
      orientation: 'h'
    };

    const barData = [barTrace];

    const barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' }
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);

  });
}

// Function to run on page load
function init() {
  url.then((data) => {

    // Get the names field
    const sampleNames = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach(sample => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    const firstSample = data.names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
  
}

// Initialize the dashboard
init();
