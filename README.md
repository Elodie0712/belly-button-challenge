Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Step 1:
Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/e63752c7-0024-4bc7-8c18-35bb72e4a765)

Step 2: 
Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.

Use otu_ids as the labels for the bar chart.

Use otu_labels as the hovertext for the chart.

![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/b30b6fc9-51d8-4e67-8857-5f14a6418981)

![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/447b6ea3-344a-4844-b96c-3c0d13df2347)
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/a3a1dab6-b3d3-4f09-86d8-ab6f6f6e1bcf)
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/950deb79-4746-44e8-b3b2-cd92c3d9169a)

Step 3:
Create a bubble chart that displays each sample.

Use otu_ids for the x values.

Use sample_values for the y values.

Use sample_values for the marker size.

Use otu_ids for the marker colors.

Use otu_labels for the text values.


![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/abb68d6b-e6ea-4cc6-a8b8-f503209f7fdb)
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/81c0f955-6524-402c-8288-f4da79078c46)

![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/a342031c-13e0-401b-a7bf-c18a63dc0b0b)

Step 4:
Display each key-value pair from the metadata JSON object somewhere on the page.
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/fabc6d8a-bc23-40e2-97e0-d13f5211adf2)

![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/196e5469-8c25-4ddf-97d6-9b87cb36df7b)

Optional: Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

You will need to modify the example gauge code to account for values ranging from 0 through 9.

Update the chart whenever a new sample is selected.
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/0788e87a-0c1d-4cd6-89d5-e5c381a2777b)
![image](https://github.com/Elodie0712/belly-button-challenge/assets/148305373/b2d88a13-cd72-49c6-ab5f-ba33c13f0df0)


References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.











