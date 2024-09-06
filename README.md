# belly-button-challenge

Building and interactive dashboard to explore the Belly Button Biodiversity dataset which catalogs the microbes that colonize human navels.

![bellybutton](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/microbes.jpg)

---

[deployment](https://caitlin-hartley.github.io/belly-button-challenge/)
---

## Metadata

- Use D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json
- Display the sample's metadata
- Loop through each key-value pair from the metadata JSON object and create a text string
- Append an html tag with that text to the #sample-metadata panel

### Code for metadata panel:

![meta](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/meta_code.png)

### Metadata Panel:

![panel](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/meta_chart.png)

---

## Bar Chart

- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
- Used sample_values as the values for the bar chart
- Used otu_ids as the labels for the bar chart
- Used otu_labels as the hovertext for the chart
- Sorted and reversed data to show greatest to smallest
- Spliced data to get top 10 OTUs

### Code for bar chart:

![bar](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/bar_code.png)

### Bar Chart:

![barch](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/bar_chart.png)

---

## Bubble Chart

- Created a bubble chart that displays each sample
- Used otu_ids for the x values
- Used sample_values for the y values
- Used sample_values for the marker size
- Used otu_ids for the marker colors
- Used otu_labels for the text values

### Code for Bubble Chart:

![bubble](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/bubble_code.png)

### Bubble Chart:

![bubblech](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/bubble_chart.png)

---

## Select Data and Update When New ID Selected

![data](https://github.com/caitlin-hartley/belly-button-challenge/blob/main/images/page_load_event_listener.png)
